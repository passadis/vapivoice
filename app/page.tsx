import VapiWrapper from '@/components/VapiWrapper';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="layout">
      {/* --- Left Column: Hero --- */}
      <section className="card">
        <div className="badge">
          <span className="badge-dot"></span>
          Verified in under 2 minutes
        </div>
        
        <h1>
          Voice-first <span className="gradient">KYC verification</span> for new customers.
        </h1>
        
        <p className="subtitle">
          Talk to our AI compliance agent to complete your KYC. 
          Your answers are transcribed and securely mapped in real time.
        </p>

        <div className="highlights">
          <div className="pill"><span className="pill-icon"></span>Real-time identity checks</div>
          <div className="pill"><span className="pill-icon"></span>GDPR-ready</div>
        </div>
      </section>

      {/* --- Right Column: Form + Visuals --- */}
      <section>
        <div className="kyc-form-shell">
          <h2 style={{ fontSize: '1rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
            <span>🪪</span> KYC Snapshot
          </h2>
          {/* Fictitious Form Fields */}
          <div className="field-row">
            <label>Full Name <input type="text" placeholder="Jordan Example" /></label>
          </div>
          <div className="field-row">
            <label>ID Number <input type="text" placeholder="AB123456" /></label>
          </div>
          <button className="primary-btn">Submit Data</button>
        </div>

        {/* Voice Animation Panel */}
        <div className="voice-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
             <span style={{ color: '#d1fae5', fontSize: '0.85rem' }}>AcmeID Voice Assistant</span>
             <span className="badge" style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid #22c55e' }}>Live</span>
          </div>
          <div className="wave">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
      </section>

      {/* Link to Chat Page */}
      <div className="nav-secondary">
        Prefer typing? <Link href="/chat">Switch to Text-Only Mode →</Link>
      </div>

      {/* VAPI Widget: VOICE MODE */}
      <VapiWrapper 
        mode="voice" 
        publicKey={process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || ''} 
        assistantId={process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || ''} 
      />
    </main>
  );
}