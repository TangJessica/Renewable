import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add "scrolled" class
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderHeroSection = () => {
    switch (location.pathname) {
      case "/":
        return (
          <section className="hero">
            <video autoPlay loop muted playsInline className="bg-video">
              <source src="/assets/hero_video.mp4" type="video/mp4" />
            </video>
            <div className="container hero-inner">
              <h2>
                Comprehensive and scalable capital solutions and strategic
                advisory
              </h2>
              <p className="eyebrow">
                Your Experts In Renewable Energy Infrastructure
              </p>
            </div>
          </section>
        );
      case "/team":
        return (
          <section className="hero image-hero">
            <img src="/assets/powerplant.jpg" alt="Team" className="bg-image" />
          </section>
        );
      case "/transactions":
        return (
          <section className="hero image-hero">
            <img
              src="/assets/panel.jpg"
              alt="Transactions"
              className="bg-image"
            />
          </section>
        );
      case "/contact":
        return (
          <section className="hero image-hero">
            <img
              src="/assets/contact-us-hero.jpg"
              alt="Contact"
              className="bg-image"
            />
          </section>
        );
      case "/investor":
        return (
          <section className="hero image-hero">
            <img
              src="/assets/investor-hero.avif"
              alt="Investor Login"
              className="bg-image"
            />
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <img src="/assets/logo.png" alt="Logo" className="logo" />

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          &#9776; {/* This is the ≡ symbol */}
          <span className="menu-text">MENU</span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link to="/team" onClick={() => setMenuOpen(false)}>
            TEAM
          </Link>
          <Link to="/transactions" onClick={() => setMenuOpen(false)}>
            TRANSACTIONS
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT US
          </Link>
          <Link to="/investor" onClick={() => setMenuOpen(false)}>
            INVESTOR LOGIN
          </Link>
        </nav>
      </header>
      {renderHeroSection()}
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <img
          className="footer-logo"
          src="/assets/logo_v2.png"
          alt="Catalina Energy Capital logo"
        />

        <p className="disclaimer">
          Securities offered through Hollister Associates, LLC, Member FINRA /
          SIPC. Catalina Energy Capital and Hollister Associates, LLC are not
          affiliated entities.
        </p>
        <p className="disclaimer">
          © Copyright 2025 Catalina Energy Capital. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main>
      <section className="about-section">
        <div className="top-line"></div>
        <h2 className="company-name">CATALINA ENERGY CAPITAL</h2>
        <h1 className="section-title">Who We Are</h1>

        <p className="description">
          We are a renewable energy investment bank that takes a hungry,
          no-nonsense approach to raising capital for the energy transition. Our
          previous experience as developers, investors, lenders, and owners
          enables us to provide a jack-of-all-trades suite of financial services
          for the energy transition. We are active across debt and equity
          capital markets, M&A, climate tech, PPAs, and tax credits.
        </p>

        <p className="mission">
          Our mission is to accelerate the energy transition by designing
          efficient, flexible, and creative capital solutions to decarbonize our
          future. Our ability to connect innovators and incumbents, combined
          with our deep power and capital markets expertise, allows our capital
          to catalyze the energy transition across all asset classes.
        </p>
        <Link className="cta-button" to="/contact">
          Get In Touch
        </Link>
      </section>
      <section className="different-section">
        <h2 className="section-title">What Makes Us Different?</h2>
        <p className="section-subtitle">
          We are a lean team of industry veterans who offer a hungry, zero-ego
          alternative. We are doggedly focused on tailoring the right solution
          for all our clients’ unique needs.
        </p>

        <div className="features">
          <div className="feature">
            <img
              src="assets/logo_icon.png"
              alt="Icon"
              className="feature-icon"
            />
            <div className="feature-text">
              <h3 className="feature-title">CREATIVE CAPITAL SOLUTIONS</h3>
              <p className="feature-description">
                We offer highly flexible capital solutions tailored to the
                unique needs of renewable energy developers to ensure they are
                well positioned to maximize the value of their projects.
              </p>
            </div>
          </div>

          <div className="feature">
            <img
              src="/assets/logo_icon.png"
              alt="Icon"
              className="feature-icon"
            />
            <div className="feature-text">
              <h3 className="feature-title">COMMITTED PARTNERS</h3>
              <p className="feature-description">
                We are focused on creating long-term partnerships where we can
                grow and develop alongside one another.
              </p>
            </div>
          </div>

          <div className="feature">
            <img
              src="/assets/logo_icon.png"
              alt="Icon"
              className="feature-icon"
            />
            <div className="feature-text">
              <h3 className="feature-title">EFFICIENCY</h3>
              <p className="feature-description">
                We work quickly with minimal red tape, and target opportunities
                where we can accelerate project timeline to completion for both
                distributed generation and front-of-the-meter strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Team() {
  return (
    <main className="container">
      <h2 className="page-heading">Meet the Experts</h2>

      <section className="team-section">
        <div className="team-member">
          <img
            src="/assets/dan.png"
            alt="Dan Rittenhouse"
            className="team-photo"
          />
          <div className="team-info">
            <h3 className="team-name">Dan Rittenhouse</h3>
            <p className="team-role">Founder & CEO</p>
            <p className="team-bio">
              Dan previously served as the Head of Renewable Energy at the
              Forest Road Company, where he oversaw the execution of a wide
              variety of credit, equity, and hybrid investments in the renewable
              infrastructure space. Prior to that, he provided merchant banking
              services to over 9 GW worth of solar and storage assets among a
              variety of utility-scale owners and developers in his capacity as
              the Director of Structured Finance at FCM Renewables. Dan has
              served on the Boards of Pathway Power, New Columbia Solar, and
              Morpho Energy, and on the Power & Project Finance team at Zions
              Bancorporation. Mr. Rittenhouse is a Naval Reserve Officer and
              holds a Bachelor of Arts degree from Harvard College.
            </p>
          </div>
        </div>

        <div className="team-member">
          <img
            src="/assets/aidan.png"
            alt="Aidan Acosta"
            className="team-photo"
          />
          <div className="team-info">
            <h3 className="team-name">Aidan Acosta</h3>
            <p className="team-role">Director of Finance</p>
            <p className="team-bio">
              Aidan is a former Project Finance Associate at Sunrun, where he
              played a key role in executing over $2.6 billion in senior and
              Holdco debt financings. He also led the structuring and execution
              of a $2.8 billion non-recourse revolver, a $225 million Safe
              Harbor credit facility, and a $300 million corporate interest rate
              hedging program, supporting Sunrun’s growth as a leading
              residential solar provider.
            </p>
            <p className="team-bio">
              Prior to joining Sunrun, he was an Investment Banking Analyst at
              Morgan Stanley, advising on mergers, acquisitions, and capital
              markets transactions for clients such as Coca-Cola, Vista Outdoor,
              and Driven Brands. His work included multiple public offerings and
              debt facilities totaling over $1 billion.
            </p>
          </div>
        </div>
        <div className="team-member">
          <img
            src="/assets/frank.jpg"
            alt="Frank Davis"
            className="team-photo"
          />
          <div className="team-info">
            <h3 className="team-name">Frank Davis</h3>
            <p className="team-role">Associate</p>
            <p className="team-bio">
              Frank has served eight years in the United States Marine Corps as
              a CH-53E helicopter pilot and the Officer in Charge of Logistics
              and Supply. As Operations Officer, he oversaw short- and long-term
              planning, facilitated large-scale interservice and partner-nation
              operations, and ensured the effective utilization of squadron
              assets while balancing pilot and aircrew professional development.
              While acting as the Maintenance and Quality Assurance Officer, he
              enabled the daily function and future planning for a highly
              technical program valued over $880M. Mr. Davis holds a Bachelor of
              Arts in Human Developmental and Regenerative Biology from Harvard
              College.
            </p>
          </div>
        </div>
        <div className="team-member">
          <img
            src="/assets/will.png"
            alt="William Pate"
            className="team-photo"
          />
          <div className="team-info">
            <h3 className="team-name">William Pate</h3>
            <p className="team-role">Advisor</p>
            <p className="team-bio">
              As a veteran investor and energy executive, Mr. Pate advises on
              Catalina’s mission to connect industry incumbents with talented
              renewable energy companies. He has served as Chief Executive
              Officer of Par Pacific Holdings, Inc. since 2015, a growing energy
              company providing renewable and conventional fuels to the western
              United States. Prior to joining Par Pacific, Mr. Pate was the
              Co-President of Equity Group Investments, the Chicago-based
              private investment firm founded and led by Sam Zell, where he had
              been employed in various capacities since 1994. He has served on
              the boards of directors of Covanta Holding Corporation, Exterran
              Holdings, Inc., Adams Respiratory Therapeutics, MiddleBrook
              Pharmaceuticals and CNA Surety Corp., as well as those of several
              private companies associated with Equity Group Investments. Mr.
              Pate began his professional career at The First Boston Corporation
              as a financial analyst in the natural resource’s mergers and
              acquisitions group. Subsequently, he was employed as an associate
              at The Blackstone Group where he worked on private equity
              investments and merger advisory assignments. Mr. Pate holds a
              Juris Doctorate degree from the University of Chicago Law School
              and a Bachelor of Arts degree from Harvard College.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const transactions = [
  {
    logo: "/assets/transactions/novel-logo.png",
    title: "Novel Energy Solutions",
    date: "July 2024",
    description:
      "$130M corporate credit investment from a $40B AUM asset manager",
    link: "https://novelenergy.com",
  },
  {
    logo: "/assets/transactions/solar-stone-logo.jpg",
    title: "Solar Stone",
    date: "November 2024",
    description:
      "500 MW portfolio sale of utility-scale solar and storage projects",
    link: "https://www.solarstone.energy/",
  },
  {
    logo: "/assets/transactions/goodpeak-logo.jpg",
    title: "Goodpeak",
    date: "February 2025",
    description: "Growth Equity Investment",
    link: "https://goodpeak.com/",
  },
  {
    logo: "/assets/transactions/solunesco-logo.png",
    title: "Sol Unesco",
    date: "April 2025",
    description:
      "Interconnection support facility for a 550MW portfolio of utility-scale solar and storage project",
    link: "",
  },
];

const consulting = [
  {
    logo: "/assets/transactions/Orenda.png",
    title: "Orenda",
    description: "Northeast battery storage developer",
    link: "https://orendapower.com/",
  },
  {
    logo: "/assets/transactions/pedal.png",
    title: "Pedal Steel​",
    description: "'Heartland' utility-scale solar and storage developer​",
    link: "https://pedalsteelsolar.com/",
  },
  {
    logo: "/assets/transactions/headwater.jpg",
    title: "Headwater",
    description: "Utility-scale solar and storage developer​",
    link: "https://headwaterenergy.com/",
  },
  {
    logo: "/assets/transactions/acpower.png",
    title: "AC Power",
    description: "Northeast focused community solar developer",
    link: "https://www.acpowerllc.com/",
  },
];

function Transactions() {
  return (
    <main className="container">
      <section className="transactions-page">
        <div className="container">
          <h2 className="page-heading">Investment Banking Services</h2>
          <div className="transactions-list">
            {transactions.map((tx, index) => (
              <a
                href={tx.link}
                key={index}
                //  target="_blank"
                className="transaction-card-link"
              >
                <div className="transaction-card" key={index}>
                  {tx.logo && (
                    <img
                      src={tx.logo}
                      alt={`${tx.title} logo`}
                      className="transaction-logo"
                    />
                  )}
                  <h3 className="transaction-title">{tx.title}</h3>
                  <p className="transaction-date">{tx.date}</p>
                  <p className="transaction-desc">{tx.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="transactions-page">
        <div className="container">
          <h4 className="consulting-heading">
            Consulting Engagements (Previous)
          </h4>
          <div className="transactions-list">
            {consulting.map((tx, index) => (
              <a
                href={tx.link}
                key={index}
                //  target="_blank"
                className="transaction-card-link"
              >
                <div className="transaction-card" key={index}>
                  {tx.logo && (
                    <img
                      src={tx.logo}
                      alt={`${tx.title} logo`}
                      className="transaction-logo"
                    />
                  )}
                  <h3 className="transaction-title">{tx.title}</h3>
                  <p className="transaction-date">{tx.date}</p>
                  <p className="transaction-desc">{tx.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4e31fe5a-32ba-4226-ac1c-e2dedd41d395");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Confirmed Submission! We will reach out shortly");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-form">
      <h1 className="page-heading">Contact Us</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows={6} required></textarea>
        </label>
        <button className="btn" type="submit">
          Send
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
}

const Investor = () => {
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true); // Always show error
  };

  return (
    <div class="container">
      <div class="contact"> 
      <h2 className="page-heading">Welcome to the Investor Portal</h2>
      <div class="login-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username (email)"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {error && (
            <div className="error-message">Invalid username or password</div>
          )}
          <button type="submit" class="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/investor" element={<Investor />} />
      </Routes>
      <Footer />
    </Router>
  );
}
