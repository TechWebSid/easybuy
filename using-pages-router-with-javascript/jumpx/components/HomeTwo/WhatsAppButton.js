import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const whatsappNumber = '+918299585163'; 
    
    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    const buttonStyle = {
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        border: 'none',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
        cursor: 'pointer',
        zIndex: 999999,
        transition: 'all 0.3s ease'
    };

    const iconStyle = {
        color: '#ffffff',
        width: '35px',
        height: '35px',
        margin: 0,
        padding: 0
    };

    return (
        <div style={{ position: 'fixed', zIndex: 999999 }}>
            <button 
                onClick={handleWhatsAppClick}
                aria-label="Chat on WhatsApp"
                style={buttonStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
                }}
            >
                <FaWhatsapp style={iconStyle} />
            </button>
        </div>
    );
};

export default WhatsAppButton; 