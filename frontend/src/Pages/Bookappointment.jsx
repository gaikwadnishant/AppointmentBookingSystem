import { useState } from "react";

const steps = ["Select Type", "Patient Info", "Payment", "Confirmation"];

export default function BookAppointment() {
  const [step, setStep] = useState(0);
  const [visitType, setVisitType] = useState("in-person");
  const [form, setForm] = useState({ reason: "", notes: "", insurance: "", card: "", expiry: "", cvv: "", name: "" });
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const fee = 150;
  const discount = couponApplied ? 20 : 0;
  const total = fee - discount;

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "FIRST20") setCouponApplied(true);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#F4F6FB" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hero-title { font-family: 'Playfair Display', serif; }
        .card { background: white; border-radius: 20px; padding: 28px; box-shadow: 0 2px 15px rgba(0,0,0,0.06); }
        .input-field { width: 100%; padding: 13px 18px; border: 1.5px solid #e5e5f0; border-radius: 12px; font-size: 15px; font-family: 'DM Sans', sans-serif; color: #1a1a2e; background: white; outline: none; transition: all 0.2s; }
        .input-field:focus { border-color: #2A7B6F; box-shadow: 0 0 0 4px rgba(42,123,111,0.1); }
        .btn-primary { background: linear-gradient(135deg, #2A7B6F, #1a5c52); color: white; border: none; padding: 15px 32px; border-radius: 12px; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.3s; font-family: 'DM Sans', sans-serif; box-shadow: 0 4px 20px rgba(42,123,111,0.35); }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(42,123,111,0.45); }
        .btn-secondary { background: #f0f0f8; color: #4a4a6a; border: none; padding: 15px 32px; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; font-family: 'DM Sans', sans-serif; }
        .visit-card { border: 2px solid #e5e5f0; border-radius: 16px; padding: 20px; cursor: pointer; transition: all 0.2s; }
        .visit-card.active { border-color: #2A7B6F; background: rgba(42,123,111,0.04); }
        .step-dot { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; transition: all 0.3s; }
        @keyframes checkmark { 0%{transform:scale(0)} 100%{transform:scale(1)} }
        .checkmark { animation: checkmark 0.5s ease forwards; }
      `}</style>

      {/* Header */}
      <div style={{ background: "white", padding: "16px 40px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", gap: 14 }}>
        <button style={{ background: "#f0f0f8", border: "none", padding: "8px 16px", borderRadius: 10, cursor: "pointer", fontSize: 14, color: "#4a4a6a", fontFamily: "'DM Sans', sans-serif" }}>← Back</button>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: 10 }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 18 }}>✦</span>
          </div>
          <span className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e" }}>MediBook</span>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 className="hero-title" style={{ fontSize: 34, fontWeight: 800, color: "#1a1a2e", marginBottom: 8 }}>Book Appointment</h1>
          <p style={{ color: "#8888aa", fontSize: 15 }}>with Dr. Sarah Chen · Cardiologist</p>
        </div>

        {/* Step Indicator */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 48 }}>
          {steps.map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: i <= step ? "pointer" : "default" }} onClick={() => i < step && setStep(i)}>
                <div className="step-dot" style={{ background: i < step ? "#2A7B6F" : i === step ? "linear-gradient(135deg, #2A7B6F, #1a5c52)" : "#f0f0f8", color: i <= step ? "white" : "#aaa", boxShadow: i === step ? "0 4px 15px rgba(42,123,111,0.4)" : "none" }}>
                  {i < step ? "✓" : i + 1}
                </div>
                <div style={{ fontSize: 12, color: i <= step ? "#2A7B6F" : "#aaa", marginTop: 6, fontWeight: i === step ? 700 : 400, whiteSpace: "nowrap" }}>{s}</div>
              </div>
              {i < steps.length - 1 && (
                <div style={{ width: 80, height: 2, background: i < step ? "#2A7B6F" : "#f0f0f8", margin: "0 8px", marginBottom: 20, transition: "all 0.3s" }} />
              )}
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 28 }}>
          {/* Main Form */}
          <div>
            {/* Step 0: Visit Type */}
            {step === 0 && (
              <div className="card">
                <h2 className="hero-title" style={{ fontSize: 22, fontWeight: 700, color: "#1a1a2e", marginBottom: 6 }}>How would you like to see the doctor?</h2>
                <p style={{ color: "#8888aa", fontSize: 14, marginBottom: 24 }}>Choose your preferred consultation method</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                  {[
                    { key: "in-person", icon: "🏥", title: "In-Person Visit", desc: "Visit the clinic at City Medical Center, Downtown", detail: "Mon–Fri 9AM–5PM", badge: null },
                    { key: "telehealth", icon: "📹", title: "Video Consultation", desc: "Connect from home via secure HD video call", detail: "7 days a week", badge: "Popular" },
                  ].map(v => (
                    <div key={v.key} className={`visit-card ${visitType === v.key ? "active" : ""}`} onClick={() => setVisitType(v.key)}>
                      {v.badge && <div style={{ display: "inline-block", background: "#2A7B6F", color: "white", padding: "3px 10px", borderRadius: 20, fontSize: 10, fontWeight: 700, marginBottom: 10 }}>{v.badge}</div>}
                      <div style={{ fontSize: 38, marginBottom: 14 }}>{v.icon}</div>
                      <div className="hero-title" style={{ fontSize: 17, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>{v.title}</div>
                      <p style={{ fontSize: 13, color: "#8888aa", lineHeight: 1.6, marginBottom: 10 }}>{v.desc}</p>
                      <div style={{ fontSize: 12, color: "#2A7B6F", fontWeight: 600 }}>🕐 {v.detail}</div>
                      {visitType === v.key && (
                        <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 6, color: "#2A7B6F", fontSize: 13, fontWeight: 600 }}>
                          <span style={{ width: 20, height: 20, background: "#2A7B6F", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 10 }}>✓</span>
                          Selected
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", marginBottom: 12 }}>Selected Appointment</div>
                  <div style={{ background: "rgba(42,123,111,0.06)", border: "1px solid rgba(42,123,111,0.2)", borderRadius: 14, padding: "16px 20px", display: "flex", gap: 20 }}>
                    <div><div style={{ fontSize: 11, color: "#2A7B6F", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 4 }}>Date</div><div style={{ fontWeight: 700, color: "#1a1a2e" }}>Monday, Mar 10</div></div>
                    <div style={{ width: 1, background: "rgba(42,123,111,0.2)" }} />
                    <div><div style={{ fontSize: 11, color: "#2A7B6F", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 4 }}>Time</div><div style={{ fontWeight: 700, color: "#1a1a2e" }}>10:00 AM</div></div>
                    <div style={{ width: 1, background: "rgba(42,123,111,0.2)" }} />
                    <div><div style={{ fontSize: 11, color: "#2A7B6F", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 4 }}>Duration</div><div style={{ fontWeight: 700, color: "#1a1a2e" }}>30 min</div></div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Patient Info */}
            {step === 1 && (
              <div className="card">
                <h2 className="hero-title" style={{ fontSize: 22, fontWeight: 700, color: "#1a1a2e", marginBottom: 6 }}>Patient Information</h2>
                <p style={{ color: "#8888aa", fontSize: 14, marginBottom: 24 }}>Help the doctor prepare for your visit</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>Reason for Visit *</label>
                    <select className="input-field" value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })}>
                      <option value="">Select reason...</option>
                      <option>Annual checkup / Wellness</option>
                      <option>Chest pain or palpitations</option>
                      <option>High blood pressure</option>
                      <option>Follow-up appointment</option>
                      <option>Shortness of breath</option>
                      <option>Test results review</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>Symptoms & Additional Notes</label>
                    <textarea className="input-field" placeholder="Describe your symptoms, medical history, or anything else the doctor should know..." rows={4} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} style={{ resize: "vertical" }} />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>Insurance Provider</label>
                    <select className="input-field" value={form.insurance} onChange={e => setForm({ ...form, insurance: e.target.value })}>
                      <option value="">Select insurance...</option>
                      <option>Aetna</option>
                      <option>BlueCross BlueShield</option>
                      <option>Cigna</option>
                      <option>United Healthcare</option>
                      <option>Humana</option>
                      <option>Self-Pay (No Insurance)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>Upload Documents (Optional)</label>
                    <div style={{ border: "2px dashed #e5e5f0", borderRadius: 12, padding: "24px", textAlign: "center", cursor: "pointer", background: "#fafafa" }}>
                      <div style={{ fontSize: 32, marginBottom: 10 }}>📄</div>
                      <div style={{ color: "#2A7B6F", fontWeight: 600, fontSize: 13, marginBottom: 4 }}>Upload previous records or test results</div>
                      <div style={{ color: "#aaaacc", fontSize: 12 }}>PDF, JPG, PNG up to 10MB</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 12 }}>
                    {["New Patient", "Returning Patient"].map(type => (
                      <label key={type} style={{ display: "flex", gap: 8, alignItems: "center", cursor: "pointer", padding: "12px 16px", background: "#f8f8fc", borderRadius: 10, flex: 1 }}>
                        <input type="radio" name="patient_type" style={{ accentColor: "#2A7B6F" }} defaultChecked={type === "New Patient"} />
                        <span style={{ fontSize: 14, color: "#4a4a6a", fontWeight: 500 }}>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="card">
                <h2 className="hero-title" style={{ fontSize: 22, fontWeight: 700, color: "#1a1a2e", marginBottom: 6 }}>Payment Details</h2>
                <p style={{ color: "#8888aa", fontSize: 14, marginBottom: 24 }}>Your information is encrypted and secure 🔒</p>

                <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                  {["💳 Card", "🏦 Bank", "🍎 Apple Pay", "🔵 PayPal"].map(m => (
                    <button key={m} style={{ flex: 1, padding: "12px 8px", borderRadius: 12, border: m === "💳 Card" ? "2px solid #2A7B6F" : "1.5px solid #e5e5f0", background: m === "💳 Card" ? "rgba(42,123,111,0.05)" : "white", cursor: "pointer", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: m === "💳 Card" ? 700 : 400, color: m === "💳 Card" ? "#2A7B6F" : "#6666aa" }}>
                      {m}
                    </button>
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>Cardholder Name</label>
                    <input className="input-field" placeholder="Alex Johnson" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>Card Number</label>
                    <input className="input-field" placeholder="1234  5678  9012  3456" value={form.card} onChange={e => setForm({ ...form, card: e.target.value })} maxLength={19} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>Expiry Date</label>
                      <input className="input-field" placeholder="MM / YY" value={form.expiry} onChange={e => setForm({ ...form, expiry: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>CVV</label>
                      <input className="input-field" placeholder="•••" type="password" value={form.cvv} onChange={e => setForm({ ...form, cvv: e.target.value })} maxLength={4} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 8 }}>Promo Code</label>
                    <div style={{ display: "flex", gap: 10 }}>
                      <input className="input-field" placeholder="Enter code (e.g. FIRST20)" value={coupon} onChange={e => setCoupon(e.target.value)} style={{ flex: 1 }} />
                      <button onClick={applyCoupon} style={{ background: "#2A7B6F", color: "white", border: "none", padding: "0 20px", borderRadius: 12, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14 }}>Apply</button>
                    </div>
                    {couponApplied && <div style={{ color: "#16a34a", fontSize: 13, fontWeight: 600, marginTop: 6 }}>✓ Promo code applied! -$20 discount</div>}
                  </div>
                </div>

                <div style={{ background: "#f8f8fc", borderRadius: 14, padding: "18px", marginTop: 24 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", marginBottom: 12 }}>Order Summary</div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14, color: "#4a4a6a" }}>
                    <span>Consultation Fee</span><span>${fee}</span>
                  </div>
                  {couponApplied && (
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14, color: "#16a34a" }}>
                      <span>Promo Discount</span><span>-${discount}</span>
                    </div>
                  )}
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14, color: "#4a4a6a" }}>
                    <span>Platform Fee</span><span>$0</span>
                  </div>
                  <div style={{ height: 1, background: "#e5e5f0", margin: "12px 0" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 800, color: "#1a1a2e" }}>
                    <span>Total</span><span>${total}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="card" style={{ textAlign: "center", padding: "60px 40px" }}>
                <div className="checkmark" style={{ width: 80, height: 80, background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: 40 }}>✓</div>
                <h2 className="hero-title" style={{ fontSize: 30, fontWeight: 800, color: "#1a1a2e", marginBottom: 12 }}>Appointment Confirmed!</h2>
                <p style={{ color: "#8888aa", fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
                  Your appointment with <strong style={{ color: "#1a1a2e" }}>Dr. Sarah Chen</strong> has been confirmed.<br />
                  A confirmation has been sent to your email.
                </p>
                <div style={{ background: "rgba(42,123,111,0.06)", border: "1px solid rgba(42,123,111,0.15)", borderRadius: 16, padding: "24px", marginBottom: 32, textAlign: "left" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                    {[
                      { label: "Date", value: "Monday, Mar 10, 2026" },
                      { label: "Time", value: "10:00 AM" },
                      { label: "Doctor", value: "Dr. Sarah Chen" },
                      { label: "Type", value: visitType === "telehealth" ? "Video Consultation" : "In-Person" },
                      { label: "Booking ID", value: "#MB-20260310-SC" },
                      { label: "Amount Paid", value: `$${total}` },
                    ].map(item => (
                      <div key={item.label}>
                        <div style={{ fontSize: 11, color: "#2A7B6F", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 4 }}>{item.label}</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
                  <button style={{ background: "linear-gradient(135deg, #2A7B6F, #1a5c52)", color: "white", border: "none", padding: "13px 28px", borderRadius: 12, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, boxShadow: "0 4px 15px rgba(42,123,111,0.3)" }}>📅 Add to Calendar</button>
                  <button style={{ background: "#f0f0f8", color: "#4a4a6a", border: "none", padding: "13px 28px", borderRadius: 12, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14 }}>📋 View My Appointments</button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {step < 3 && (
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
                <button className="btn-secondary" onClick={() => step > 0 && setStep(step - 1)} style={{ visibility: step === 0 ? "hidden" : "visible" }}>← Back</button>
                <button className="btn-primary" onClick={() => setStep(step + 1)}>
                  {step === 2 ? `Confirm & Pay $${total}` : "Continue →"}
                </button>
              </div>
            )}
          </div>

          {/* Summary Sidebar */}
          <div>
            <div className="card" style={{ position: "sticky", top: 20 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 20 }}>
                <div style={{ width: 54, height: 54, borderRadius: 14, background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 18 }}>SC</div>
                <div>
                  <div className="hero-title" style={{ fontSize: 17, fontWeight: 700, color: "#1a1a2e" }}>Dr. Sarah Chen</div>
                  <div style={{ fontSize: 13, color: "#2A7B6F", fontWeight: 600 }}>Cardiologist</div>
                  <div style={{ fontSize: 12, color: "#f59e0b" }}>★ 4.9 (324 reviews)</div>
                </div>
              </div>

              <div style={{ height: 1, background: "#f0f0f8", marginBottom: 18 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
                {[
                  { icon: "📅", label: "Date", value: "Monday, Mar 10, 2026" },
                  { icon: "🕐", label: "Time", value: "10:00 AM" },
                  { icon: visitType === "telehealth" ? "📹" : "🏥", label: "Type", value: visitType === "telehealth" ? "Video Call" : "In-Person" },
                  { icon: "⏱", label: "Duration", value: "30 minutes" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(42,123,111,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color: "#aaa", fontWeight: 500 }}>{item.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e" }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ height: 1, background: "#f0f0f8", marginBottom: 18 }} />

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#4a4a6a", marginBottom: 8 }}>
                <span>Consultation Fee</span><span>${fee}</span>
              </div>
              {couponApplied && <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "#16a34a", marginBottom: 8 }}><span>Promo</span><span>-${discount}</span></div>}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 17, fontWeight: 800, color: "#1a1a2e", marginTop: 8 }}>
                <span>Total</span>
                <span className="hero-title">${total}</span>
              </div>

              <div style={{ marginTop: 20, background: "#f8f8fc", borderRadius: 12, padding: "14px 16px" }}>
                {["Free cancellation 24hrs before", "Secure payment", "Instant confirmation"].map(item => (
                  <div key={item} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 12, color: "#6666aa", alignItems: "center" }}>
                    <span style={{ color: "#2A7B6F" }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}