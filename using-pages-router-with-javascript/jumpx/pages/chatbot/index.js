import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hello! 👋 I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getContextBasedResponse = (userMessage) => {
    // Convert user message to lowercase for easier matching
    const message = userMessage.toLowerCase();

    // Define response categories
    const responses = {
      // Greetings
      greetings: {
        patterns: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'good afternoon'],
        replies: [
          "Hello! How can I assist you today?",
          "Hi there! What can I help you with?",
          "Hey! What brings you here today?"
        ]
      },
      
      // Services Related
      services: {
        patterns: ['services', 'offer', 'provide', 'help', 'solution'],
        replies: [
          "We offer various services including: \n• Full Stack Development\n• E-commerce Solutions\n• API Integration\n• SEO Services\nWhat would you like to know more about?",
          "Our main services include web development, e-commerce, API integration, and SEO. Which area interests you?",
        ]
      },

      // E-commerce Related
      ecommerce: {
        patterns: ['ecommerce', 'shop', 'store', 'selling', 'online store', 'payment'],
        replies: [
          "Our e-commerce solutions include:\n• Custom online stores\n• Payment gateway integration\n• Inventory management\n• Multi-vendor marketplaces\nWould you like more details about any of these?",
          "We can help you set up a complete e-commerce platform with secure payments, inventory management, and more. What's your specific requirement?"
        ]
      },

      // API Related
      api: {
        patterns: ['api', 'integration', 'connect', 'webhook'],
        replies: [
          "We specialize in API integration services including:\n• Payment gateway APIs\n• Social media APIs\n• Custom API development\n• Third-party integrations\nWhat type of integration are you looking for?",
          "Our API services cover everything from custom development to third-party integrations. What would you like to integrate?"
        ]
      },

      // SEO Related
      seo: {
        patterns: ['seo', 'ranking', 'google', 'search engine', 'traffic'],
        replies: [
          "Our SEO services include:\n• On-page optimization\n• Technical SEO\n• Content strategy\n• Local SEO\nWould you like to know more about any of these?",
          "We can help improve your search engine rankings with our comprehensive SEO solutions. What's your current SEO challenge?"
        ]
      },

      // Pricing Related
      pricing: {
        patterns: ['price', 'cost', 'pricing', 'package', 'budget'],
        replies: [
          "Our pricing varies based on project requirements. Would you like to schedule a consultation for a detailed quote?",
          "We offer customized pricing based on your specific needs. Shall we discuss your requirements in detail?"
        ]
      },

      // Contact Related
      contact: {
        patterns: ['contact', 'reach', 'call', 'email', 'phone'],
        replies: [
          "You can reach us through:\n• Email: contact@example.com\n• Phone: +1 234 567 8900\n• Or fill our contact form\nHow would you prefer to connect?",
          "Would you like to schedule a call with our team? We can discuss your requirements in detail."
        ]
      },

      // Default Response
      default: [
        "I understand you're interested in this. Could you provide more details about your requirements?",
        "That's interesting! Could you tell me more about what you're looking for specifically?",
        "I'd be happy to help. Could you elaborate on your needs?"
      ]
    };

    // Find matching category
    for (const category in responses) {
      if (category === 'default') continue;
      
      const matchesPattern = responses[category].patterns.some(pattern => 
        message.includes(pattern)
      );

      if (matchesPattern) {
        const replies = responses[category].replies;
        return replies[Math.floor(Math.random() * replies.length)];
      }
    }

    // Return default response if no category matches
    return responses.default[Math.floor(Math.random() * responses.default.length)];
  };

  const simulateBotResponse = (userMessage) => {
    setIsTyping(true);

    // Simulate API call delay
    setTimeout(() => {
      const response = getContextBasedResponse(userMessage);
      setMessages(prev => [...prev, {
        type: "bot",
        content: response,
        timestamp: new Date(),
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate bot response
    simulateBotResponse(inputMessage);
  };

  return (
    <>
      <style jsx>{`
        .chatbot-container {
          max-width: 1000px;
          margin: 40px auto;
          padding: 20px;
        }

        .chat-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .chat-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(45deg, #2563eb, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 15px;
        }

        .chat-header p {
          color: #64748b;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .chat-window {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 600px;
        }

        .chat-messages {
          flex-grow: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .message {
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 15px;
          font-size: 1rem;
          line-height: 1.5;
          position: relative;
        }

        .message.bot {
          background: #f1f5f9;
          color: #1e293b;
          align-self: flex-start;
          border-bottom-left-radius: 5px;
        }

        .message.user {
          background: #3b82f6;
          color: #ffffff;
          align-self: flex-end;
          border-bottom-right-radius: 5px;
        }

        .timestamp {
          font-size: 0.75rem;
          color: #94a3b8;
          margin-top: 5px;
          text-align: right;
        }

        .typing-indicator {
          padding: 12px 16px;
          background: #f1f5f9;
          border-radius: 15px;
          color: #64748b;
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .typing-dots {
          display: flex;
          gap: 4px;
        }

        .dot {
          width: 6px;
          height: 6px;
          background: #64748b;
          border-radius: 50%;
          animation: typing 1.4s infinite;
        }

        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes typing {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .chat-input {
          padding: 20px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }

        .input-form {
          display: flex;
          gap: 10px;
        }

        .message-input {
          flex-grow: 1;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .message-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .send-button {
          padding: 12px 24px;
          background: linear-gradient(45deg, #3b82f6, #2563eb);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .send-button:hover {
          background: linear-gradient(45deg, #2563eb, #1d4ed8);
          transform: translateY(-2px);
        }

        .send-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 768px) {
          .chatbot-container {
            margin: 20px;
            padding: 10px;
          }

          .chat-window {
            height: 500px;
          }

          .message {
            max-width: 90%;
          }

          .chat-header h1 {
            font-size: 2rem;
          }
        }
      `}</style>

      <div className="chatbot-container">
        <div className="chat-header">
          <h1>AI Chat Assistant</h1>
          <p>Get instant help with your queries about our services and solutions.</p>
        </div>

        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                {message.content}
                <div className="timestamp">
                  {formatTime(message.timestamp)}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                AI is typing
                <div className="typing-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <form onSubmit={handleSubmit} className="input-form">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message here..."
                className="message-input"
                disabled={isTyping}
              />
              <button 
                type="submit" 
                className="send-button"
                disabled={!inputMessage.trim() || isTyping}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot; 