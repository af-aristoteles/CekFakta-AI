import { NextResponse } from 'next/server';

function extractKeywords(text: string | null): string {
  if (!text) return "cek fakta";
  
  const cleanText = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .trim();
  
  const stopWords = new Set([
    'di', 'ke', 'dari', 'pada', 'dalam', 'untuk', 'oleh', 'dengan', 'dan', 'atau',
    'bahwa', 'adalah', 'yaitu', 'ialah', 'telah', 'sudah', 'akan', 'bisa', 'dapat',
    'ada', 'tidak', 'bukan', 'ini', 'itu', 'saya', 'kamu', 'dia', 'mereka', 'kita',
    'kami', 'yang', 'juga', 'karena', 'sehingga', 'jika', 'kalau', 'namun', 'tetapi',
    'melainkan', 'hanya', 'saja', 'isu', 'kabar', 'bohong', 'hoaks', 'hoax', 'fitnah',
    'terbaru', 'viral', 'gempar', 'heboh', 'tentang', 'seperti', 'sebuah', 'adanya',
    'secara', 'maupun', 'serta', 'ybs', 'terkait', 'oleh'
  ]);
  
  const words = cleanText.split(/\s+/).filter(Boolean);
  
  let filtered = words.filter(word => !stopWords.has(word) && word.length > 2);
  
  if (filtered.length === 0) {
    filtered = words.filter(word => word.length > 2);
  }
  if (filtered.length === 0) {
    filtered = words;
  }
  
  const keywords = filtered.slice(0, 3).join(" ");
  return keywords || "cek fakta";
}

const systemInstructionText = `Anda CekFakta AI, Hoax Detector Indonesia. Analisis klaim yang diberikan user secara kritis.
Berikan skor kepercayaan (0-100), tingkat risiko, vonis singkat, ringkasan analisis mendalam, indikator hoaks, tip edukasi digital, serta action_plan untuk pengguna awam.
action_plan berisi:
- immediate_action: Satu instruksi darurat yang jelas dan spesifik apa yang harus dilakukan user SEKARANG JUGA (misal: "Jangan bagikan pesan ini", "Segera hapus dari grup WhatsApp").
- hoax_red_flags: Penjelasan singkat 2-3 ciri fisik spesifik yang membuat klaim ini terdeteksi hoaks (misal: "Tidak ada sumber resmi, menggunakan bahasa provokatif, janji uang gratis tanpa syarat").
- reporting_guide: Panduan singkat langkah-langkah konkret melaporkan konten ini ke instansi resmi (sebutkan aduankonten.id dan cara penggunaannya).
Kembalikan HANYA JSON sesuai schema tanpa penjelasan tambahan di luar JSON.`;

const responseSchema = {
  type: "OBJECT",
  properties: {
    trust_score: { type: "INTEGER", description: "Skor kepercayaan dari 0 sampai 100" },
    risk_level: { type: "STRING", description: "Tingkat risiko (Tinggi, Sedang, Rendah)" },
    verdict_title: { type: "STRING", description: "Kesimpulan singkat (contoh: 'Hoaks', 'Fakta')" },
    analysis_summary: { type: "STRING", description: "Penjelasan mendalam mengapa informasi ini dianggap fakta atau hoaks." },
    hoax_indicators: { type: "ARRAY", items: { type: "STRING" }, description: "Daftar poin indikasi (maksimal 3)." },
    educational_tip: { type: "STRING", description: "Satu kalimat edukasi literasi digital." },
    action_plan: {
      type: "OBJECT",
      properties: {
        immediate_action: { type: "STRING", description: "Langkah darurat yang harus dilakukan user awam saat ini juga." },
        hoax_red_flags: { type: "STRING", description: "Penjelasan singkat ciri fisik yang membuat berita ini terdeteksi hoaks." },
        reporting_guide: { type: "STRING", description: "Panduan singkat cara melaporkan konten ini ke instansi resmi seperti aduankonten.id." }
      },
      required: ["immediate_action", "hoax_red_flags", "reporting_guide"],
      description: "Rencana aksi keamanan siber untuk pengguna awam."
    }
  },
  required: ["trust_score", "risk_level", "verdict_title", "analysis_summary", "hoax_indicators", "educational_tip", "action_plan"]
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const text = formData.get('text') as string | null;
    const imageFile = formData.get('image') as File | null;

    if (!text && !imageFile) {
      return NextResponse.json({ error: 'Text or Image is required' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'GEMINI_API_KEY is not configured.' }, { status: 500 });
    }

    const keywords = extractKeywords(text);

    const promptText = `Kata Kunci: ${keywords}

Klaim:
${text || "Gambar terlampir."}`;

    const parts: any[] = [{ text: promptText }];

    if (imageFile) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64Data = buffer.toString('base64');
      parts.push({
        inlineData: {
          mimeType: imageFile.type,
          data: base64Data
        }
      });
    }

    const payload = {
      systemInstruction: { parts: [{ text: systemInstructionText }] },
      contents: [{ parts }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: "application/json",
        responseSchema: responseSchema
      }
    };

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`;
    let geminiRes;
    let geminiData;
    let finalJSONText = null;

    const MAX_RETRIES = 3;
    let retryCount = 0;

    while (retryCount < MAX_RETRIES) {
      geminiRes = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (geminiRes.ok) {
        geminiData = await geminiRes.json();
        finalJSONText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
        break;
      } else if (geminiRes.status === 503) {
        retryCount++;
        console.warn(`[Gemini API] 503 Service Unavailable. Retry ${retryCount}/${MAX_RETRIES}`);
        if (retryCount >= MAX_RETRIES) {
          return NextResponse.json({ error: 'Koneksi ke AI Node sedang padat. Silakan klik tombol analisa kembali dalam beberapa detik.' }, { status: 503 });
        }
        await new Promise(res => setTimeout(res, 2000));
      } else {
        const errText = await geminiRes.text();
        throw new Error("Gemini API Error: " + geminiRes.status + " " + errText);
      }
    }

    if (!finalJSONText) {
      throw new Error("Invalid response structure from Gemini API");
    }

    let jsonResult;
    try {
      jsonResult = JSON.parse(finalJSONText);
    } catch (parseError) {
      console.error('Error parsing JSON:', finalJSONText);
      return NextResponse.json({ error: 'Gagal memproses hasil analisis JSON dari AI.' }, { status: 500 });
    }

    return NextResponse.json(jsonResult);

  } catch (error: any) {
    console.error('Error analyzing content:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}