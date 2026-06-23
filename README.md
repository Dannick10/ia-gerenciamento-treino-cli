# Sistema Inteligente de Gerenciamento de Treinos via CLI

Componente prático desenvolvido para a disciplina de **Inteligência Artificial para Devs** da **Estácio**. O sistema consiste em uma interface de linha de comando (CLI) interativa que coleta dados antropométricos e objetivos de um atleta para gerar, por meio de inteligência artificial, um planejamento de treino residencial personalizado utilizando a modalidade de streaming de dados.

## Funcionalidades e Diferenciais Técnicos

- **Arquitetura Modular:** Separação clara de responsabilidades entre o ponto de entrada da aplicação (`app.js`), o dicionário de perguntas da interface (`questions.js`) e a camada de serviço da inteligência artificial (`geminiService.js`).
- **Validação de Inputs:** Tratamento robusto de dados via terminal, impedindo a inserção de valores inválidos para idade, peso e altura.
- **Assincronismo e Streaming:** Consumo da API do Gemini utilizando `generateContentStream`, permitindo que o treino seja renderizado no terminal em tempo real à medida que os pacotes de dados são recebidos.
- **Interface Limpa:** Estilização de fluxo via terminal utilizando a biblioteca `Chalk` para melhor legibilidade de dados acadêmicos.

## Tecnologias Utilizadas

- **Runtime:** Node.js (v20 ou superior)
- **SDK Oficial:** @google/genai (Modelo: gemini-2.5-flash)
- **Interface CLI:** inquirer (v12+)
- **Estilização de Terminal:** chalk (v5+)

## Instalação e Configuração

Clone o repositório, navegue até o diretório, instale as dependências e configure as variáveis de ambiente:

```bash
  git clone https://github.com/Dannick10/ia-gerenciamento-treino-cli.git
  ```

Acesse a pasta do projeto:

```bash
cd ia-gerenciamento-treino-cli
  ```

Instale as dependências:

```bash
npm install
  ```

Configure o arquivo de ambiente:
```bash
cp .env.example .env
  ```

  Inicie a aplicação:
```bash
  npm start
  ```
