import { useState } from "react";

const upcomingAppts = [
  { id: 1, doctor: "Dr. Sarah Chen", specialty: "Cardiologist", date: "Mon, Mar 10", time: "10:00 AM", status: "confirmed", avatar: "SC", color: "#2A7B6F" },
  { id: 2, doctor: "Dr. Marcus Reid", specialty: "Neurologist", date: "Wed, Mar 12", time: "2:30 PM", status: "pending", avatar: "MR", color: "#7c3aed" },
];

const pastAppts = [
  { id: 3, doctor: "Dr. Aisha Patel", specialty: "Dermatologist", date: "Feb 28", time: "11:00 AM", rating: 5 },
  { id: 4, doctor: "Dr. James Wolfe", specialty: "Orthopedist", date: "Feb 20", time: "9:00 AM", rating: 4 },
];

const healthMetrics = [
  { label: "Blood Pressure", value: "120/80", unit: "mmHg", icon: "🩸", status: "normal", trend: "▲ Stable" },
  { label: "Heart Rate", value: "72", unit: "bpm", icon: "💓", status: "normal", trend: "▼ Normal" },
  { label: "Weight", value: "74", unit: "kg", icon: "⚖️", status: "normal", trend: "▼ -1.2kg" },
  { label: "Blood Glucose", value: "98", unit: "mg/dL", icon: "🧪", status: "normal", trend: "▲ Stable" },
];

const quickActions = [
  { icon: "🔍", label: "Find Doctor", color: "#2A7B6F" },
  { icon: "📅", label: "Book Now", color: "#7c3aed" },
  { icon: "📋", label: "Records", color: "#ea580c" },
  { icon: "💊", label: "Prescriptions", color: "#0891b2" },
  { icon: "💬", label: "Messages", color: "#059669" },
  { icon: "📞", label: "Telemedicine", color: "#dc2626" },
];

const navItems = ["Dashboard", "Find Doctors", "My Appointments", "Health Records", "Messages", "Profile"];

export default function CustomerDashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#F4F6FB", display: "flex" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hero-title { font-family: 'Playfair Display', serif; }
        .card { background: white; border-radius: 20px; padding: 24px; box-shadow: 0 2px 15px rgba(0,0,0,0.06); }
        .nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 18px; border-radius: 12px; cursor: pointer; transition: all 0.2s; font-size: 14px; font-weight: 500; color: #6666aa; margin-bottom: 4px; }
        .nav-item.active { background: linear-gradient(135deg, #2A7B6F, #1a5c52); color: white; box-shadow: 0 4px 15px rgba(42,123,111,0.3); }
        .nav-item:not(.active):hover { background: rgba(42,123,111,0.07); color: #2A7B6F; }
        .metric-card { background: white; border-radius: 18px; padding: 20px; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
        .btn-sm { padding: 8px 18px; border-radius: 20px; font-size: 13px; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
        .quick-action { background: white; border-radius: 16px; padding: 18px 14px; text-align: center; cursor: pointer; transition: all 0.2s; box-shadow: 0 2px 10px rgba(0,0,0,0.05); border: 1px solid transparent; }
        .quick-action:hover { transform: translateY(-4px); box-shadow: 0 8px 25px rgba(0,0,0,0.1); }
        .appt-card { background: white; border-radius: 16px; padding: 18px; margin-bottom: 12px; display: flex; align-items: center; gap: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); transition: all 0.2s; }
        .appt-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.1); }
        .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .avatar-circle { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; color: white; font-size: 16px; flex-shrink: 0; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
      `}</style>

      {/* Sidebar */}
      <div style={{ width: 260, background: "white", height: "100vh", position: "fixed", left: 0, top: 0, padding: "30px 20px", boxShadow: "2px 0 20px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", overflowY: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40, padding: "0 8px" }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 18 }}>✦</span>
          </div>
          <span className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e" }}>MediBook</span>
        </div>

        <div style={{ marginBottom: 8, padding: "0 8px" }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#aaaacc", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>Main Menu</div>
        </div>

        {navItems.map(item => (
          <div key={item} className={`nav-item ${activeNav === item ? "active" : ""}`} onClick={() => setActiveNav(item)}>
            <span style={{ fontSize: 18 }}>
              {{"Dashboard":"🏠","Find Doctors":"🔍","My Appointments":"📅","Health Records":"📋","Messages":"💬","Profile":"👤"}[item]}
            </span>
            {item}
            {item === "Messages" && <div style={{ marginLeft: "auto", background: "#ef4444", color: "white", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 }}>3</div>}
          </div>
        ))}

        <div style={{ marginTop: "auto" }}>
          <div style={{ background: "linear-gradient(135deg, #e8f5f3, #d0ede8)", borderRadius: 16, padding: "18px", marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a2e", marginBottom: 6 }}>💎 Upgrade to Pro</div>
            <div style={{ fontSize: 12, color: "#6666aa", lineHeight: 1.5, marginBottom: 12 }}>Priority bookings & unlimited teleconsults</div>
            <button style={{ background: "linear-gradient(135deg, #2A7B6F, #1a5c52)", color: "white", border: "none", padding: "8px 16px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", width: "100%" }}>Upgrade Now</button>
          </div>
          <div className="nav-item" style={{ color: "#ef4444" }}>
            <span style={{ fontSize: 18 }}>🚪</span> Sign Out
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: 260, flex: 1, padding: "30px 36px", overflowY: "auto" }}>
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <h1 className="hero-title" style={{ fontSize: 30, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>
              Good morning, Alex 👋
            </h1>
            <p style={{ color: "#8888aa", fontSize: 14 }}>Thursday, March 5, 2026 · Here's your health summary</p>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <button onClick={() => setNotifOpen(!notifOpen)} style={{ width: 44, height: 44, borderRadius: "50%", background: "white", border: "none", cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>🔔</button>
              <div style={{ position: "absolute", top: 4, right: 4, width: 10, height: 10, background: "#ef4444", borderRadius: "50%", border: "2px solid #F4F6FB" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "white", borderRadius: 40, padding: "8px 18px 8px 8px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)", cursor: "pointer" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 13 }}>AJ</div>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e" }}>Alex Johnson</span>
            </div>
          </div>
        </div>

        {/* Hero Card */}
        <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2A7B6F 100%)", borderRadius: 24, padding: "32px 36px", marginBottom: 28, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 280, height: 280, background: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", bottom: "-30%", right: "15%", width: 200, height: 200, background: "rgba(255,255,255,0.04)", borderRadius: "50%" }} />
          <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 10, fontWeight: 600 }}>Next Appointment</div>
              <div className="hero-title" style={{ fontSize: 26, fontWeight: 800, color: "white", marginBottom: 8 }}>Dr. Sarah Chen</div>
              <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, marginBottom: 16 }}>Cardiology Consultation · Mon, Mar 10 at 10:00 AM</div>
              <div style={{ display: "flex", gap: 12 }}>
                <button style={{ background: "white", color: "#2A7B6F", border: "none", padding: "10px 22px", borderRadius: 22, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Join Call</button>
                <button style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)", padding: "10px 22px", borderRadius: 22, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Reschedule</button>
              </div>
            </div>
            <div style={{ fontSize: 80, opacity: 0.8 }}>👩‍⚕️</div>
          </div>
        </div>

        {/* Health Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 28 }}>
          {healthMetrics.map(m => (
            <div key={m.label} className="metric-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontSize: 26 }}>{m.icon}</span>
                <span style={{ fontSize: 11, color: "#4ade80", fontWeight: 600, background: "rgba(74,222,128,0.1)", padding: "3px 8px", borderRadius: 10 }}>{m.trend}</span>
              </div>
              <div className="hero-title" style={{ fontSize: 28, fontWeight: 800, color: "#1a1a2e" }}>{m.value}</div>
              <div style={{ fontSize: 11, color: "#aaaacc", marginTop: 2 }}>{m.unit}</div>
              <div style={{ fontSize: 13, color: "#6666aa", marginTop: 6, fontWeight: 500 }}>{m.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 24, marginBottom: 28 }}>
          {/* Upcoming Appointments */}
          <div className="card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h2 className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e" }}>Upcoming Appointments</h2>
              <a href="#" style={{ color: "#2A7B6F", fontSize: 13, fontWeight: 600, textDecoration: "none" }}>View All →</a>
            </div>
            {upcomingAppts.map(a => (
              <div key={a.id} className="appt-card">
                <div className="avatar-circle" style={{ background: `linear-gradient(135deg, ${a.color}, ${a.color}99)` }}>{a.avatar}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: 15, marginBottom: 2 }}>{a.doctor}</div>
                  <div style={{ color: "#8888aa", fontSize: 13, marginBottom: 6 }}>{a.specialty}</div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#6666aa" }}>📅 {a.date}</span>
                    <span style={{ fontSize: 12, color: "#6666aa" }}>🕐 {a.time}</span>
                  </div>
                </div>
                <div>
                  <span className="badge" style={{ background: a.status === "confirmed" ? "rgba(74,222,128,0.15)" : "rgba(251,191,36,0.15)", color: a.status === "confirmed" ? "#16a34a" : "#d97706" }}>
                    {a.status}
                  </span>
                </div>
              </div>
            ))}
            <button style={{ width: "100%", padding: "12px", background: "rgba(42,123,111,0.07)", color: "#2A7B6F", border: "none", borderRadius: 12, fontWeight: 600, fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", marginTop: 8 }}>
              + Book New Appointment
            </button>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h2 className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 20 }}>Quick Actions</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              {quickActions.map(a => (
                <div key={a.label} className="quick-action">
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: `${a.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, margin: "0 auto 10px" }}>{a.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#4a4a6a" }}>{a.label}</div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid #f0f0f8", paddingTop: 20, marginTop: 20 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a2e", marginBottom: 12 }}>Recent Doctors</div>
              {pastAppts.map(a => (
                <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #8888cc, #5555aa)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 11, fontWeight: 700 }}>
                    {a.doctor.split(" ").slice(1).map(n => n[0]).join("")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e" }}>{a.doctor}</div>
                    <div style={{ fontSize: 11, color: "#aaaacc" }}>{a.specialty} · {a.date}</div>
                  </div>
                  <div style={{ fontSize: 12, color: "#f59e0b" }}>{"★".repeat(a.rating)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div className="card">
            <h2 className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 20 }}>Health Tips for You</h2>
            {[
              { icon: "💧", tip: "Drink 8 glasses of water today — you're at 5/8", prog: 62 },
              { icon: "🚶", tip: "Take a 30-min walk · Last walk: 2 days ago", prog: 40 },
              { icon: "😴", tip: "Sleep 7–9 hours · Last night: 6.5 hrs", prog: 72 },
            ].map(t => (
              <div key={t.tip} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{t.icon}</span>
                  <span style={{ fontSize: 13, color: "#4a4a6a" }}>{t.tip}</span>
                </div>
                <div style={{ height: 6, background: "#f0f0f8", borderRadius: 3 }}>
                  <div style={{ height: "100%", width: `${t.prog}%`, background: "linear-gradient(90deg, #2A7B6F, #5ba89e)", borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <h2 className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 20 }}>Notifications</h2>
            {[
              { icon: "📅", msg: "Appointment with Dr. Sarah Chen confirmed", time: "Just now", dot: "#2A7B6F" },
              { icon: "💊", msg: "Prescription renewal due in 3 days", time: "1h ago", dot: "#f59e0b" },
              { icon: "📋", msg: "Lab results are ready to view", time: "3h ago", dot: "#7c3aed" },
              { icon: "⭐", msg: "Rate your last visit with Dr. Patel", time: "Yesterday", dot: "#0891b2" },
            ].map(n => (
              <div key={n.msg} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #f8f8fc" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${n.dot}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{n.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: "#1a1a2e", fontWeight: 500, lineHeight: 1.4, marginBottom: 3 }}>{n.msg}</div>
                  <div style={{ fontSize: 11, color: "#aaaacc" }}>{n.time}</div>
                </div>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: n.dot, marginTop: 4, flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}