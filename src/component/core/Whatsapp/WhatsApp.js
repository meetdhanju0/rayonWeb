

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9783870541";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const whatsappLink = isMobile
    ? `https://wa.me/${phoneNumber}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  return (
    <a  
      href={whatsappLink}
      target="_blank"
      className="whatsapp-btn"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#25D366",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
        <FaWhatsapp size={24} />
    </a>

  );
};

export default WhatsAppButton;
