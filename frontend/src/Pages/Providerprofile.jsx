import { useState } from "react";

const reviews = [
  { name: "Emily T.", date: "Feb 2026", rating: 5, text: "Dr. Chen is incredibly thorough and caring. She took the time to explain every step of my diagnosis. Highly recommend!", avatar: "ET" },
  { name: "Michael K.", date: "Jan 2026", rating: 5, text: "Exceptional doctor. My follow-up visits have been seamless and the online booking is a game-changer.", avatar: "MK" },
  { name: "Jasmine R.", date: "Dec 2025", rating: 4, text: "Very professional and knowledgeable. The wait time was short and the staff was wonderful.", avatar: "JR" },
];

const timeSlots = {
  "Mon, Mar 10": ["9:00 AM", "10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM"],
  "Tue, Mar 11": ["9:30 AM", "11:00 AM", "1:00 PM", "4:00 PM"],
  "Wed, Mar 12": ["10:00 AM", "2:30 PM", "4:30 PM"],
  "Thu, Mar 13": ["9:00 AM", "12:00 PM", "3:00 PM", "5:00 PM"],
};

const days = Object.keys(timeSlots);

export default function ProviderProfile() {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeTab, setActiveTab] = useState("about");
  const [saved, setSaved] = useState(false);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#F4F6FB" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hero-title { font-family: 'Playfair Display', serif; }
        .card { background: white; border-radius: 20px; padding: 24px; box-shadow: 0 2px 15px rgba(0,0,0,0.06); }
        .tab-btn { padding: 10px 22px; border-radius: 20px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; border: none; }
        .day-btn { padding: 10px 16px; border-radius: 12px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; border: 1.5px solid #e5e5f0; background: white; color: #4a4a6a; text-align: center; }
        .day-btn.active { background: #2A7B6F; color: white; border-color: #2A7B6F; box-shadow: 0 4px 15px rgba(42,123,111,0.3); }
        .time-slot { padding: 10px 14px; border-radius: 10px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; border: 1.5px solid #e5e5f0; background: white; color: #4a4a6a; text-align: center; }
        .time-slot.active { background: linear-gradient(135deg, #2A7B6F, #1a5c52); color: white; border-color: transparent; box-shadow: 0 4px 12px rgba(42,123,111,0.3); }
        .time-slot:hover:not(.active) { border-color: #2A7B6F; color: #2A7B6F; }
        .btn-primary { background: linear-gradient(135deg, #2A7B6F, #1a5c52); color: white; border: none; padding: 15px; border-radius: 14px; font-size: 15px; font-weight: 700; cursor: pointer; transition: all 0.3s; font-family: 'DM Sans', sans-serif; box-shadow: 0 4px 20px rgba(42,123,111,0.35); width: 100%; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(42,123,111,0.45); }
        .stat-box { text-align: center; padding: 16px 20px; background: #f8f8fc; border-radius: 14px; }
        .review-card { background: #f8f8fc; border-radius: 16px; padding: 20px; margin-bottom: 14px; }
        .avatar { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: white; font-size: 13px; }
      `}</style>

      {/* Header */}
      <div style={{ background: "white", padding: "16px 40px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button style={{ background: "#f0f0f8", border: "none", padding: "8px 16px", borderRadius: 10, cursor: "pointer", fontSize: 14, color: "#4a4a6a", fontFamily: "'DM Sans', sans-serif" }}>← Back</button>
          <span style={{ color: "#aaa" }}>Browse Providers / Dr. Sarah Chen</span>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => setSaved(!saved)} style={{ background: "white", border: "1.5px solid #e5e5f0", padding: "8px 18px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontFamily: "'DM Sans', sans-serif", color: saved ? "#ef4444" : "#4a4a6a" }}>
            {saved ? "❤️ Saved" : "🤍 Save"}
          </button>
          <button style={{ background: "white", border: "1.5px solid #e5e5f0", padding: "8px 18px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontFamily: "'DM Sans', sans-serif", color: "#4a4a6a" }}>📤 Share</button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px", display: "grid", gridTemplateColumns: "1fr 360px", gap: 28 }}>
        {/* Left Column */}
        <div>
          {/* Profile Card */}
          <div className="card" style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ position: "relative" }}>
                <div style={{ width: 100, height: 100, borderRadius: 24, background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 32 }}>SC</div>
                <div style={{ position: "absolute", bottom: 4, right: 4, width: 18, height: 18, background: "#4ade80", borderRadius: "50%", border: "3px solid white" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6, flexWrap: "wrap" }}>
                  <h1 className="hero-title" style={{ fontSize: 30, fontWeight: 800, color: "#1a1a2e" }}>Dr. Sarah Chen</h1>
                  <span style={{ background: "rgba(42,123,111,0.1)", color: "#2A7B6F", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>✓ Verified</span>
                </div>
                <div style={{ fontSize: 16, color: "#2A7B6F", fontWeight: 600, marginBottom: 8 }}>Cardiologist · 12 Years Experience</div>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 14, color: "#6666aa" }}>📍 City Medical Center, Downtown</span>
                  <span style={{ fontSize: 14, color: "#6666aa" }}>🗣️ English, Mandarin</span>
                  <span style={{ fontSize: 14, color: "#6666aa" }}>🏥 In-person & Telehealth</span>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="hero-title" style={{ fontSize: 32, fontWeight: 900, color: "#1a1a2e" }}>4.9</div>
                <div style={{ color: "#f59e0b", fontSize: 18 }}>★★★★★</div>
                <div style={{ fontSize: 12, color: "#aaa", marginTop: 2 }}>324 reviews</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginTop: 24 }}>
              {[
                { label: "Patients", value: "2,400+" },
                { label: "Experience", value: "12 yrs" },
                { label: "Satisfaction", value: "98%" },
                { label: "Awards", value: "8" },
              ].map(s => (
                <div key={s.label} className="stat-box">
                  <div className="hero-title" style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#8888aa" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, background: "white", padding: "8px", borderRadius: 16, boxShadow: "0 2px 15px rgba(0,0,0,0.06)" }}>
            {["about", "education", "reviews", "location"].map(tab => (
              <button key={tab} className="tab-btn" onClick={() => setActiveTab(tab)} style={{ background: activeTab === tab ? "linear-gradient(135deg, #2A7B6F, #1a5c52)" : "transparent", color: activeTab === tab ? "white" : "#6666aa", flex: 1 }}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "about" && (
            <div className="card">
              <h3 className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 16 }}>About Dr. Chen</h3>
              <p style={{ color: "#4a4a6a", lineHeight: 1.8, fontSize: 15, marginBottom: 20 }}>
                Dr. Sarah Chen is a board-certified cardiologist with over 12 years of experience in diagnosing and treating a wide range of cardiovascular conditions. She specializes in preventive cardiology, heart failure management, and interventional procedures. Dr. Chen is known for her compassionate approach and her commitment to patient education.
              </p>
              <p style={{ color: "#4a4a6a", lineHeight: 1.8, fontSize: 15, marginBottom: 24 }}>
                After completing her medical degree at Johns Hopkins School of Medicine, she completed her residency at Massachusetts General Hospital and her cardiology fellowship at Cleveland Clinic, one of the world's premier cardiac care institutions.
              </p>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 14 }}>Specializations</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
                {["Preventive Cardiology", "Heart Failure", "Hypertension", "Arrhythmia", "Echocardiography", "Lipid Disorders", "Cardiac Rehabilitation"].map(s => (
                  <span key={s} style={{ background: "rgba(42,123,111,0.08)", color: "#2A7B6F", padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600 }}>{s}</span>
                ))}
              </div>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 14 }}>Services Offered</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {["Electrocardiogram (ECG)", "Stress Testing", "Holter Monitoring", "Cardiac Ultrasound", "Coronary CT Angiography", "Pacemaker Management"].map(s => (
                  <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "#f8f8fc", borderRadius: 10 }}>
                    <span style={{ color: "#2A7B6F", fontSize: 16 }}>✓</span>
                    <span style={{ fontSize: 13, color: "#4a4a6a" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="card">
              <h3 className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 20 }}>Education & Training</h3>
              {[
                { year: "2010–2013", title: "Cardiology Fellowship", place: "Cleveland Clinic", icon: "🏆" },
                { year: "2007–2010", title: "Internal Medicine Residency", place: "Massachusetts General Hospital", icon: "🏥" },
                { year: "2001–2007", title: "Doctor of Medicine (MD)", place: "Johns Hopkins School of Medicine", icon: "🎓" },
                { year: "1997–2001", title: "Bachelor of Science, Biology", place: "Harvard University", icon: "📚" },
              ].map((e, i) => (
                <div key={i} style={{ display: "flex", gap: 18, marginBottom: 24, position: "relative" }}>
                  {i < 3 && <div style={{ position: "absolute", left: 20, top: 46, bottom: -10, width: 2, background: "#f0f0f8" }} />}
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(42,123,111,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, zIndex: 1 }}>{e.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, color: "#2A7B6F", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 4 }}>{e.year}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e", marginBottom: 2 }}>{e.title}</div>
                    <div style={{ fontSize: 14, color: "#6666aa" }}>{e.place}</div>
                  </div>
                </div>
              ))}
              <h3 className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 16, marginTop: 8 }}>Awards & Certifications</h3>
              {["Board Certified — American Board of Internal Medicine (Cardiology)", "Top Doctor Award, Castle Connolly 2022–2025", "Excellence in Patient Care Award, City Medical Center 2021", "Fellow, American College of Cardiology (FACC)"].map(a => (
                <div key={a} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 16px", background: "#f8f8fc", borderRadius: 12, marginBottom: 10 }}>
                  <span style={{ fontSize: 18 }}>🏅</span>
                  <span style={{ fontSize: 14, color: "#4a4a6a" }}>{a}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <h3 className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e" }}>Patient Reviews</h3>
                <div style={{ display: "flex", gap: 4 }}>
                  {[5,4,3].map(n => (
                    <button key={n} style={{ padding: "6px 14px", borderRadius: 20, border: "1.5px solid #e5e5f0", background: "white", fontSize: 13, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", color: "#4a4a6a" }}>★ {n}+</button>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, marginBottom: 28, padding: "20px", background: "linear-gradient(135deg, rgba(42,123,111,0.06), rgba(91,168,158,0.06))", borderRadius: 16 }}>
                <div style={{ textAlign: "center" }}>
                  <div className="hero-title" style={{ fontSize: 54, fontWeight: 900, color: "#1a1a2e" }}>4.9</div>
                  <div style={{ color: "#f59e0b", fontSize: 22 }}>★★★★★</div>
                  <div style={{ fontSize: 12, color: "#aaa", marginTop: 4 }}>324 reviews</div>
                </div>
                <div>
                  {[5,4,3,2,1].map(n => (
                    <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <span style={{ fontSize: 13, color: "#4a4a6a", width: 10 }}>{n}</span>
                      <span style={{ color: "#f59e0b", fontSize: 12 }}>★</span>
                      <div style={{ flex: 1, height: 8, background: "#f0f0f8", borderRadius: 4 }}>
                        <div style={{ height: "100%", width: `${[85,10,3,1,1][5-n]}%`, background: "linear-gradient(90deg, #f59e0b, #fbbf24)", borderRadius: 4 }} />
                      </div>
                      <span style={{ fontSize: 12, color: "#aaa", width: 30 }}>{[85,10,3,1,1][5-n]}%</span>
                    </div>
                  ))}
                </div>
              </div>
              {reviews.map((r, i) => (
                <div key={i} className="review-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <div className="avatar" style={{ background: `linear-gradient(135deg, hsl(${i*60+160},60%,45%), hsl(${i*60+190},60%,55%))` }}>{r.avatar}</div>
                      <div>
                        <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: 14 }}>{r.name}</div>
                        <div style={{ fontSize: 12, color: "#aaa" }}>{r.date}</div>
                      </div>
                    </div>
                    <div style={{ color: "#f59e0b", fontSize: 16 }}>{"★".repeat(r.rating)}</div>
                  </div>
                  <p style={{ fontSize: 14, color: "#4a4a6a", lineHeight: 1.7 }}>{r.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "location" && (
            <div className="card">
              <h3 className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 20 }}>Location & Hours</h3>
              <div style={{ background: "linear-gradient(135deg, #e8f5f3, #d0ede8)", borderRadius: 16, height: 200, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, fontSize: 48 }}>🗺️</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div>
                  <div style={{ fontWeight: 700, color: "#1a1a2e", marginBottom: 8, fontSize: 14 }}>Primary Location</div>
                  <div style={{ fontSize: 14, color: "#4a4a6a", lineHeight: 1.7 }}>City Medical Center<br />123 Healthcare Blvd<br />Downtown, New York, NY 10001</div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "#1a1a2e", marginBottom: 8, fontSize: 14 }}>Contact</div>
                  <div style={{ fontSize: 14, color: "#4a4a6a", lineHeight: 1.7 }}>📞 (212) 555-0199<br />📧 dr.chen@citymedical.com<br />🌐 citymedical.com/dr-chen</div>
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#1a1a2e", marginBottom: 12, fontSize: 14 }}>Office Hours</div>
                {[["Monday – Friday", "9:00 AM – 5:00 PM"], ["Saturday", "10:00 AM – 2:00 PM"], ["Sunday", "Closed"]].map(([day, hours]) => (
                  <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0f0f8", fontSize: 14 }}>
                    <span style={{ color: "#4a4a6a" }}>{day}</span>
                    <span style={{ fontWeight: 600, color: hours === "Closed" ? "#ef4444" : "#1a1a2e" }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column — Booking Widget */}
        <div>
          <div className="card" style={{ position: "sticky", top: 20 }}>
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                <div>
                  <span className="hero-title" style={{ fontSize: 28, fontWeight: 900, color: "#1a1a2e" }}>$150</span>
                  <span style={{ color: "#aaa", fontSize: 13 }}> / session</span>
                </div>
                <span style={{ background: "rgba(74,222,128,0.15)", color: "#16a34a", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>● Available</span>
              </div>
              <div style={{ fontSize: 13, color: "#8888aa" }}>In-person & Telehealth available</div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", marginBottom: 12 }}>Select Date</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                {days.map(day => (
                  <button key={day} className={`day-btn ${selectedDay === day ? "active" : ""}`} onClick={() => { setSelectedDay(day); setSelectedTime(null); }}>
                    <div style={{ fontSize: 11, opacity: 0.8, marginBottom: 2 }}>{day.split(",")[0]}</div>
                    <div style={{ fontSize: 14 }}>{day.split(",")[1]}</div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", marginBottom: 12 }}>Select Time</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {timeSlots[selectedDay].map(time => (
                  <button key={time} className={`time-slot ${selectedTime === time ? "active" : ""}`} onClick={() => setSelectedTime(time)}>{time}</button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", marginBottom: 12 }}>Visit Type</div>
              <div style={{ display: "flex", gap: 8 }}>
                {[{ icon: "🏥", label: "In-Person" }, { icon: "📹", label: "Telehealth" }].map(v => (
                  <button key={v.label} style={{ flex: 1, padding: "12px 8px", borderRadius: 12, border: v.label === "In-Person" ? "2px solid #2A7B6F" : "1.5px solid #e5e5f0", background: v.label === "In-Person" ? "rgba(42,123,111,0.05)" : "white", cursor: "pointer", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: v.label === "In-Person" ? "#2A7B6F" : "#6666aa", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <span style={{ fontSize: 20 }}>{v.icon}</span>
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {selectedTime && (
              <div style={{ background: "rgba(42,123,111,0.06)", border: "1px solid rgba(42,123,111,0.2)", borderRadius: 12, padding: "14px 16px", marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#2A7B6F", marginBottom: 4 }}>Your selected slot:</div>
                <div style={{ fontSize: 14, color: "#1a1a2e", fontWeight: 700 }}>📅 {selectedDay} at {selectedTime}</div>
              </div>
            )}

            <button className="btn-primary" style={{ marginBottom: 12 }}>
              {selectedTime ? `Book for ${selectedTime} →` : "Select a Time Slot"}
            </button>
            <button style={{ width: "100%", padding: "13px", borderRadius: 14, border: "1.5px solid #e5e5f0", background: "white", cursor: "pointer", fontSize: 14, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#4a4a6a" }}>
              💬 Send Message
            </button>

            <div style={{ borderTop: "1px solid #f0f0f8", paddingTop: 16, marginTop: 16 }}>
              {[{ icon: "✓", text: "Free cancellation up to 24hrs" }, { icon: "🔒", text: "Secure & encrypted payment" }, { icon: "📋", text: "Instant confirmation by email" }].map(item => (
                <div key={item.text} style={{ display: "flex", gap: 10, marginBottom: 10, fontSize: 13, color: "#6666aa" }}>
                  <span style={{ color: "#2A7B6F", fontWeight: 700 }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}