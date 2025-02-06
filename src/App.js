import './App.css';
import React, { Suspense } from 'react';

const AppRoutes = React.lazy(() => import('./routes/AppRoutes'));
const WhatsAppButton = React.lazy(() => import('./component/core/Whatsapp/WhatsApp'));
const Bot = React.lazy(() => import('./component/ContainerBlock/Chatbot'));

function App() {
  return (
    <div>
      {/* Suspense wrapper for all async components to manage loading */}
      <Suspense fallback={<div className="loading-container"><div className="loader"></div></div>}>
        <AppRoutes />
        <WhatsAppButton />
          <Bot />
      </Suspense>
    </div>
  );
}

export default App;
