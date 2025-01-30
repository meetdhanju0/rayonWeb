import './App.css';
import React, { useState, useEffect, Suspense, startTransition } from 'react';
import { BiSolidUpvote } from 'react-icons/bi';

const AppRoutes = React.lazy(() => import('./routes/AppRoutes'));
const WhatsAppButton = React.lazy(() => import('./component/core/Whatsapp/WhatsApp'));

function App() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      startTransition(() => {
        setShowBtn(window.scrollY > 200); // Wrapping state change inside startTransition
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Wrap async components with Suspense for lazy loading */}
      <Suspense fallback={<div className="loading-container"><div className="loader"></div></div>}>
        <AppRoutes />
      </Suspense>
      
      <Suspense fallback={<div className="loading-container"><div className="loader"></div></div>}>
        <WhatsAppButton />
      </Suspense>

      {/* Scroll-to-top button that appears when the user scrolls down */}
      {showBtn && (
        <div className="back-to-top-btn" onClick={handleScrollToTop}>
          <BiSolidUpvote size={50} />
        </div>
      )}
    </div>
  );
}

export default App;
