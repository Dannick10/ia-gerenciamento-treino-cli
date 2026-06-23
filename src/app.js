import inquirer from "inquirer";
import chalk from "chalk";
import { questions } from "./questions.js";
import { gerarTreinoStream } from "./geminiService.js";

async function execute() {
  console.clear();

  console.log(
    chalk.cyan.bold("=================================================="),
  );
  console.log(
    chalk.cyan.bold("       SISTEMA DE GERENCIAMENTO DE TREINO (CLI)   "),
  );
  console.log(
    chalk.cyan.bold("==================================================\n"),
  );

  try {
    const respostas = await inquirer.prompt(questions);

    console.log(
      chalk.green(
        `\n[Processando] Estabelecendo conexão e gerando planejamento para: ${respostas.objetivo}...`,
      ),
    );
    console.log(
      chalk.cyan("==================================================\n"),
    );

    const responseStream = await gerarTreinoStream(respostas);

    for await (const chunk of responseStream) {
      process.stdout.write(chunk.text);
    }

    console.log(
      chalk.cyan("\n\n=================================================="),
    );
    console.log(
      chalk.green.bold("Procedimento finalizado com sucesso. Bons treinos."),
    );
    console.log(
      chalk.cyan("=================================================="),
    );

    console.log("\n");
    console.log(
      chalk.gray("  __________________________________________________"),
    );
    console.log(
      chalk.gray(" |                                                  |"),
    );
    console.log(
      chalk.blue.bold(" |  ESTÁCIO - Inteligência Artificial para Devs     |"),
    );
    console.log(
      chalk.gray(" | Daniel Rocha da SIlva                            |"),
    );
    console.log(
      chalk.gray(" |__________________________________________________|"),
    );
    console.log("\n");

    
  } catch (err) {
    console.error(
      chalk.red.bold("\n[Erro]: Ocorreu uma falha durante a execução:"),
      err.message,
    );
  }
}

execute();
