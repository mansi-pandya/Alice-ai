import { GoogleGenAI } from "@google/genai";  

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  responseMimeType: "text/plain",
  maxOutputTokens: 1000,
};

async function run(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: generationConfig,
    });

    return typeof response.text === "function"
    ? response.text()
    : response.text;;
  }catch (error) {
    const msg = error?.message || "";

    if (msg.includes("429")) {
      console.log("Quota exceeded. Please wait and try again.");
    } else {
      console.error(error);
    }

    return "Sorry, something went wrong.";
}
}

  export default run;


