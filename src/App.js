import './App.css';
import WhatsAppButton from './component/core/Whatsapp/WhatsApp';
import AppRoutes from './routes/AppRoutes';
import React, { useState, useEffect } from "react";
import { BiSolidUpvote } from "react-icons/bi";

function App() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <AppRoutes/>
      <WhatsAppButton/>
      {showBtn && (
        <div className="back-to-top-btn" onClick={handleScrollToTop}>
          <BiSolidUpvote size={50} />
        </div>
      )}
    </div>
  );
}

export default App;