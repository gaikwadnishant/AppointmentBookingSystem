import { useState, useEffect } from "react";

const specialties = [
  { icon: "🫀", name: "Cardiology", count: "124 Doctors" },
  { icon: "🧠", name: "Neurology", count: "89 Doctors" },
  { icon: "🦷", name: "Dentistry", count: "210 Doctors" },
  { icon: "👁️", name: "Ophthalmology", count: "76 Doctors" },
  { icon: "🦴", name: "Orthopedics", count: "98 Doctors" },
  { icon: "🧬", name: "Oncology", count: "54 Doctors" },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "Patient since 2022", text: "MediBook transformed how I manage my healthcare. Booking an appointment now takes less than 2 minutes.", avatar: "SM" },
  { name: "James Okafor", role: "Patient since 2021", text: "The ability to see real-time availability and read verified reviews gave me confidence in choosing the right specialist.", avatar: "JO" },
  { name: "Priya Sharma", role: "Patient since 2023", text: "I love the reminders and the seamless rescheduling feature. No more missed appointments!", avatar: "PS" },
];

const stats = [
  { value: "50K+", label: "Patients Served" },
  { value: "1,200+", label: "Verified Doctors" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "30+", label: "Specialties" },
];

export default function LandingPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#FAFAF8", color: "#1a1a2e", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }
        .hero-title { font-family: 'Playfair Display', serif; }
        .nav-link { color: #4a4a6a; text-decoration: none; font-size: 14px; font-weight: 500; letter-spacing: 0.5px; transition: color 0.2s; }
        .nav-link:hover { color: #2A7B6F; }
        .btn-primary { background: linear-gradient(135deg, #2A7B6F 0%, #1a5c52 100%); color: white; border: none; padding: 14px 32px; border-radius: 50px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; letter-spacing: 0.3px; box-shadow: 0 4px 20px rgba(42,123,111,0.35); font-family: 'DM Sans', sans-serif; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(42,123,111,0.45); }
        .btn-outline { background: transparent; color: #2A7B6F; border: 2px solid #2A7B6F; padding: 12px 30px; border-radius: 50px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; font-family: 'DM Sans', sans-serif; }
        .btn-outline:hover { background: #2A7B6F; color: white; }
        .specialty-card { background: white; border-radius: 20px; padding: 28px 24px; text-align: center; cursor: pointer; transition: all 0.3s; border: 1px solid #eee; }
        .specialty-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(42,123,111,0.15); border-color: #2A7B6F; }
        .stat-item { text-align: center; }
        .section-tag { display: inline-block; background: rgba(42,123,111,0.1); color: #2A7B6F; padding: 6px 18px; border-radius: 50px; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px; font-family: 'DM Sans', sans-serif; }
        .search-bar { display: flex; background: white; border-radius: 60px; padding: 8px 8px 8px 24px; box-shadow: 0 8px 40px rgba(0,0,0,0.12); align-items: center; max-width: 580px; margin: 0 auto; }
        .search-bar input { flex: 1; border: none; outline: none; font-size: 15px; color: #333; font-family: 'DM Sans', sans-serif; background: transparent; }
        .floating-badge { background: white; border-radius: 16px; padding: 12px 18px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); display: flex; align-items: center; gap: 10px; font-family: 'DM Sans', sans-serif; }
        .doctor-avatar { width: 44px; height: 44px; border-radius: 50%; border: 2px solid white; object-fit: cover; background: linear-gradient(135deg, #2A7B6F, #5ba89e); display: flex; align-items: center; justify-content: center; font-weight: 700; color: white; font-size: 13px; }
        .testimonial-card { background: white; border-radius: 24px; padding: 36px; box-shadow: 0 4px 30px rgba(0,0,0,0.07); transition: all 0.5s; }
        .step-number { width: 48px; height: 48px; background: linear-gradient(135deg, #2A7B6F, #5ba89e); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 18px; font-family: 'DM Sans', sans-serif; }
        .feature-icon { width: 56px; height: 56px; border-radius: 16px; background: rgba(42,123,111,0.1); display: flex; align-items: center; justify-content: center; font-size: 26px; margin-bottom: 20px; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-fadein { animation: fadeInUp 0.8s ease forwards; }
        .dot-active { background: #2A7B6F; }
        .dot-inactive { background: #ddd; cursor: pointer; }
      `}</style>

      {/* Navbar */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(250,250,248,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", padding: "18px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "all 0.3s", borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 18 }}>✦</span>
          </div>
          <span className="hero-title" style={{ fontSize: 22, fontWeight: 700, color: "#1a1a2e" }}>MediBook</span>
        </div>
        <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {["Find Doctors", "Specialties", "How It Works", "About"].map(link => (
            <a key={link} href="#" className="nav-link">{link}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button className="btn-outline" style={{ padding: "10px 24px", fontSize: 14 }}>Log In</button>
          <button className="btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 80 }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "55%", height: "100%", background: "linear-gradient(135deg, #e8f5f3 0%, #d0ede8 100%)", borderRadius: "0 0 0 120px", zIndex: 0 }} />
        <div style={{ position: "absolute", top: "15%", right: "5%", width: 300, height: 300, background: "radial-gradient(circle, rgba(42,123,111,0.15) 0%, transparent 70%)", borderRadius: "50%" }} />
        
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 1, width: "100%" }}>
          <div className="animate-fadein">
            <div className="section-tag">Trusted by 50,000+ Patients</div>
            <h1 className="hero-title" style={{ fontSize: "clamp(40px,4.5vw,62px)", lineHeight: 1.15, fontWeight: 900, color: "#1a1a2e", marginBottom: 24 }}>
              Your Health,<br />
              <span style={{ color: "#2A7B6F", fontStyle: "italic" }}>Expertly</span> Managed
            </h1>
            <p style={{ fontSize: 17, color: "#5a5a7a", lineHeight: 1.8, marginBottom: 36, fontFamily: "'DM Sans', sans-serif", fontWeight: 400, maxWidth: 420 }}>
              Connect with top-rated specialists, book appointments in seconds, and take control of your healthcare journey — all in one elegant platform.
            </p>
            <div className="search-bar" style={{ marginBottom: 36, marginLeft: 0 }}>
              <span style={{ fontSize: 18, marginRight: 8 }}>🔍</span>
              <input placeholder="Search by doctor, specialty, or condition..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              <button className="btn-primary" style={{ whiteSpace: "nowrap", padding: "12px 24px", fontSize: 14 }}>Search</button>
            </div>
            <div style={{ display: "flex", gap: 32, fontFamily: "'DM Sans', sans-serif" }}>
              {stats.slice(0, 3).map(s => (
                <div key={s.value}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#2A7B6F", fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: "#8888aa", letterSpacing: "0.5px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: 380, height: 480, background: "linear-gradient(135deg, #2A7B6F 0%, #1a5c52 100%)", borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", boxShadow: "0 30px 80px rgba(42,123,111,0.4)" }} className="animate-float">
              <div style={{ fontSize: 100 }}>👨‍⚕️</div>
              {/* Floating badges */}
              <div className="floating-badge" style={{ position: "absolute", top: 30, left: -60 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ade80" }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#1a1a2e" }}>Available Now</div>
                  <div style={{ fontSize: 10, color: "#888" }}>Dr. Sarah Chen</div>
                </div>
              </div>
              <div className="floating-badge" style={{ position: "absolute", bottom: 60, right: -70 }}>
                <span style={{ fontSize: 20 }}>⭐</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#1a1a2e" }}>4.9/5.0</div>
                  <div style={{ fontSize: 10, color: "#888" }}>Top Rated</div>
                </div>
              </div>
              <div className="floating-badge" style={{ position: "absolute", bottom: -20, left: -40 }}>
                <span style={{ fontSize: 20 }}>📅</span>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#1a1a2e" }}>Booked!</div>
                  <div style={{ fontSize: 10, color: "#888" }}>Tomorrow 10:00 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "#1a1a2e", padding: "40px 60px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
          {stats.map(s => (
            <div key={s.value} className="stat-item">
              <div className="hero-title" style={{ fontSize: 38, fontWeight: 900, color: "#5ba89e", marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#aaaacc", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.5px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section style={{ padding: "100px 60px", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-tag">Medical Specialties</div>
            <h2 className="hero-title" style={{ fontSize: 44, fontWeight: 800, color: "#1a1a2e", marginBottom: 16 }}>Find Your Specialist</h2>
            <p style={{ color: "#8888aa", fontSize: 16, fontFamily: "'DM Sans', sans-serif" }}>Browse through 30+ medical specialties and connect with the best doctors</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {specialties.map(s => (
              <div key={s.name} className="specialty-card">
                <div style={{ fontSize: 42, marginBottom: 16 }}>{s.icon}</div>
                <div className="hero-title" style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", marginBottom: 6 }}>{s.name}</div>
                <div style={{ color: "#2A7B6F", fontSize: 13, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>{s.count}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button className="btn-outline">View All Specialties →</button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "100px 60px", background: "linear-gradient(135deg, #f0faf8 0%, #e8f5f2 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <div className="section-tag">Simple Process</div>
            <h2 className="hero-title" style={{ fontSize: 44, fontWeight: 800, color: "#1a1a2e" }}>Book in 3 Easy Steps</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 50, position: "relative" }}>
            <div style={{ position: "absolute", top: 24, left: "20%", right: "20%", height: 2, background: "linear-gradient(90deg, #2A7B6F, #5ba89e)", zIndex: 0 }} />
            {[
              { step: 1, title: "Search & Discover", desc: "Find doctors by specialty, location, language, or availability using our intelligent search." },
              { step: 2, title: "Choose & Book", desc: "Review profiles, read verified patient reviews, and select your preferred time slot instantly." },
              { step: 3, title: "Attend & Thrive", desc: "Receive reminders, attend your appointment, and follow up with your doctor — all in-app." },
            ].map(s => (
              <div key={s.step} style={{ textAlign: "center", position: "relative", zIndex: 1, background: "transparent" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                  <div className="step-number">{s.step}</div>
                </div>
                <h3 className="hero-title" style={{ fontSize: 22, fontWeight: 700, color: "#1a1a2e", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "#6666aa", fontSize: 15, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <button className="btn-primary" style={{ fontSize: 16, padding: "16px 48px" }}>Book Your First Appointment →</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "100px 60px", background: "#FAFAF8" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div className="section-tag">Patient Stories</div>
          <h2 className="hero-title" style={{ fontSize: 44, fontWeight: 800, color: "#1a1a2e", marginBottom: 48 }}>What Patients Say</h2>
          <div className="testimonial-card" style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 48, color: "#2A7B6F", marginBottom: 20, fontFamily: "serif" }}>"</div>
            <p style={{ fontSize: 19, color: "#4a4a6a", lineHeight: 1.8, fontFamily: "'Playfair Display', serif", fontStyle: "italic", marginBottom: 28 }}>
              {testimonials[activeTestimonial].text}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
              <div className="doctor-avatar">{testimonials[activeTestimonial].avatar}</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, color: "#1a1a2e", fontFamily: "'DM Sans', sans-serif" }}>{testimonials[activeTestimonial].name}</div>
                <div style={{ fontSize: 13, color: "#2A7B6F", fontFamily: "'DM Sans', sans-serif" }}>{testimonials[activeTestimonial].role}</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            {testimonials.map((_, i) => (
              <div key={i} onClick={() => setActiveTestimonial(i)} style={{ width: i === activeTestimonial ? 28 : 8, height: 8, borderRadius: 4, transition: "all 0.3s", cursor: "pointer", background: i === activeTestimonial ? "#2A7B6F" : "#ddd" }} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 60px", background: "linear-gradient(135deg, #1a1a2e 0%, #2A7B6F 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-50%", left: "-10%", width: 400, height: 400, background: "rgba(255,255,255,0.03)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "-50%", right: "-5%", width: 500, height: 500, background: "rgba(255,255,255,0.03)", borderRadius: "50%" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 className="hero-title" style={{ fontSize: 50, fontWeight: 900, color: "white", marginBottom: 20 }}>Ready to Take Charge<br />of Your Health?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 17, marginBottom: 40, fontFamily: "'DM Sans', sans-serif" }}>Join thousands of patients who've simplified their healthcare journey.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <button className="btn-primary" style={{ background: "white", color: "#2A7B6F", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>Create Free Account</button>
            <button className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>Browse Doctors</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#1a1a2e", padding: "60px 60px 30px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 50 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #2A7B6F, #5ba89e)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "white", fontSize: 18 }}>✦</span>
                </div>
                <span className="hero-title" style={{ fontSize: 22, fontWeight: 700, color: "white" }}>MediBook</span>
              </div>
              <p style={{ color: "#6666aa", fontSize: 14, lineHeight: 1.8, fontFamily: "'DM Sans', sans-serif", maxWidth: 280 }}>Connecting patients with the right healthcare providers, making medical care accessible and effortless.</p>
            </div>
            {[
              { title: "Platform", links: ["Find Doctors", "Specialties", "Telemedicine", "Health Records"] },
              { title: "Company", links: ["About Us", "Careers", "Press", "Blog"] },
              { title: "Support", links: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ color: "white", fontWeight: 600, marginBottom: 20, fontSize: 14, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.5px" }}>{col.title}</div>
                {col.links.map(link => (
                  <div key={link} style={{ color: "#6666aa", fontSize: 14, marginBottom: 12, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s" }}>{link}</div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ color: "#6666aa", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>© 2025 MediBook. All rights reserved.</div>
            <div style={{ color: "#6666aa", fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>Made with ❤️ for better healthcare</div>
          </div>
        </div>
      </footer>
    </div>
  );
}