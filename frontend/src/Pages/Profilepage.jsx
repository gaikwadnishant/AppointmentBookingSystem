import { useState } from "react";

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("personal");
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({ firstName: "Alex", lastName: "Johnson", email: "alex.johnson@email.com", phone: "+1 (555) 234-5678", dob: "1990-06-15", gender: "Male", bloodType: "A+", height: "5'10\"", weight: "163 lbs", allergies: "Penicillin, Pollen", emergencyName: "Sarah Johnson", emergencyPhone: "+1 (555) 987-6543", emergencyRel: "Spouse" });
  const [notifs, setNotifs] = useState({ appointments: true, reminders: true, updates: false, promotions: false, sms: true, email: true });

  const sections = [
    { key: "personal", label: "Personal Info", icon: "👤" },
    { key: "medical", label: "Medical History", icon: "🩺" },
    { key: "insurance", label: "Insurance", icon: "🛡️" },
    { key: "notifications", label: "Notifications", icon: "🔔" },
    { key: "security", label: "Security", icon: "🔐" },
  ];

  const Toggle = ({ on, onToggle }) => (
    <div onClick={onToggle} style={{ width: 44, height: 24, borderRadius: 12, background: on ? "#2A7B6F" : "#e5e5f0", position: "relative", cursor: "pointer", transition: "all 0.2s", flexShrink: 0 }}>
      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "white", position: "absolute", top: 2, left: on ? 22 : 2, transition: "all 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.25)" }} />
    </div>
  );

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#F4F6FB" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hero-title { font-family: 'Playfair Display', serif; }
        .card { background: white; border-radius: 20px; padding: 28px; box-shadow: 0 2px 15px rgba(0,0,0,0.06); }
        .section-btn { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 12px; cursor: pointer; transition: all 0.2s; font-size: 14px; font-weight: 500; color: #6666aa; margin-bottom: 4px; border: none; background: transparent; width: 100%; text-align: left; font-family: 'DM Sans', sans-serif; }
        .section-btn.active { background: linear-gradient(135deg, #2A7B6F, #1a5c52); color: white; box-shadow: 0 4px 15px rgba(42,123,111,0.3); }
        .section-btn:not(.active):hover { background: rgba(42,123,111,0.07); color: #2A7B6F; }
        .input-field { width: 100%; padding: 12px 16px; border: 1.5px solid #e5e5f0; border-radius: 12px; font-size: 14px; font-family: 'DM Sans', sans-serif; color: #1a1a2e; background: white; outline: none; transition: all 0.2s; }
        .input-field:focus { border-color: #2A7B6F; box-shadow: 0 0 0 3px rgba(42,123,111,0.1); }
        .input-field:disabled { background: #f8f8fc; color: #6666aa; cursor: default; }
        .btn-primary { background: linear-gradient(135deg, #2A7B6F, #1a5c52); color: white; border: none; padding: 12px 28px; border-radius: 12px; font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.3s; font-family: 'DM Sans', sans-serif; }
        .btn-outline { background: white; color: #2A7B6F; border: 1.5px solid #2A7B6F; padding: 12px 28px; border-radius: 12px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
        .info-row { display: flex; justify-content: space-between; align-items: center; padding: 14px 0; border-bottom: 1px solid #f5f5fc; }
        .info-row:last-child { border-bottom: none; }
        .label { font-size: 13px; color: #aaaacc; font-weight: 500; }
        .value { font-size: 14px; color: #1a1a2e; font-weight: 600; }
      `}</style>

      {/* Header */}
      <div style={{ background: "white", padding: "16px 40px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 18 }}>✦</span>
          </div>
          <span className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e" }}>MediBook</span>
          <span style={{ color: "#ddd" }}>|</span>
          <span style={{ fontSize: 15, color: "#4a4a6a" }}>My Profile</span>
        </div>
        <button style={{ background: "#f0f0f8", border: "none", padding: "9px 18px", borderRadius: 10, cursor: "pointer", fontSize: 14, color: "#4a4a6a", fontFamily: "'DM Sans', sans-serif" }}>← Dashboard</button>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 24px", display: "grid", gridTemplateColumns: "260px 1fr", gap: 24 }}>
        {/* Left Sidebar */}
        <div>
          {/* Profile Card */}
          <div className="card" style={{ textAlign: "center", marginBottom: 16 }}>
            <div style={{ position: "relative", display: "inline-block", marginBottom: 16 }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 26, margin: "0 auto" }}>AJ</div>
              <button style={{ position: "absolute", bottom: 0, right: 0, width: 26, height: 26, borderRadius: "50%", background: "#1a1a2e", border: "2px solid white", cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>✏️</button>
            </div>
            <div className="hero-title" style={{ fontSize: 18, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>Alex Johnson</div>
            <div style={{ fontSize: 13, color: "#8888aa", marginBottom: 12 }}>Patient · Member since 2024</div>
            <div style={{ display: "inline-block", background: "rgba(42,123,111,0.1)", color: "#2A7B6F", padding: "4px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>✓ Verified Account</div>
            <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div style={{ background: "#f8f8fc", borderRadius: 12, padding: "12px 8px", textAlign: "center" }}>
                <div className="hero-title" style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e" }}>7</div>
                <div style={{ fontSize: 11, color: "#aaa" }}>Visits</div>
              </div>
              <div style={{ background: "#f8f8fc", borderRadius: 12, padding: "12px 8px", textAlign: "center" }}>
                <div className="hero-title" style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e" }}>3</div>
                <div style={{ fontSize: 11, color: "#aaa" }}>Doctors</div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="card">
            {sections.map(s => (
              <button key={s.key} className={`section-btn ${activeSection === s.key ? "active" : ""}`} onClick={() => setActiveSection(s.key)}>
                <span style={{ fontSize: 18 }}>{s.icon}</span>
                {s.label}
              </button>
            ))}
            <div style={{ borderTop: "1px solid #f0f0f8", paddingTop: 12, marginTop: 8 }}>
              <button className="section-btn" style={{ color: "#ef4444" }}>
                <span style={{ fontSize: 18 }}>🗑️</span>
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div>
          {activeSection === "personal" && (
            <div className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                <div>
                  <h2 className="hero-title" style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e" }}>Personal Information</h2>
                  <p style={{ color: "#8888aa", fontSize: 14, marginTop: 4 }}>Keep your profile up-to-date</p>
                </div>
                {editing
                  ? <div style={{ display: "flex", gap: 10 }}>
                      <button className="btn-outline" onClick={() => setEditing(false)}>Cancel</button>
                      <button className="btn-primary" onClick={() => setEditing(false)}>Save Changes</button>
                    </div>
                  : <button className="btn-outline" onClick={() => setEditing(true)}>✏️ Edit Profile</button>
                }
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 28 }}>
                {[
                  { label: "First Name", key: "firstName" },
                  { label: "Last Name", key: "lastName" },
                  { label: "Email", key: "email" },
                  { label: "Phone", key: "phone" },
                  { label: "Date of Birth", key: "dob" },
                  { label: "Gender", key: "gender" },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>{f.label}</label>
                    <input className="input-field" value={profile[f.key]} onChange={e => setProfile({ ...profile, [f.key]: e.target.value })} disabled={!editing} />
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid #f0f0f8", paddingTop: 24, marginBottom: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 18 }}>Emergency Contact</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                  {[
                    { label: "Full Name", key: "emergencyName" },
                    { label: "Phone Number", key: "emergencyPhone" },
                    { label: "Relationship", key: "emergencyRel" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>{f.label}</label>
                      <input className="input-field" value={profile[f.key]} onChange={e => setProfile({ ...profile, [f.key]: e.target.value })} disabled={!editing} />
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: "1px solid #f0f0f8", paddingTop: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 18 }}>Profile Photo</h3>
                <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                  <div style={{ width: 80, height: 80, borderRadius: 20, background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 26 }}>AJ</div>
                  <div>
                    <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                      <button className="btn-primary" style={{ padding: "9px 18px", fontSize: 13 }}>Upload Photo</button>
                      <button className="btn-outline" style={{ padding: "9px 18px", fontSize: 13 }}>Remove</button>
                    </div>
                    <div style={{ fontSize: 12, color: "#aaaacc" }}>JPG, PNG or GIF. Max 2MB</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "medical" && (
            <div className="card">
              <h2 className="hero-title" style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>Medical Information</h2>
              <p style={{ color: "#8888aa", fontSize: 14, marginBottom: 28 }}>Help doctors understand your health baseline</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                {[["Blood Type", "A+"], ["Height", "5'10\""], ["Weight", "163 lbs"], ["BMI", "23.4"]].map(([label, val]) => (
                  <div key={label} style={{ background: "#f8f8fc", borderRadius: 14, padding: "16px 18px" }}>
                    <div style={{ fontSize: 12, color: "#aaaacc", marginBottom: 4 }}>{label}</div>
                    <div className="hero-title" style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e" }}>{val}</div>
                  </div>
                ))}
              </div>

              {[
                { title: "Allergies", items: ["Penicillin", "Pollen", "Shellfish"], color: "#dc2626" },
                { title: "Current Medications", items: ["Lisinopril 10mg daily", "Atorvastatin 20mg nightly"], color: "#7c3aed" },
                { title: "Chronic Conditions", items: ["Hypertension (since 2019)", "Pre-diabetes (since 2021)"], color: "#0891b2" },
                { title: "Past Surgeries", items: ["Appendectomy (2015)"], color: "#059669" },
              ].map(section => (
                <div key={section.title} style={{ marginBottom: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a1a2e" }}>{section.title}</h3>
                    <button style={{ background: "none", border: "none", color: "#2A7B6F", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>+ Add</button>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {section.items.map(item => (
                      <span key={item} style={{ background: `${section.color}12`, color: section.color, padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                        {item}
                        <span style={{ cursor: "pointer", opacity: 0.5, fontSize: 12 }}>✕</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeSection === "insurance" && (
            <div className="card">
              <h2 className="hero-title" style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>Insurance Plans</h2>
              <p style={{ color: "#8888aa", fontSize: 14, marginBottom: 28 }}>Manage your health insurance coverage</p>

              <div style={{ border: "2px solid #2A7B6F", borderRadius: 18, padding: "22px", marginBottom: 20, position: "relative" }}>
                <div style={{ position: "absolute", top: 16, right: 16, background: "#2A7B6F", color: "white", padding: "3px 12px", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>PRIMARY</div>
                <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(42,123,111,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🛡️</div>
                  <div>
                    <div className="hero-title" style={{ fontSize: 18, fontWeight: 700, color: "#1a1a2e" }}>BlueCross BlueShield</div>
                    <div style={{ fontSize: 13, color: "#2A7B6F", fontWeight: 600 }}>PPO Gold Plan</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                  {[["Member ID", "BCB-4521-JA"], ["Group Number", "GRP-8934"], ["Plan Year", "2025–2026"], ["Deductible", "$500"], ["Out-of-pocket Max", "$3,500"], ["Copay", "$25"]].map(([label, val]) => (
                    <div key={label}>
                      <div style={{ fontSize: 11, color: "#aaa", marginBottom: 3 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e" }}>{val}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button style={{ width: "100%", padding: "16px", border: "2px dashed #e5e5f0", borderRadius: 18, background: "white", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#8888aa", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                + Add Insurance Plan
              </button>
            </div>
          )}

          {activeSection === "notifications" && (
            <div className="card">
              <h2 className="hero-title" style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>Notification Preferences</h2>
              <p style={{ color: "#8888aa", fontSize: 14, marginBottom: 28 }}>Choose how you want to be notified</p>

              {[
                { key: "appointments", label: "Appointment Reminders", desc: "Get notified before your appointments" },
                { key: "reminders", label: "Medication Reminders", desc: "Reminders to take your prescriptions" },
                { key: "updates", label: "Health Tips & Updates", desc: "Personalized health recommendations" },
                { key: "promotions", label: "Promotions & Offers", desc: "Special discounts and new features" },
              ].map(item => (
                <div key={item.key} className="info-row">
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a2e", marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: "#aaaacc" }}>{item.desc}</div>
                  </div>
                  <Toggle on={notifs[item.key]} onToggle={() => setNotifs({ ...notifs, [item.key]: !notifs[item.key] })} />
                </div>
              ))}

              <div style={{ borderTop: "1px solid #f0f0f8", paddingTop: 20, marginTop: 8 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 16 }}>Notification Channels</h3>
                {[{ key: "email", label: "Email Notifications", icon: "📧" }, { key: "sms", label: "SMS Notifications", icon: "📱" }].map(item => (
                  <div key={item.key} className="info-row">
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <span style={{ fontSize: 20 }}>{item.icon}</span>
                      <span style={{ fontSize: 15, fontWeight: 600, color: "#1a1a2e" }}>{item.label}</span>
                    </div>
                    <Toggle on={notifs[item.key]} onToggle={() => setNotifs({ ...notifs, [item.key]: !notifs[item.key] })} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "security" && (
            <div className="card">
              <h2 className="hero-title" style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>Security Settings</h2>
              <p style={{ color: "#8888aa", fontSize: 14, marginBottom: 28 }}>Keep your account safe and secure</p>

              <div style={{ marginBottom: 28 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 18 }}>Change Password</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {["Current Password", "New Password", "Confirm New Password"].map(label => (
                    <div key={label}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 7 }}>{label}</label>
                      <input className="input-field" type="password" placeholder="••••••••" />
                    </div>
                  ))}
                  <button className="btn-primary" style={{ width: "fit-content" }}>Update Password</button>
                </div>
              </div>

              <div style={{ borderTop: "1px solid #f0f0f8", paddingTop: 24, marginBottom: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>Two-Factor Authentication</h3>
                <p style={{ fontSize: 14, color: "#6666aa", marginBottom: 16 }}>Add an extra layer of security to your account using an authenticator app or SMS.</p>
                <button className="btn-outline">Enable 2FA</button>
              </div>

              <div style={{ borderTop: "1px solid #f0f0f8", paddingTop: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 14 }}>Active Sessions</h3>
                {[{ device: "MacBook Pro", location: "New York, US", time: "Now · Current session", icon: "💻" }, { device: "iPhone 15 Pro", location: "New York, US", time: "2 hours ago", icon: "📱" }].map(s => (
                  <div key={s.device} style={{ display: "flex", gap: 14, alignItems: "center", padding: "14px 0", borderBottom: "1px solid #f5f5fc" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "#f0f0f8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{s.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e" }}>{s.device}</div>
                      <div style={{ fontSize: 12, color: "#aaa" }}>{s.location} · {s.time}</div>
                    </div>
                    {s.time.includes("Current") ? <span style={{ fontSize: 11, background: "rgba(74,222,128,0.15)", color: "#16a34a", padding: "3px 10px", borderRadius: 20, fontWeight: 700 }}>Active</span> : <button style={{ background: "none", border: "none", color: "#ef4444", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>Revoke</button>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}