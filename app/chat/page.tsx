import VapiWrapper from '@/components/VapiWrapper';
import Link from 'next/link';

export default function ChatPage() {
  return (
    <main className="layout">
      {/* --- Left Column: Hero (Modified for Chat) --- */}
      <section className="card" style={{ borderColor: '#06b6d4' }}>
        <div className="badge" style={{ color: '#06b6d4', background: 'rgba(6,182,212,0.1)' }}>
          <span className="badge-dot" style={{ background: '#06b6d4', boxShadow: '0 0 0 6px rgba(6,182,212,0.25)' }}></span>
          Text Support Mode
        </div>
        
        <h1>
          Secure <span className="gradient" style={{ backgroundImage: 'linear-gradient(to right, #06b6d4, #3b82f6)' }}>Chat Verification</span>
        </h1>
        
        <p className="subtitle">
          Prefer not to speak? Use our secure chat interface to complete your KYC process.
        </p>
      </section>

      {/* --- Right Column: Form --- */}
      <section>
        <div className="kyc-form-shell">
          <h2 style={{ fontSize: '1rem', marginBottom: '1rem' }}>💬 Chat Transcript</h2>
          <div style={{ height: '150px', border: '1px dashed #334155', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontSize: '0.8rem' }}>
            Chat history will appear here...
          </div>
        </div>
      </section>

      {/* Link back to Voice Page */}
      <div className="nav-secondary">
        Want to talk instead? <Link href="/">Switch to Voice Mode →</Link>
      </div>

      {/* VAPI Widget: CHAT MODE */}
      <VapiWrapper 
        mode="chat" 
        publicKey={process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || ''} 
        assistantId={process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || ''} 
      />
    </main>
  );
}