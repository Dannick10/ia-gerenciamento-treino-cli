export const questions = [
  {
    type: "input",
    name: "nome",
    message: "Digite o seu nome:",
    default: "Atleta",
    validate: (input) =>
      input.trim() !== "" || "Por favor, insira um nome válido.",
  },
  {
    type: "input",
    name: "idade",
    message: "Digite a sua idade (anos):",
    validate: (input) => {
      const numero = parseInt(input);
      return (
        (!isNaN(numero) && numero > 0 && numero < 120) ||
        "Por favor, insira uma idade válida."
      );
    },
  },
  {
    type: "input",
    name: "peso",
    message: "Digite o seu peso atual (em kg, ex: 75.5):",
    validate: (input) => {
      const numero = parseFloat(input);
      return (
        (!isNaN(numero) && numero > 30 && numero < 300) ||
        "Por favor, insira un peso válido (ex: 70 ou 82.5)."
      );
    },
  },
  {
    type: "input",
    name: "altura",
    message: "Digite a sua altura (em metros, ex: 1.75):",
    validate: (input) => {
      const numero = parseFloat(input);
      return (
        (!isNaN(numero) && numero > 1.0 && numero < 2.5) ||
        "Por favor, insira uma altura válida usando ponto (ex: 1.75)."
      );
    },
  },
  {
    type: "select",
    name: "experiencia",
    message: "Qual é o seu nível atual de experiência com treinos?",
    choices: [
      "Iniciante (Nunca treinou ou está parado há muito tempo)",
      "Intermediário (Já treina de forma consistente há alguns meses)",
      "Avançado (Treina há anos e domina boa parte dos movimentos)",
    ],
  },
  {
    type: "select",
    name: "objetivo",
    message: "Selecione o seu objetivo principal:",
    choices: [
      "Calistenia (Treino com peso corporal)",
      "Hipertrofia (Ganho de massa)",
      "Emagrecimento / Cardio",
      "Condicionamento Geral",
    ],
  },
  {
    type: "select",
    name: "dias",
    message: "Quantos dias por semana você tem disponíveis?",
    choices: ["2 dias", "3 dias", "4 dias", "5 dias", "6 dias"],
  },
  {
    type: "input",
    name: "limitacoes",
    message:
      "Informe alguma lesão ou limitação médica (Se nenhuma, pressione Enter):",
    default: "Nenhuma",
  },
];
