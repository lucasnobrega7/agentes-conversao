const express = require('express');
const cors = require('cors');
const { ChatOpenAI } = require('langchain/chat_models/openai');
const { ChatPromptTemplate } = require('langchain/prompts');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Agentes de Conversão API is running' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    
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

// Start server
app.listen(port, () => {
  console.log(`Agentes de Conversão API running on port ${port}`);
});

module.exports = app;