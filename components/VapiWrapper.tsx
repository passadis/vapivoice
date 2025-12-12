'use client';

import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vapi-widget': any;
    }
  }
}

interface VapiWrapperProps {
  mode: 'voice' | 'chat';
  assistantId: string;
  publicKey: string;
}

export default function VapiWrapper({ mode, assistantId, publicKey }: VapiWrapperProps) {
  useEffect(() => {
    // Dynamically load the Vapi script
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if necessary (though usually the script stays)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <vapi-widget
      public-key={publicKey}
      assistant-id={assistantId}
      mode={mode}
      theme="dark"
      size="compact"
      position="bottom-right"
      radius="large"
      base-color="#020617"
      accent-color="#0b5a28ff"
      button-base-color="#186e37ff"
      button-accent-color="#020617"
      main-label={mode === 'voice' ? "KYC Voice Agent" : "KYC Chat Agent"}
      start-button-text={mode === 'voice' ? "Start Call" : "Start Chat"}
    />
  );
}