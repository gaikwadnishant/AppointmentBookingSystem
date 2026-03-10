import { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Sarah Chen", specialty: "Cardiologist", exp: 12, rating: 4.9, reviews: 324, fee: 150, available: true, nextSlot: "Today 3PM", tags: ["Heart Health", "ECG", "Hypertension"], avatar: "SC", grad: ["#2A7B6F","#5ba89e"], location: "City Medical Center", languages: ["English", "Mandarin"] },
  { id: 2, name: "Dr. Marcus Reid", specialty: "Neurologist", exp: 15, rating: 4.8, reviews: 218, fee: 180, available: true, nextSlot: "Tomorrow 10AM", tags: ["Migraines", "Epilepsy", "Stroke"], avatar: "MR", grad: ["#7c3aed","#a78bfa"], location: "NeuroHealth Clinic", languages: ["English", "French"] },
  { id: 3, name: "Dr. Priya Nair", specialty: "Dermatologist", exp: 8, rating: 4.7, reviews: 456, fee: 120, available: true, nextSlot: "Today 5PM", tags: ["Acne", "Eczema", "Skin Cancer"], avatar: "PN", grad: ["#dc2626","#f87171"], location: "SkinCare Plus", languages: ["English", "Hindi"] },
  { id: 4, name: "Dr. James Wolfe", specialty: "Orthopedist", exp: 20, rating: 4.9, reviews: 189, fee: 200, available: false, nextSlot: "Mon 9AM", tags: ["Sports Injury", "Joint Pain", "Surgery"], avatar: "JW", grad: ["#0891b2","#67e8f9"], location: "BoneHealth Institute", languages: ["English"] },
  { id: 5, name: "Dr. Aisha Okafor", specialty: "Pediatrician", exp: 10, rating: 4.8, reviews: 512, fee: 100, available: true, nextSlot: "Today 4PM", tags: ["Child Health", "Vaccines", "Nutrition"], avatar: "AO", grad: ["#f59e0b","#fde68a"], location: "KidsFirst Clinic", languages: ["English", "Yoruba"] },
  { id: 6, name: "Dr. Luca Romano", specialty: "Ophthalmologist", exp: 14, rating: 4.6, reviews: 267, fee: 140, available: true, nextSlot: "Tomorrow 2PM", tags: ["Cataract", "Glaucoma", "LASIK"], avatar: "LR", grad: ["#059669","#34d399"], location: "Vision Pro Center", languages: ["English", "Italian"] },
];

const specialties = ["All", "Cardiologist", "Neurologist", "Dermatologist", "Orthopedist", "Pediatrician", "Ophthalmologist"];

export default function BrowseProviders() {
  const [search, setSearch] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [maxFee, setMaxFee] = useState(250);
  const [viewMode, setViewMode] = useState("grid");
  const [savedDocs, setSavedDocs] = useState([]);

  const filtered = doctors
    .filter(d => {
      if (availableOnly && !d.available) return false;
      if (selectedSpec !== "All" && d.specialty !== selectedSpec) return false;
      if (d.fee > maxFee) return false;
      if (search && !d.name.toLowerCase().includes(search.toLowerCase()) && !d.specialty.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "fee_low") return a.fee - b.fee;
      if (sortBy === "fee_high") return b.fee - a.fee;
      if (sortBy === "exp") return b.exp - a.exp;
      return 0;
    });

  const toggleSave = (id) => setSavedDocs(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", background: "#F4F6FB" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .hero-title { font-family: 'Playfair Display', serif; }
        .doctor-card { background: white; border-radius: 20px; padding: 24px; box-shadow: 0 2px 15px rgba(0,0,0,0.06); transition: all 0.25s; cursor: pointer; border: 1.5px solid transparent; }
        .doctor-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); border-color: #2A7B6F22; }
        .filter-btn { padding: 8px 18px; border-radius: 20px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; border: 1.5px solid #e5e5f0; background: white; color: #6666aa; }
        .filter-btn.active { background: #2A7B6F; color: white; border-color: #2A7B6F; }
        .btn-book { background: linear-gradient(135deg, #2A7B6F, #1a5c52); color: white; border: none; padding: 10px 22px; border-radius: 22px; font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; box-shadow: 0 4px 15px rgba(42,123,111,0.3); }
        .btn-book:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(42,123,111,0.4); }
        .tag { display: inline-block; background: rgba(42,123,111,0.08); color: #2A7B6F; padding: 4px 10px; border-radius: 8px; font-size: 11px; font-weight: 600; margin-right: 5px; margin-bottom: 5px; }
        .search-box { display: flex; background: white; border-radius: 14px; padding: 4px 4px 4px 18px; box-shadow: 0 2px 15px rgba(0,0,0,0.08); align-items: center; gap: 10px; flex: 1; max-width: 450px; }
        .search-box input { flex: 1; border: none; outline: none; font-size: 15px; color: #333; font-family: 'DM Sans', sans-serif; background: transparent; padding: 8px 0; }
        .sort-select { border: 1.5px solid #e5e5f0; border-radius: 12px; padding: 10px 16px; font-size: 14px; font-family: 'DM Sans', sans-serif; color: #4a4a6a; background: white; outline: none; cursor: pointer; }
        .list-card { background: white; border-radius: 18px; padding: 20px 24px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 20px; margin-bottom: 14px; border: 1.5px solid transparent; transition: all 0.2s; cursor: pointer; }
        .list-card:hover { border-color: #2A7B6F22; box-shadow: 0 8px 25px rgba(0,0,0,0.08); }
      `}</style>

      {/* Top Bar */}
      <div style={{ background: "white", padding: "20px 40px", borderBottom: "1px solid #eee", display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 18 }}>✦</span>
          </div>
          <span className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e" }}>MediBook</span>
        </div>
        <div className="search-box">
          <span style={{ fontSize: 18, color: "#aaa" }}>🔍</span>
          <input placeholder="Search by name, specialty, or condition..." value={search} onChange={e => setSearch(e.target.value)} />
          {search && <button onClick={() => setSearch("")} style={{ background: "#f0f0f8", border: "none", borderRadius: 8, padding: "6px 10px", cursor: "pointer", color: "#888", fontSize: 12 }}>✕</button>}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
          <button style={{ background: "#f0f0f8", border: "none", padding: "10px 16px", borderRadius: 12, cursor: "pointer", fontSize: 14, color: "#4a4a6a", fontFamily: "'DM Sans', sans-serif" }}>← Dashboard</button>
          <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>AJ</div>
        </div>
      </div>

      <div style={{ display: "flex", maxWidth: 1400, margin: "0 auto", padding: "0 24px" }}>
        {/* Filter Sidebar */}
        <div style={{ width: 260, flexShrink: 0, padding: "28px 0 28px", marginRight: 24 }}>
          <div style={{ background: "white", borderRadius: 20, padding: "24px", boxShadow: "0 2px 15px rgba(0,0,0,0.06)", position: "sticky", top: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>Filters</h3>
              <button style={{ background: "none", border: "none", color: "#2A7B6F", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Reset</button>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 12 }}>Availability</div>
              <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <div onClick={() => setAvailableOnly(!availableOnly)} style={{ width: 40, height: 22, borderRadius: 11, background: availableOnly ? "#2A7B6F" : "#e5e5f0", position: "relative", transition: "all 0.2s", cursor: "pointer" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "white", position: "absolute", top: 2, left: availableOnly ? 20 : 2, transition: "all 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }} />
                </div>
                <span style={{ fontSize: 14, color: "#4a4a6a" }}>Available Today</span>
              </label>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e" }}>Max Fee</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#2A7B6F" }}>${maxFee}</div>
              </div>
              <input type="range" min={50} max={500} value={maxFee} onChange={e => setMaxFee(Number(e.target.value))} style={{ width: "100%", accentColor: "#2A7B6F" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#aaa", marginTop: 4 }}>
                <span>$50</span><span>$500</span>
              </div>
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 12 }}>Rating</div>
              {[4.9, 4.5, 4.0, "Any"].map(r => (
                <label key={r} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer" }}>
                  <input type="radio" name="rating" style={{ accentColor: "#2A7B6F" }} />
                  <span style={{ fontSize: 14, color: "#4a4a6a" }}>{r === "Any" ? "Any Rating" : `${r}+ ★`}</span>
                </label>
              ))}
            </div>

            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 12 }}>Gender</div>
              <div style={{ display: "flex", gap: 8 }}>
                {["Any", "Male", "Female"].map(g => (
                  <button key={g} style={{ padding: "7px 14px", borderRadius: 8, border: "1.5px solid #e5e5f0", background: "white", cursor: "pointer", fontSize: 13, color: "#6666aa", fontFamily: "'DM Sans', sans-serif" }}>{g}</button>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a2e", marginBottom: 12 }}>Languages</div>
              {["English", "Spanish", "Mandarin", "French", "Hindi"].map(lang => (
                <label key={lang} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer" }}>
                  <input type="checkbox" style={{ accentColor: "#2A7B6F" }} />
                  <span style={{ fontSize: 14, color: "#4a4a6a" }}>{lang}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div style={{ flex: 1, padding: "28px 0" }}>
          {/* Specialty Pills */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 16, marginBottom: 20, scrollbarWidth: "none" }}>
            {specialties.map(s => (
              <button key={s} className={`filter-btn ${selectedSpec === s ? "active" : ""}`} onClick={() => setSelectedSpec(s)} style={{ whiteSpace: "nowrap" }}>{s}</button>
            ))}
          </div>

          {/* Sort & Count bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <div>
              <span className="hero-title" style={{ fontSize: 22, fontWeight: 800, color: "#1a1a2e" }}>{filtered.length} Doctors</span>
              <span style={{ color: "#8888aa", fontSize: 14, marginLeft: 8 }}>match your search</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <select className="sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="rating">Top Rated</option>
                <option value="fee_low">Fee: Low to High</option>
                <option value="fee_high">Fee: High to Low</option>
                <option value="exp">Most Experienced</option>
              </select>
              <div style={{ display: "flex", gap: 4, background: "white", padding: "4px", borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                {["grid", "list"].map(mode => (
                  <button key={mode} onClick={() => setViewMode(mode)} style={{ width: 36, height: 36, borderRadius: 8, background: viewMode === mode ? "#2A7B6F" : "transparent", border: "none", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", color: viewMode === mode ? "white" : "#888" }}>
                    {mode === "grid" ? "▦" : "☰"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Doctor Cards */}
          {viewMode === "grid" ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
              {filtered.map(doc => (
                <div key={doc.id} className="doctor-card">
                  <div style={{ display: "flex", gap: 14, marginBottom: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 58, height: 58, borderRadius: 16, background: `linear-gradient(135deg, ${doc.grad[0]}, ${doc.grad[1]})`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 18, flexShrink: 0 }}>{doc.avatar}</div>
                    <div style={{ flex: 1 }}>
                      <div className="hero-title" style={{ fontSize: 17, fontWeight: 700, color: "#1a1a2e", marginBottom: 2 }}>{doc.name}</div>
                      <div style={{ fontSize: 13, color: "#2A7B6F", fontWeight: 600, marginBottom: 4 }}>{doc.specialty}</div>
                      <div style={{ fontSize: 12, color: "#8888aa" }}>📍 {doc.location}</div>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); toggleSave(doc.id); }} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20 }}>
                      {savedDocs.includes(doc.id) ? "❤️" : "🤍"}
                    </button>
                  </div>

                  <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontWeight: 800, color: "#1a1a2e", fontSize: 16 }}>{doc.rating}</div>
                      <div style={{ fontSize: 10, color: "#aaa" }}>Rating</div>
                    </div>
                    <div style={{ width: 1, background: "#f0f0f8" }} />
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontWeight: 800, color: "#1a1a2e", fontSize: 16 }}>{doc.exp}yr</div>
                      <div style={{ fontSize: 10, color: "#aaa" }}>Experience</div>
                    </div>
                    <div style={{ width: 1, background: "#f0f0f8" }} />
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontWeight: 800, color: "#1a1a2e", fontSize: 16 }}>{doc.reviews}</div>
                      <div style={{ fontSize: 10, color: "#aaa" }}>Reviews</div>
                    </div>
                  </div>

                  <div style={{ marginBottom: 14 }}>
                    {doc.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <span className="hero-title" style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e" }}>${doc.fee}</span>
                      <span style={{ fontSize: 12, color: "#aaa" }}>/session</span>
                      <div style={{ fontSize: 12, marginTop: 2 }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: doc.available ? "#4ade80" : "#f59e0b", display: "inline-block", marginRight: 5 }} />
                        <span style={{ color: doc.available ? "#16a34a" : "#d97706" }}>Next: {doc.nextSlot}</span>
                      </div>
                    </div>
                    <button className="btn-book">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {filtered.map(doc => (
                <div key={doc.id} className="list-card">
                  <div style={{ width: 64, height: 64, borderRadius: 18, background: `linear-gradient(135deg, ${doc.grad[0]}, ${doc.grad[1]})`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 20, flexShrink: 0 }}>{doc.avatar}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <span className="hero-title" style={{ fontSize: 17, fontWeight: 700, color: "#1a1a2e" }}>{doc.name}</span>
                      <span style={{ fontSize: 12, color: "#f59e0b" }}>★ {doc.rating}</span>
                      <span style={{ fontSize: 11, color: "#aaa" }}>({doc.reviews})</span>
                    </div>
                    <div style={{ fontSize: 13, color: "#2A7B6F", fontWeight: 600, marginBottom: 6 }}>{doc.specialty} · {doc.exp} yrs · 📍 {doc.location}</div>
                    <div>{doc.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div className="hero-title" style={{ fontSize: 20, fontWeight: 800, color: "#1a1a2e", marginBottom: 4 }}>${doc.fee}</div>
                    <div style={{ fontSize: 12, color: doc.available ? "#16a34a" : "#d97706", marginBottom: 12 }}>● {doc.nextSlot}</div>
                    <button className="btn-book">Book Now</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 20px", color: "#aaaacc" }}>
              <div style={{ fontSize: 60, marginBottom: 16 }}>🔍</div>
              <div className="hero-title" style={{ fontSize: 24, fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>No doctors found</div>
              <div style={{ fontSize: 15 }}>Try adjusting your filters or search query</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}