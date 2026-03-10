import { useState } from "react";

const appointments = [
  { id: 1, doctor: "Dr. Sarah Chen", specialty: "Cardiologist", date: "Mon, Mar 10, 2026", time: "10:00 AM", type: "In-Person", status: "upcoming", avatar: "SC", color: "#2A7B6F", location: "City Medical Center", price: 150, canJoin: true },
  { id: 2, doctor: "Dr. Marcus Reid", specialty: "Neurologist", date: "Wed, Mar 12, 2026", time: "2:30 PM", type: "Telehealth", status: "upcoming", avatar: "MR", color: "#7c3aed", location: "Online", price: 180, canJoin: false },
  { id: 3, doctor: "Dr. Priya Nair", specialty: "Dermatologist", date: "Fri, Mar 14, 2026", time: "11:00 AM", type: "Telehealth", status: "pending", avatar: "PN", color: "#dc2626", location: "Online", price: 120, canJoin: false },
  { id: 4, doctor: "Dr. Aisha Okafor", specialty: "Pediatrician", date: "Feb 28, 2026", time: "11:00 AM", type: "In-Person", status: "completed", avatar: "AO", color: "#f59e0b", location: "KidsFirst Clinic", price: 100, rating: 5 },
  { id: 5, doctor: "Dr. James Wolfe", specialty: "Orthopedist", date: "Feb 20, 2026", time: "9:00 AM", type: "In-Person", status: "completed", avatar: "JW", color: "#0891b2", location: "BoneHealth Institute", price: 200, rating: 4 },
  { id: 6, doctor: "Dr. Luca Romano", specialty: "Ophthalmologist", date: "Jan 15, 2026", time: "3:00 PM", type: "Telehealth", status: "cancelled", avatar: "LR", color: "#6b7280", location: "Online", price: 140 },
];

const statusConfig = {
  upcoming: { label: "Upcoming", color: "#2A7B6F", bg: "rgba(42,123,111,0.1)" },
  pending: { label: "Pending", color: "#d97706", bg: "rgba(217,119,6,0.1)" },
  completed: { label: "Completed", color: "#059669", bg: "rgba(5,150,105,0.1)" },
  cancelled: { label: "Cancelled", color: "#dc2626", bg: "rgba(220,38,38,0.1)" },
};

export default function MyAppointments() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [selectedAppt, setSelectedAppt] = useState(null);
  const [showRating, setShowRating] = useState(null);
  const [ratings, setRatings] = useState({});

  const tabs = [
    { key: "all", label: "All", count: appointments.length },
    { key: "upcoming", label: "Upcoming", count: appointments.filter(a => a.status === "upcoming").length },
    { key: "pending", label: "Pending", count: appointments.filter(a => a.status === "pending").length },
    { key: "completed", label: "Completed", count: appointments.filter(a => a.status === "completed").length },
    { key: "cancelled", label: "Cancelled", count: appointments.filter(a => a.status === "cancelled").length },
  ];

  const filtered = appointments.filter(a => {
    if (activeTab !== "all" && a.status !== activeTab) return false;
    if (search && !a.doctor.toLowerCase().includes(search.toLowerCase()) && !a.specialty.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#F4F6FB" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hero-title { font-family: 'Playfair Display', serif; }
        .card { background: white; border-radius: 20px; box-shadow: 0 2px 15px rgba(0,0,0,0.06); }
        .tab-btn { padding: 10px 20px; border-radius: 20px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; border: none; display: flex; align-items: center; gap: 8px; }
        .appt-row { padding: 20px 24px; border-bottom: 1px solid #f5f5fc; transition: all 0.2s; cursor: pointer; }
        .appt-row:hover { background: #fafafa; }
        .appt-row:last-child { border-bottom: none; }
        .btn-xs { padding: 7px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; cursor: pointer; border: none; font-family: 'DM Sans', sans-serif; transition: all 0.2s; }
        .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .star-btn { background: none; border: none; cursor: pointer; font-size: 24px; transition: all 0.1s; }
        .star-btn:hover { transform: scale(1.2); }
        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; backdrop-filter: blur(4px); }
        .modal { background: white; border-radius: 24px; padding: 32px; max-width: 480px; width: 90%; box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
      `}</style>

      {/* Header */}
      <div style={{ background: "white", padding: "18px 40px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 18 }}>✦</span>
          </div>
          <span className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e" }}>MediBook</span>
          <span style={{ color: "#ddd", margin: "0 8px" }}>|</span>
          <span style={{ fontSize: 15, color: "#4a4a6a", fontWeight: 500 }}>My Appointments</span>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button style={{ background: "linear-gradient(135deg, #2A7B6F, #1a5c52)", color: "white", border: "none", padding: "10px 22px", borderRadius: 22, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>+ New Appointment</button>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>AJ</div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 24px" }}>
        {/* Stats Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 28 }}>
          {[
            { label: "Total Visits", value: appointments.length, icon: "📅", color: "#2A7B6F" },
            { label: "Upcoming", value: appointments.filter(a => a.status === "upcoming").length, icon: "⏰", color: "#7c3aed" },
            { label: "Completed", value: appointments.filter(a => a.status === "completed").length, icon: "✅", color: "#059669" },
            { label: "Total Spent", value: `$${appointments.filter(a => a.status === "completed").reduce((s, a) => s + a.price, 0)}`, icon: "💰", color: "#0891b2" },
          ].map(s => (
            <div key={s.label} style={{ background: "white", borderRadius: 18, padding: "20px 22px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${s.color}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{s.icon}</div>
              <div>
                <div className="hero-title" style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#8888aa" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="card" style={{ padding: "20px 24px", marginBottom: 20 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            {/* Tabs */}
            <div style={{ display: "flex", gap: 6, background: "#f0f0f8", padding: "4px", borderRadius: 14, flex: 1 }}>
              {tabs.map(tab => (
                <button key={tab.key} className="tab-btn" onClick={() => setActiveTab(tab.key)} style={{ flex: 1, justifyContent: "center", background: activeTab === tab.key ? "white" : "transparent", color: activeTab === tab.key ? "#2A7B6F" : "#8888aa", boxShadow: activeTab === tab.key ? "0 2px 8px rgba(0,0,0,0.08)" : "none" }}>
                  {tab.label}
                  {tab.count > 0 && <span style={{ background: activeTab === tab.key ? "rgba(42,123,111,0.15)" : "#e5e5f0", color: activeTab === tab.key ? "#2A7B6F" : "#aaa", borderRadius: 20, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>{tab.count}</span>}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div style={{ display: "flex", background: "#f8f8fc", borderRadius: 12, padding: "8px 14px", gap: 8, alignItems: "center" }}>
                <span style={{ color: "#aaa" }}>🔍</span>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search doctor..." style={{ border: "none", outline: "none", fontSize: 14, background: "transparent", fontFamily: "'DM Sans', sans-serif", color: "#333", width: 140 }} />
              </div>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ border: "1.5px solid #e5e5f0", borderRadius: 12, padding: "9px 14px", fontSize: 13, fontFamily: "'DM Sans', sans-serif", color: "#4a4a6a", background: "white", outline: "none", cursor: "pointer" }}>
                <option value="date">Sort: Date</option>
                <option value="doctor">Sort: Doctor</option>
                <option value="price">Sort: Price</option>
              </select>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="card">
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#aaaacc" }}>
              <div style={{ fontSize: 50, marginBottom: 16 }}>📅</div>
              <div className="hero-title" style={{ fontSize: 22, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>No appointments found</div>
              <div style={{ fontSize: 15 }}>Try adjusting your filters</div>
            </div>
          ) : (
            filtered.map(appt => (
              <div key={appt.id} className="appt-row" onClick={() => setSelectedAppt(appt)}>
                <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
                  {/* Avatar */}
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: `linear-gradient(135deg, ${appt.color}, ${appt.color}aa)`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 17, flexShrink: 0 }}>{appt.avatar}</div>

                  {/* Doctor Info */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <span className="hero-title" style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>{appt.doctor}</span>
                      <span style={{ fontSize: 13, color: "#2A7B6F", fontWeight: 600 }}>{appt.specialty}</span>
                    </div>
                    <div style={{ display: "flex", gap: 16, fontSize: 13, color: "#8888aa" }}>
                      <span>📅 {appt.date}</span>
                      <span>🕐 {appt.time}</span>
                      <span>{appt.type === "Telehealth" ? "📹" : "🏥"} {appt.type}</span>
                      <span>📍 {appt.location}</span>
                    </div>
                    {appt.status === "completed" && appt.rating && (
                      <div style={{ marginTop: 6, fontSize: 14, color: "#f59e0b" }}>{"★".repeat(appt.rating)}</div>
                    )}
                  </div>

                  {/* Price & Status */}
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div className="hero-title" style={{ fontSize: 18, fontWeight: 800, color: "#1a1a2e", marginBottom: 6 }}>${appt.price}</div>
                    <span className="badge" style={{ background: statusConfig[appt.status].bg, color: statusConfig[appt.status].color }}>
                      ● {statusConfig[appt.status].label}
                    </span>
                  </div>

                  {/* Actions */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, flexShrink: 0, marginLeft: 16 }} onClick={e => e.stopPropagation()}>
                    {appt.status === "upcoming" && (
                      <>
                        {appt.canJoin && <button className="btn-xs" style={{ background: "linear-gradient(135deg, #2A7B6F, #1a5c52)", color: "white", boxShadow: "0 3px 10px rgba(42,123,111,0.3)" }}>Join Now</button>}
                        <button className="btn-xs" style={{ background: "#f0f0f8", color: "#4a4a6a" }}>Reschedule</button>
                        <button className="btn-xs" style={{ background: "rgba(220,38,38,0.08)", color: "#dc2626" }}>Cancel</button>
                      </>
                    )}
                    {appt.status === "completed" && !ratings[appt.id] && (
                      <button className="btn-xs" onClick={() => setShowRating(appt.id)} style={{ background: "rgba(245,158,11,0.1)", color: "#d97706" }}>⭐ Rate Visit</button>
                    )}
                    {appt.status === "completed" && ratings[appt.id] && (
                      <div style={{ fontSize: 14, color: "#f59e0b" }}>{"★".repeat(ratings[appt.id])}</div>
                    )}
                    {appt.status === "completed" && (
                      <button className="btn-xs" style={{ background: "rgba(42,123,111,0.08)", color: "#2A7B6F" }}>Book Again</button>
                    )}
                    {appt.status === "pending" && (
                      <button className="btn-xs" style={{ background: "#f0f0f8", color: "#4a4a6a" }}>Cancel</button>
                    )}
                    <button className="btn-xs" style={{ background: "#f8f8fc", color: "#6666aa" }}>Details →</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Rating Modal */}
      {showRating && (
        <div className="modal-overlay" onClick={() => setShowRating(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>⭐</div>
              <h3 className="hero-title" style={{ fontSize: 24, fontWeight: 800, color: "#1a1a2e", marginBottom: 8 }}>Rate Your Visit</h3>
              <p style={{ color: "#8888aa", fontSize: 14 }}>How was your experience with {appointments.find(a => a.id === showRating)?.doctor}?</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24 }}>
              {[1,2,3,4,5].map(n => (
                <button key={n} className="star-btn" onClick={() => setRatings({ ...ratings, [showRating]: n })} style={{ color: n <= (ratings[showRating] || 0) ? "#f59e0b" : "#e5e5f0" }}>★</button>
              ))}
            </div>
            <textarea placeholder="Share your experience (optional)..." style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #e5e5f0", borderRadius: 12, fontSize: 14, fontFamily: "'DM Sans', sans-serif", outline: "none", resize: "none", marginBottom: 16 }} rows={3} />
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={() => setShowRating(null)} style={{ flex: 1, padding: "13px", borderRadius: 12, border: "1.5px solid #e5e5f0", background: "white", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, color: "#4a4a6a" }}>Skip</button>
              <button onClick={() => setShowRating(null)} style={{ flex: 1, padding: "13px", borderRadius: 12, background: "linear-gradient(135deg, #2A7B6F, #1a5c52)", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "white" }}>Submit Review</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}