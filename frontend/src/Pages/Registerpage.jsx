import { useState } from "react";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("patient");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", confirm: "", dob: "", gender: "", specialty: "" });
  const [agreed, setAgreed] = useState(false);

  const specialties = ["Cardiology", "Neurology", "Dentistry", "Orthopedics", "Dermatology", "Pediatrics", "Oncology", "Gynecology"];

  const totalSteps = role === "provider" ? 3 : 2;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#FAFAF8", display: "flex" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hero-title { font-family: 'Playfair Display', serif; }
        .input-field { width: 100%; padding: 13px 18px; border: 1.5px solid #e5e5f0; border-radius: 12px; font-size: 15px; font-family: 'DM Sans', sans-serif; color: #1a1a2e; background: white; outline: none; transition: all 0.2s; }
        .input-field:focus { border-color: #2A7B6F; box-shadow: 0 0 0 4px rgba(42,123,111,0.1); }
        .select-field { width: 100%; padding: 13px 18px; border: 1.5px solid #e5e5f0; border-radius: 12px; font-size: 15px; font-family: 'DM Sans', sans-serif; color: #1a1a2e; background: white; outline: none; appearance: none; cursor: pointer; }
        .select-field:focus { border-color: #2A7B6F; box-shadow: 0 0 0 4px rgba(42,123,111,0.1); }
        .btn-primary { background: linear-gradient(135deg, #2A7B6F 0%, #1a5c52 100%); color: white; border: none; padding: 15px 30px; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; font-family: 'DM Sans', sans-serif; box-shadow: 0 4px 20px rgba(42,123,111,0.35); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(42,123,111,0.45); }
        .btn-secondary { background: #f0f0f8; color: #4a4a6a; border: none; padding: 15px 30px; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
        .btn-secondary:hover { background: #e5e5f5; }
        .role-card { border: 2px solid #e5e5f0; border-radius: 18px; padding: 24px; cursor: pointer; transition: all 0.2s; text-align: center; }
        .role-card.active { border-color: #2A7B6F; background: rgba(42,123,111,0.04); }
        .step-indicator { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; transition: all 0.3s; }
        @keyframes fadeSlide { from{opacity:0;transform:translateX(20px)} to{opacity:1;transform:translateX(0)} }
        .fade-slide { animation: fadeSlide 0.4s ease forwards; }
      `}</style>

      {/* Left Sidebar */}
      <div style={{ width: 320, background: "linear-gradient(160deg, #1a1a2e 0%, #2A7B6F 100%)", display: "flex", flexDirection: "column", padding: "50px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "30%", right: "-30%", width: 300, height: 300, background: "rgba(255,255,255,0.04)", borderRadius: "50%" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 60, position: "relative", zIndex: 1 }}>
          <div style={{ width: 38, height: 38, background: "rgba(255,255,255,0.2)", borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 20 }}>✦</span>
          </div>
          <span className="hero-title" style={{ fontSize: 22, fontWeight: 700, color: "white" }}>MediBook</span>
        </div>

        {/* Steps */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h3 style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 30, fontWeight: 600 }}>Registration Steps</h3>
          {[
            { num: 1, label: "Choose Your Role", sub: "Patient or Provider" },
            { num: 2, label: "Personal Details", sub: "Basic information" },
            ...(role === "provider" ? [{ num: 3, label: "Professional Info", sub: "License & specialty" }] : []),
          ].map(s => (
            <div key={s.num} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className="step-indicator" style={{ background: step >= s.num ? "white" : "rgba(255,255,255,0.15)", color: step >= s.num ? "#2A7B6F" : "rgba(255,255,255,0.5)" }}>
                  {step > s.num ? "✓" : s.num}
                </div>
                {s.num < totalSteps && <div style={{ width: 2, height: 28, background: step > s.num ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.15)", marginTop: 4 }} />}
              </div>
              <div>
                <div style={{ color: step >= s.num ? "white" : "rgba(255,255,255,0.4)", fontSize: 14, fontWeight: 600 }}>{s.label}</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 2 }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "auto", position: "relative", zIndex: 1 }}>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 14, padding: "18px" }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>🔒 Your information is encrypted and securely stored. We are fully HIPAA compliant.</div>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 80px", overflowY: "auto" }}>
        <div className="fade-slide" key={step} style={{ width: "100%", maxWidth: 520 }}>

          {/* Step 1: Role Selection */}
          {step === 1 && (
            <>
              <div style={{ marginBottom: 40 }}>
                <div style={{ display: "inline-block", background: "rgba(42,123,111,0.1)", color: "#2A7B6F", padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Step 1 of {totalSteps}</div>
                <h1 className="hero-title" style={{ fontSize: 34, fontWeight: 800, color: "#1a1a2e", marginBottom: 10 }}>Join MediBook</h1>
                <p style={{ color: "#8888aa", fontSize: 15 }}>Already have an account? <a href="#" style={{ color: "#2A7B6F", fontWeight: 600, textDecoration: "none" }}>Sign in →</a></p>
              </div>

              <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1a1a2e", marginBottom: 20 }}>I am joining as a...</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 30 }}>
                {[
                  { key: "patient", icon: "👤", title: "Patient", desc: "Book appointments and manage my healthcare" },
                  { key: "provider", icon: "🩺", title: "Provider", desc: "Manage my practice and see patients" },
                ].map(r => (
                  <div key={r.key} className={`role-card ${role === r.key ? "active" : ""}`} onClick={() => setRole(r.key)}>
                    <div style={{ fontSize: 38, marginBottom: 14 }}>{r.icon}</div>
                    <div className="hero-title" style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>{r.title}</div>
                    <div style={{ fontSize: 13, color: "#8888aa", lineHeight: 1.5 }}>{r.desc}</div>
                    {role === r.key && (
                      <div style={{ marginTop: 14, display: "inline-block", background: "#2A7B6F", color: "white", borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 600 }}>✓ Selected</div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                {["google", "facebook"].map(provider => (
                  <button key={provider} style={{ flex: 1, padding: "13px", border: "1.5px solid #e5e5f0", borderRadius: 12, background: "white", cursor: "pointer", fontSize: 14, fontFamily: "'DM Sans', sans-serif", color: "#444", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.2s" }}>
                    <span style={{ fontSize: 18 }}>{provider === "google" ? "G" : "f"}</span>
                    Continue with {provider.charAt(0).toUpperCase() + provider.slice(1)}
                  </button>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ flex: 1, height: 1, background: "#e5e5f0" }} />
                <span style={{ color: "#aaaacc", fontSize: 13 }}>or with email</span>
                <div style={{ flex: 1, height: 1, background: "#e5e5f0" }} />
              </div>

              <button className="btn-primary" onClick={() => setStep(2)} style={{ width: "100%", padding: 16, fontSize: 16 }}>
                Continue as {role.charAt(0).toUpperCase() + role.slice(1)} →
              </button>
            </>
          )}

          {/* Step 2: Personal Info */}
          {step === 2 && (
            <>
              <div style={{ marginBottom: 36 }}>
                <div style={{ display: "inline-block", background: "rgba(42,123,111,0.1)", color: "#2A7B6F", padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Step 2 of {totalSteps}</div>
                <h1 className="hero-title" style={{ fontSize: 34, fontWeight: 800, color: "#1a1a2e", marginBottom: 8 }}>Personal Details</h1>
                <p style={{ color: "#8888aa", fontSize: 15 }}>Tell us a bit about yourself</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>First Name</label>
                    <input className="input-field" placeholder="John" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Last Name</label>
                    <input className="input-field" placeholder="Doe" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Email Address</label>
                  <input className="input-field" type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Phone Number</label>
                  <input className="input-field" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Date of Birth</label>
                    <input className="input-field" type="date" value={form.dob} onChange={e => setForm({ ...form, dob: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Gender</label>
                    <div style={{ position: "relative" }}>
                      <select className="select-field" value={form.gender} onChange={e => setForm({ ...form, gender: e.target.value })}>
                        <option value="">Select...</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non-binary</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Password</label>
                  <input className="input-field" type="password" placeholder="At least 8 characters" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
                  <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                    {[1,2,3,4].map(i => (
                      <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: form.password.length >= i * 2 ? (form.password.length >= 8 ? "#2A7B6F" : "#f59e0b") : "#e5e5f0", transition: "all 0.3s" }} />
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Confirm Password</label>
                  <input className="input-field" type="password" placeholder="Repeat your password" value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} />
                </div>

                <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
                  <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} style={{ marginTop: 2, accentColor: "#2A7B6F", width: 16, height: 16 }} />
                  <span style={{ fontSize: 13, color: "#6666aa", lineHeight: 1.6 }}>
                    I agree to MediBook's <a href="#" style={{ color: "#2A7B6F", textDecoration: "none", fontWeight: 600 }}>Terms of Service</a> and <a href="#" style={{ color: "#2A7B6F", textDecoration: "none", fontWeight: 600 }}>Privacy Policy</a>, including data use for healthcare coordination.
                  </span>
                </label>
              </div>

              <div style={{ display: "flex", gap: 14, marginTop: 28 }}>
                <button className="btn-secondary" onClick={() => setStep(1)}>← Back</button>
                <button className="btn-primary" onClick={() => role === "provider" ? setStep(3) : alert("Account created!")} style={{ flex: 1 }}>
                  {role === "provider" ? "Continue →" : "Create Account 🎉"}
                </button>
              </div>
            </>
          )}

          {/* Step 3: Provider Info */}
          {step === 3 && role === "provider" && (
            <>
              <div style={{ marginBottom: 36 }}>
                <div style={{ display: "inline-block", background: "rgba(42,123,111,0.1)", color: "#2A7B6F", padding: "5px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16 }}>Step 3 of 3</div>
                <h1 className="hero-title" style={{ fontSize: 34, fontWeight: 800, color: "#1a1a2e", marginBottom: 8 }}>Professional Info</h1>
                <p style={{ color: "#8888aa", fontSize: 15 }}>Help patients find and trust you</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Medical License Number</label>
                  <input className="input-field" placeholder="e.g. MD-123456" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Primary Specialty</label>
                  <select className="select-field">
                    <option value="">Select specialty...</option>
                    {specialties.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Years of Experience</label>
                  <input className="input-field" type="number" placeholder="e.g. 10" min="0" max="60" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Clinic / Hospital Name</label>
                  <input className="input-field" placeholder="e.g. City General Hospital" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Upload License Document</label>
                  <div style={{ border: "2px dashed #e5e5f0", borderRadius: 12, padding: "28px", textAlign: "center", cursor: "pointer", transition: "all 0.2s", background: "#fafafa" }}>
                    <div style={{ fontSize: 36, marginBottom: 10 }}>📄</div>
                    <div style={{ color: "#2A7B6F", fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Click to upload or drag & drop</div>
                    <div style={{ color: "#aaaacc", fontSize: 12 }}>PDF, JPG, PNG up to 5MB</div>
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>Short Bio</label>
                  <textarea className="input-field" placeholder="Tell patients about your experience, approach to care, and specializations..." rows={4} style={{ resize: "vertical" }} />
                </div>
              </div>

              <div style={{ background: "rgba(42,123,111,0.06)", borderRadius: 12, padding: "14px 18px", marginTop: 20, marginBottom: 20 }}>
                <div style={{ fontSize: 13, color: "#2A7B6F", fontWeight: 600, marginBottom: 4 }}>⏱️ Verification takes 1–2 business days</div>
                <div style={{ fontSize: 13, color: "#6666aa" }}>Our team will review your credentials and notify you by email once approved.</div>
              </div>

              <div style={{ display: "flex", gap: 14 }}>
                <button className="btn-secondary" onClick={() => setStep(2)}>← Back</button>
                <button className="btn-primary" onClick={() => alert("Registration submitted!")} style={{ flex: 1 }}>Submit for Verification 🎉</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}