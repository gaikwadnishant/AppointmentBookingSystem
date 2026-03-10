import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [role, setRole] = useState("patient");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", display: "flex", background: "#FAFAF8" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hero-title { font-family: 'Playfair Display', serif; }
        .input-field { width: 100%; padding: 14px 18px; border: 1.5px solid #e5e5f0; border-radius: 14px; font-size: 15px; font-family: 'DM Sans', sans-serif; color: #1a1a2e; background: white; outline: none; transition: all 0.2s; }
        .input-field:focus { border-color: #2A7B6F; box-shadow: 0 0 0 4px rgba(42,123,111,0.1); }
        .btn-primary { width: 100%; background: linear-gradient(135deg, #2A7B6F 0%, #1a5c52 100%); color: white; border: none; padding: 16px; border-radius: 14px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s; letter-spacing: 0.3px; box-shadow: 0 4px 20px rgba(42,123,111,0.35); font-family: 'DM Sans', sans-serif; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(42,123,111,0.45); }
        .role-btn { flex: 1; padding: 12px; border-radius: 10px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; border: none; }
        .social-btn { width: 100%; padding: 14px; border: 1.5px solid #e5e5f0; border-radius: 14px; font-size: 15px; font-weight: 500; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; background: white; color: #444; display: flex; align-items: center; justify-content: center; gap: 10px; }
        .social-btn:hover { border-color: #2A7B6F; background: rgba(42,123,111,0.03); }
        @keyframes slideIn { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
        .slide-in { animation: slideIn 0.6s ease forwards; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner { width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.8s linear infinite; display: inline-block; }
      `}</style>

      {/* Left Panel */}
      <div style={{ flex: 1, background: "linear-gradient(135deg, #1a1a2e 0%, #2A7B6F 100%)", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "60px", position: "relative", overflow: "hidden" }}>
        {/* Background decoration */}
        <div style={{ position: "absolute", top: "-10%", right: "-15%", width: 450, height: 450, background: "rgba(255,255,255,0.04)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: 550, height: 550, background: "rgba(255,255,255,0.04)", borderRadius: "50%" }} />
        
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 80 }}>
            <div style={{ width: 40, height: 40, background: "rgba(255,255,255,0.2)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontSize: 20 }}>✦</span>
            </div>
            <span className="hero-title" style={{ fontSize: 24, fontWeight: 700, color: "white" }}>MediBook</span>
          </div>
          <h2 className="hero-title" style={{ fontSize: 44, fontWeight: 900, color: "white", lineHeight: 1.2, marginBottom: 20 }}>
            Welcome<br />Back to<br />
            <span style={{ fontStyle: "italic", color: "#5be8d5" }}>Your Health</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.8 }}>Sign in to access your appointments, health records, and connect with your care team.</p>
        </div>

        {/* Feature list */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {[
            { icon: "🔒", text: "Secure & HIPAA compliant" },
            { icon: "📱", text: "Access from any device" },
            { icon: "🩺", text: "1,200+ verified specialists" },
          ].map(f => (
            <div key={f.text} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <div style={{ width: 36, height: 36, background: "rgba(255,255,255,0.1)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{f.icon}</div>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>{f.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Form */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "60px", overflowY: "auto" }}>
        <div className="slide-in" style={{ width: "100%", maxWidth: 420 }}>
          <div style={{ marginBottom: 40 }}>
            <h1 className="hero-title" style={{ fontSize: 34, fontWeight: 800, color: "#1a1a2e", marginBottom: 10 }}>Sign In</h1>
            <p style={{ color: "#8888aa", fontSize: 15 }}>Don't have an account? <a href="#" style={{ color: "#2A7B6F", fontWeight: 600, textDecoration: "none" }}>Register now →</a></p>
          </div>

          {/* Role Selector */}
          <div style={{ background: "#f0f0f8", borderRadius: 14, padding: 5, display: "flex", gap: 4, marginBottom: 30 }}>
            {[
              { key: "patient", label: "👤 Patient" },
              { key: "provider", label: "🩺 Provider" },
              { key: "admin", label: "⚙️ Admin" },
            ].map(r => (
              <button key={r.key} className="role-btn" onClick={() => setRole(r.key)} style={{ background: role === r.key ? "white" : "transparent", color: role === r.key ? "#2A7B6F" : "#8888aa", boxShadow: role === r.key ? "0 2px 10px rgba(0,0,0,0.08)" : "none", fontWeight: role === r.key ? 600 : 400 }}>{r.label}</button>
            ))}
          </div>

          {/* Social Logins */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
            <button className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button className="social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ flex: 1, height: 1, background: "#e5e5f0" }} />
            <span style={{ color: "#aaaacc", fontSize: 13 }}>or continue with email</span>
            <div style={{ flex: 1, height: 1, background: "#e5e5f0" }} />
          </div>

          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 8, letterSpacing: "0.3px" }}>Email Address</label>
              <input className="input-field" type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e", letterSpacing: "0.3px" }}>Password</label>
                <a href="#" style={{ fontSize: 13, color: "#2A7B6F", fontWeight: 500, textDecoration: "none" }}>Forgot password?</a>
              </div>
              <div style={{ position: "relative" }}>
                <input className="input-field" type={showPassword ? "text" : "password"} placeholder="••••••••" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} style={{ paddingRight: 50 }} />
                <button onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "#aaa" }}>
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
              <input type="checkbox" style={{ width: 16, height: 16, accentColor: "#2A7B6F" }} />
              <span style={{ fontSize: 14, color: "#6666aa" }}>Keep me signed in for 30 days</span>
            </label>
          </div>

          <button className="btn-primary" onClick={handleSubmit}>
            {loading ? <span className="spinner" /> : `Sign in as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
          </button>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#aaaacc" }}>
            By signing in, you agree to our <a href="#" style={{ color: "#2A7B6F", textDecoration: "none" }}>Terms of Service</a> and <a href="#" style={{ color: "#2A7B6F", textDecoration: "none" }}>Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}