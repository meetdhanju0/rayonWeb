import React, { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    // Dynamically load the Botpress Webchat scripts
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v2.2/inject.js';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/02/05/07/20250205074245-A0BW55OB.js';
    script2.async = true;

    // Append scripts to the document
    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }, []);

  return <div />; // This is a placeholder, as the scripts will inject the chat interface
};

export default BotpressChat;
