import './App.css';
import React, { useState, useEffect, Suspense, startTransition } from 'react';
import { BiSolidUpvote } from 'react-icons/bi';

const AppRoutes = React.lazy(() => import('./routes/AppRoutes'));
const WhatsAppButton = React.lazy(() => import('./component/core/Whatsapp/WhatsApp'));
const Bot = React.lazy(() => import('./component/ContainerBlock/Chatbot'));

function App() {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      startTransition(() => {
        setShowBtn(window.scrollY > 200); // State change wrapped in startTransition for smoother updates
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Suspense wrapper for all async components to manage loading */}
      <Suspense fallback={<div className="loading-container"><div className="loader"></div></div>}>
        <AppRoutes />
        <WhatsAppButton />
        
        {/* Conditionally render Bot component based on scroll position */}
        {showBtn && <Bot />}
      </Suspense>
    </div>
  );
}

export default App;
