import { GoogleGenAI } from "@google/genai";

const Gemini_Model = 'gemini-2.5-flash';
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export async function gerarTreinoStream(dadosAtleta) {
  const { nome, idade, peso, altura, experiencia, objetivo, dias, limitacoes } =
    dadosAtleta;

  const prompt = `
Atue como um Personal Trainer especialista em fisiologia do exercício e treinamento funcional. 
    Monte uma rotina de treinos estruturada com base no seguinte perfil clínico/esportivo:
    
    - Atleta: ${nome}
    - Idade: ${idade} anos
    - Peso Corpóreo: ${peso} kg
    - Estatura: ${altura} m
    - Nível de Aptidão Física: ${experiencia}
    - Objetivo Principal: ${objetivo}
    - Frequência Semanal: ${dias}
    - Restrições Ortopédicas/Limitações: ${limitacoes}
    
    Regras de Formatação da Ficha:
    1. Divida claramente por dias de treino condizentes com a frequência semanal informada.
    2. Para cada exercício inclua: Nome técnico, Séries, Repetições (ou tempo de estímulo) e uma Diretriz de Execução focada na postura e segurança.
    3. Adicione uma recomendação de aquecimento específico no início e o tempo de intervalo recomendado entre as séries.
    4. Mantenha um tom estritamente profissional, técnico e não utilize emojis na resposta.
    `;

  return await ai.models.generateContentStream({
    model: Gemini_Model,
    contents: prompt,
  });
}
