import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const servicesData = [
  {
    iconName: "flaticon-chip",
    title: "Customize Website",
    shortText:
      "Start to Create visually stunning and responsive websites that reflect your brand identity and enhance user experience starting with low budget.",
    viewDetails: "/services/customize-website/",
  },
  {
    iconName: "flaticon-vr",
    title: "E-commerce solutions",
    shortText:
      "Easy2BuyHub simplifies e-commerce by offering product listings, platform tie-ups, supplier networks, and comprehensive digital marketing.",
    viewDetails: "/services/e-commerce/",
  },
  {
    iconName: "flaticon-blockchain",
    title: "SEO optimization",
    shortText:
      "Boost your website's visibility and attract organic traffic through expert SEO strategies, improving rankings and engagement.",
    viewDetails: "/services/seo/",
  },
  {
    iconName: "flaticon-target",
    title: "Full Stack Development",
    shortText:
      "Deliver scalable and high-performance applications using modern technologies like React.js, Node.js, MongoDB, Next.js, Capacitor.js.",
    viewDetails: "/services/fullstack/",
  },
  {
    iconName: "flaticon-choice",
    title: "API Integration",
    shortText:
      "Enhance your applications by integrating third-party APIs seamlessly, improving functionality, enriching user experience, automating processes.",
    viewDetails: "/services/api/",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Digital Marketing",
    shortText:
      "Accelerating growth through customized strategies and powerful digital solutions designed to elevate your business and maximize results.",
    viewDetails: "/services/digital-marketing/",
  },
];

const ServicesStyleTwo = () => {
  const router = useRouter();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hello! 👋 I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const additionalStyles = `
    .chat-window-container {
      position: fixed;
      bottom: 100px;
      right: 30px;
      width: 320px;
      height: 400px;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
    }

    .chat-window-container.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .chat-header {
      padding: 15px;
      background: linear-gradient(45deg, #3b82f6, #2563eb);
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .chat-header h3 {
      margin: 0;
      font-size: 1.1rem;
      color: white;
    }

    .close-chat {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 1.5rem;
      padding: 0;
      line-height: 1;
    }

    .chat-messages {
      flex-grow: 1;
      padding: 15px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .message {
      max-width: 85%;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 0.9rem;
      line-height: 1.4;
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

    .chat-input {
      padding: 12px;
      border-top: 1px solid #e2e8f0;
      background: #f8fafc;
    }

    .chat-input form {
      display: flex;
      gap: 8px;
    }

    .chat-input input {
      flex-grow: 1;
      padding: 8px 12px;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      outline: none;
      font-size: 0.9rem;
    }

    .chat-input input:focus {
      border-color: #3b82f6;
    }

    .chat-input button {
      padding: 8px 16px;
      background: #3b82f6;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
    }

    .chat-input button:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      .chat-window-container {
        width: 280px;
        height: 350px;
        bottom: 80px;
        right: 20px;
      }
    }

    .chat-assistant-button {
      position: fixed;
      bottom: 30px;
      left: 30px;
      padding: 12px 20px;
      background: linear-gradient(45deg, #2563eb, #4f46e5);
      color: #fff;
      border: none;
      border-radius: 40px;
      font-size: 0.95rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 1000;
      border: 2px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      animation: pulseAnimation 2s infinite;
    }

    .chat-assistant-button:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5);
      background: linear-gradient(45deg, #1d4ed8, #4338ca);
    }

    .chat-icon {
      font-size: 1.2rem;
      animation: bounce 2s infinite;
      background: rgba(255, 255, 255, 0.2);
      padding: 6px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    @keyframes pulseAnimation {
      0% {
        box-shadow: 0 5px 20px rgba(37, 99, 235, 0.4);
      }
      50% {
        box-shadow: 0 5px 30px rgba(37, 99, 235, 0.6);
      }
      100% {
        box-shadow: 0 5px 20px rgba(37, 99, 235, 0.4);
      }
    }

    .chat-notification {
      position: absolute;
      top: -3px;
      right: -3px;
      width: 8px;
      height: 8px;
      background-color: #22c55e;
      border-radius: 50%;
      border: 1.5px solid white;
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.2);
        opacity: 0.8;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      .chat-assistant-button {
        bottom: 15px;
        left: 15px;
        padding: 10px 16px;
        font-size: 0.9rem;
      }
    }
  `;

  const chatButtonJSX = (
    <button 
      className="chat-assistant-button"
      onClick={() => setIsChatOpen(!isChatOpen)}
    >
      <div style={{ position: 'relative' }}>
        <span className="chat-icon">💬</span>
        <span className="chat-notification"></span>
      </div>
      <span style={{ 
        fontWeight: '600',
        letterSpacing: '0.3px',
        textShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}>
        Chat with AI Assistant
      </span>
    </button>
  );

  const chatWindowJSX = (
    <>
      {chatButtonJSX}
      <div className={`chat-window-container ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <h3>AI Assistant</h3>
          <button className="close-chat" onClick={() => setIsChatOpen(false)}>×</button>
        </div>
        
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              {message.content}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <form onSubmit={(e) => {
            e.preventDefault();
            if (!inputMessage.trim()) return;
            
            // Add user message
            setMessages(prev => [...prev, {
              type: "user",
              content: inputMessage,
              timestamp: new Date(),
            }]);
            
            // Clear input
            setInputMessage("");
            
            // Simulate bot response
            setIsTyping(true);
            setTimeout(() => {
              setMessages(prev => [...prev, {
                type: "bot",
                content: "Thank you for your message. I'll help you with that.",
                timestamp: new Date(),
              }]);
              setIsTyping(false);
            }, 1000);
          }}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              disabled={isTyping}
            />
            <button type="submit" disabled={!inputMessage.trim() || isTyping}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );

  return (
    <>
      <style jsx>{`
        .offer-area {
          padding: 50px 0;
          background-color: #f9f9f9;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .section-title {
          text-align: center;
          margin-bottom: 30px;
        }

        .section-title h2 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .section-title p {
          font-size: 1rem;
          color: #666;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .service-card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .service-card i {
          font-size: 2.5rem;
          color: #007bff;
          margin-bottom: 15px;
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #333;
        }

        .service-card p {
          font-size: 1rem;
          color: #666;
          margin-bottom: 20px;
        }

        .view-details-button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .view-details-button:hover {
          background-color: #0056b3;
        }

        ${additionalStyles}
      `}</style>

      <div className="offer-area">
        <div className="container">
          <div className="section-title">
            <h2>Our Services at Easy2BuyHub</h2>
            <p>
              We offer a wide range of professional services to help you find
              the best deals online. Our experts are here to guide you through
              the buying process, making it simple and hassle-free.
            </p>
          </div>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div key={index} className="service-card">
                <i className={service.iconName}></i>
                <h3>{service.title}</h3>
                <p>{service.shortText}</p>
                <Link href={service.viewDetails}>
                  <button className="view-details-button">View Details</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {chatWindowJSX}
    </>
  );
};

export default ServicesStyleTwo;
