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
    const message = userMessage.toLowerCase();

    const responses = {
      website: {
        patterns: ['website', 'web', 'make websites', 'create website', 'build website', 'development'],
        replies: [
          "I can help you create a professional website! Here's what we offer:\n\n• Custom Website Development\n• Modern, Responsive Design\n• E-commerce Integration\n• SEO Optimization\n• Fast Loading Speed\n\nWhat type of website would you like to build?",
          "For website development, we provide:\n\n• Professional UI/UX Design\n• Mobile-First Approach\n• Content Management System\n• Security Features\n• 24/7 Support\n\nWould you like to discuss your website requirements?"
        ]
      },

      ecommerce: {
        patterns: ['e-commerce', 'ecommerce', 'online store', 'shop', 'selling online', 'help in e-commerce'],
        replies: [
          "I'll help you set up your e-commerce store! We offer:\n\n• Custom Online Store Development\n• Payment Gateway Integration\n• Inventory Management\n• Order Processing System\n• Mobile Shopping Experience\n\nWhat features do you need for your online store?",
          "Our e-commerce solutions include:\n\n• User-Friendly Shopping Cart\n• Secure Payment Processing\n• Product Management\n• Customer Analytics\n• Marketing Tools\n\nWould you like to know more about any specific feature?"
        ]
      },

      marketing: {
        patterns: ['marketing', 'digital marketing', 'promote', 'seo', 'social media'],
        replies: [
          "Our digital marketing services include:\n\n• Search Engine Optimization (SEO)\n• Social Media Marketing\n• Content Marketing\n• Email Campaigns\n• Analytics & Reporting\n\nWhat marketing goals would you like to achieve?",
          "We can boost your online presence with:\n\n• Keyword Optimization\n• Social Media Management\n• PPC Advertising\n• Content Strategy\n• Performance Tracking\n\nHow can we help grow your business online?"
        ]
      },

      internship: {
        patterns: ['internship', 'intern', 'training', 'learn'],
        replies: [
          "We offer three exciting internship programs:\n\n• Frontend Development (₹6,000)\n• Backend Development (₹6,000)\n• Full Stack Development (₹9,500)\n\nAll programs include mentorship and real projects. Which one interests you?",
          "Our internship programs feature:\n\n• Expert Mentorship\n• Hands-on Projects\n• Industry Certification\n• Job Placement Support\n• Flexible Learning\n\nWould you like details about a specific program?"
        ]
      },

      contact: {
        patterns: ['contact', 'reach', 'support', 'phone', 'email'],
        replies: [
          "You can reach us through:\n\n• Email: customercare@easy2buyhub.com\n• Phone: +91-8317068532\n• Location: Industrial Area Near Sitapur City Mall\n\nOur team is available Mon-Fri, 9 AM to 6 PM IST. How would you like to connect?",
          "Let's get in touch! Contact us via:\n\n• Email: customercare@easy2buyhub.com\n• Phone: +91-8317068532\n• Visit: Sitapur City Mall\n\nWould you like to schedule a consultation?"
        ]
      },

      default: [
        "I'd be happy to help! We specialize in:\n\n• Website Development\n• E-commerce Solutions\n• Digital Marketing\n• Internship Programs\n\nWhat service are you interested in?",
        "Thanks for reaching out! We offer:\n\n• Custom Websites\n• Online Stores\n• Digital Marketing\n• Professional Training\n\nWhat would you like to know more about?"
      ]
    };

    // Check for matches
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