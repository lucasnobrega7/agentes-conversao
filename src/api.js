import express from 'express';
import cors from 'cors';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { ChatPromptTemplate } from 'langchain/prompts';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuração do dotenv
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inicializar o app Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal para servir a página inicial
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Agentes de Conversão - API</title>
        <style>
          body {
            font-family: 'Söhne', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
            background-color: #0e0e10;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 800px;
            text-align: center;
            background-color: #1a1a1d;
            padding: 40px;
            border-radius: 12px;
            border: 1px solid #27272a;
            box-shadow: 0 10px 30px -15px rgba(0,0,0,0.5);
          }
          h1 {
            margin-bottom: 20px;
            background: linear-gradient(90deg, #46B2E0, #8A53D2, #E056A0);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 2.5rem;
          }
          p {
            margin-bottom: 30px;
            line-height: 1.6;
            font-size: 1.1rem;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            margin: 0 10px;
            background: linear-gradient(90deg, #46B2E0, #8A53D2, #E056A0);
            border: none;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            text-decoration: none;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }
          code {
            background-color: #27272a;
            padding: 2px 5px;
            border-radius: 4px;
            font-family: 'Menlo', monospace;
          }
          .endpoints {
            text-align: left;
            background-color: #27272a;
            padding: 20px;
            border-radius: 8px;
            margin-top: 30px;
          }
          .endpoints h2 {
            margin-top: 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Agentes de Conversão API</h1>
          <p>API para integração com serviços de conversação e automação com IA.</p>
          
          <a href="/api/health" class="button">Verificar Status</a>
          <a href="https://agentesdeconversao.com.br" class="button">Interface</a>
          
          <div class="endpoints">
            <h2>Endpoints Disponíveis:</h2>
            <ul>
              <li><code>GET /api/health</code> - Verificar status da API</li>
              <li><code>POST /api/chat</code> - Interagir com o assistente de IA</li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  `);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Agentes de Conversão API is running',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    
    // Verificar se a chave da API OpenAI está configurada
    if (!process.env.OPENAI_API_KEY) {
      console.warn('OPENAI_API_KEY não está configurada no ambiente');
      return res.status(500).json({
        success: false,
        error: 'API key não configurada'
      });
    }
    
    // Initialize ChatOpenAI with API key
    const model = new ChatOpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0.7,
      modelName: 'gpt-4o', // Using GPT-4o
    });
    
    // Create a chat prompt template
    const chatPrompt = ChatPromptTemplate.fromMessages([
      ["system", "Você é um assistente especializado em aumentar conversões e fazer automações usando IA. Seu nome é 'Agentes de Conversão' e você ajuda os usuários com estratégias de conversão e automação."],
      ...history.map(msg => [msg.role, msg.content]),
      ["human", message]
    ]);
    
    // Call the LLM
    const chain = chatPrompt.pipe(model);
    const response = await chain.invoke({});
    
    // Return the response
    res.json({
      success: true,
      response: response.content,
      metadata: {
        model: model.modelName,
        created: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Iniciar servidor
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Agentes de Conversão API rodando em http://0.0.0.0:${port}`);
  console.log(`👉 Endpoints disponíveis: /api/health e /api/chat`);
  console.log(`🔧 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});

export default app;