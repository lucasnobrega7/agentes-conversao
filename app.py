import chainlit as cl
import os
import httpx
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get API URL from environment or use default
API_URL = os.getenv("API_URL", "http://localhost:3000")

@cl.on_chat_start
async def on_chat_start():
    """Called when a new chat session starts."""
    # Set the initial state
    cl.user_session.set("history", [])
    
    # Send a welcome message
    await cl.Message(
        content="👋 Bem-vindo aos **Agentes de Conversão**! Como posso ajudar você a melhorar suas estratégias de conversão e automação hoje?",
        author="Agentes de Conversão"
    ).send()

@cl.on_message
async def on_message(message: cl.Message):
    """Called when a new message is received from the user."""
    # Get chat history from the user session
    history = cl.user_session.get("history", [])
    
    # Send a thinking message
    thinking_msg = cl.Message(content="Processando sua mensagem...", author="Agentes de Conversão")
    await thinking_msg.send()
    
    try:
        # Call our API
        async with httpx.AsyncClient() as client:
            response = await client.post(
                f"{API_URL}/api/chat",
                json={
                    "message": message.content,
                    "history": history
                },
                timeout=120.0
            )
            response.raise_for_status()
            data = response.json()
        
        if data.get("success", False):
            # Update history with the user message and assistant response
            history.append({"role": "human", "content": message.content})
            history.append({"role": "assistant", "content": data["response"]})
            cl.user_session.set("history", history)
            
            # Replace the thinking message with the actual response
            await thinking_msg.update(content=data["response"], author="Agentes de Conversão")
        else:
            await thinking_msg.update(
                content=f"Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.",
                author="Sistema"
            )
        
    except Exception as e:
        await thinking_msg.update(
            content=f"Ocorreu um erro: {str(e)}. Por favor, tente novamente em instantes.",
            author="Sistema"
        )