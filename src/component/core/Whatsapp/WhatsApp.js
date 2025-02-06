import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+919783870541";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the WhatsApp button as soon as the component mounts
    setIsVisible(true);
  }, []);

  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const whatsappLink = isMobile()
    ? `https://wa.me/${phoneNumber}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <>
      {isVisible && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#25D366",
            color: "white",
            textDecoration: "none",
            borderRadius: "50px",
            padding: "12px 20px",
            fontSize: "16px",
            fontWeight: "bold",
            position: "fixed",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            cursor: "pointer",
          }}
        >
          <FaWhatsapp size={24} className="me-2" />
          Chat with Us
        </a>
      )}
    </>
  );
};

export default WhatsAppButton;
