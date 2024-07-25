import React from 'react';
import './OurTeam.css';

const teamMembers = [
  { name: 'Naresh Shah', position: 'COO', imgSrc: '/path/to/image.png' },
  { name: 'Janak Shah', position: 'Chairman & MD', imgSrc: '/path/to/image.png' },
  { name: 'Nayan Joshi', position: 'Director - Technical Services (Non-board)', imgSrc: '/path/to/image.png' },
  { name: 'Maya Shah', position: 'Whole-time Director', imgSrc: '/path/to/image.png' },
  { name: 'Dr. Ankur Shah', position: 'Whole-time Director', imgSrc: '/path/to/image.png' },
  { name: 'Vishal Shah', position: 'Whole-time Director', imgSrc: '/path/to/image.png' },
  { name: 'Vaibhavi Shah', position: 'Director - Research & Development (Non-Board)', imgSrc: '/path/to/image.png' },
  { name: 'Rajat Shah', position: 'Director', imgSrc: '/path/to/image.png' }
];

const boardMembers = [
  { name: 'Janak Shah', position: 'Chairman & MD', imgSrc: '/path/to/image.png' },
  { name: 'Maya Shah', position: 'Whole-time Director', imgSrc: '/path/to/image.png' },
  { name: 'Dr. Ankur Shah', position: 'Whole-time Director', imgSrc: '/path/to/image.png' },
  { name: 'Vishal Shah', position: 'Whole-time Director', imgSrc: '/path/to/image.png' },
  { name: 'Sumit Gupta', position: 'Nominee Director', imgSrc: '/path/to/image.png' },
  { name: 'Srinivas Chidambaram', position: 'Nominee Director', imgSrc: '/path/to/image.png' },
  { name: 'Ved Jain', position: 'Independent Director', imgSrc: '/path/to/image.png' },
  { name: 'Nagesh Pinge', position: 'Independent Director', imgSrc: '/path/to/image.png' },
  { name: 'Nipun Mehta', position: 'Independent Director', imgSrc: '/path/to/image.png' }
];

const About = () => {
  return (
    <div className="about-container">
      <header className="header">
        <h1>Inventia</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#offerings">Offerings</a></li>
            <li><a href="#company">Company</a></li>
            <li><a href="#product-finder">Product Finder</a></li>
            <li><a href="#blogs-news">Blogs & News</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </nav>
      </header>
      
      <section className="intro">
        <h2>Collaboration. Trust. Balance. Flexibility.</h2>
        <p>At Inventia, we value diversity, creativity, and collaboration at the workplace. Our leaders and teams believe in creating a supportive and inclusive work environment that allows people to not just work, but thrive.</p>
      </section>

      <section className="management-team">
        <h2>Management Team</h2>
        <p>Our team of skilled, seasoned professionals drive innovation and growth at Inventia on a daily basis, all while working towards our long-term vision of powering sensible pharma.</p>
        <div className="grid-container">
          {teamMembers.map((member, index) => (
            <div className="grid-item" key={index}>
              <img src={member.imgSrc} alt={member.name} />
              <div className="overlay">
                <div className="text">{member.name}<br />{member.position}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="board-of-directors">
        <h2>Board of Directors</h2>
        <div className="filter-buttons">
          <button>All</button>
          <button>Managing</button>
          <button>Whole-time</button>
          <button>Nominee</button>
          <button>Independent</button>
        </div>
        <div className="grid-container">
          {boardMembers.map((member, index) => (
            <div className="grid-item" key={index}>
              <img src={member.imgSrc} alt={member.name} />
              <div className="overlay">
                <div className="text">{member.name}<br />{member.position}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>Contact</p>
          <p>Company</p>
          <p>About Us</p>
          <p>Media Center</p>
          <p>703/704, Hubtown Solaris, Professor NS Phadke Rd, Andheri (E), Mumbai, Maharashtra – 400069</p>
          <p>Research & Development</p>
          <p>Meet the team</p>
          <p>Blogs & News</p>
          <p>Manufacturing</p>
          <p>Careers</p>
          <p>In the news</p>
          <p>info@inventiahealthcare.com</p>
          <p>Business Development</p>
        </div>
        <div className="footer-bottom">
          <p>1985-2023. All Rights Reserved. Terms of Service Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
