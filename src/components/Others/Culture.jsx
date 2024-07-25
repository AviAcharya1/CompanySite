// Culture.jsx
import React, { useState } from 'react';
import './Culture.css';

const Culture = () => {
  const [activeInitiative, setActiveInitiative] = useState(null);

  const initiatives = [
    { id: 'healthy-work', title: 'A healthy working style', description: 'Creating an environment that encourages curiosity, innovation, and continuous learning.' },
    { id: 'health-wellbeing', title: 'Health & well-being initiatives', description: 'Programs & activities that promote physical & mental balance through a nurturing supportive environment.' },
    { id: 'learning', title: 'L&D Initiatives', description: 'Providing resources and skills needed to excel in the ever-evolving industry trends and technologies.' },
    { id: 'research', title: 'R&R', description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been.' },
  ];

  const values = [
    { title: 'Result Focused', description: 'We provide our customers with unique solutions and focus every effort towards excellence, with clear objectives, measurable outcomes and a passion for achieving sustainable success.' },
    { title: 'Respect', description: 'Respect is our guiding principle. We foster an environment of trust, communication and mutual understanding – the foundations of a thriving work environment.' },
    { title: 'Innovation', description: 'Innovation is at the heart of our company. We encourage creative thinking and calculated risk-taking.' },
    { title: 'Integrity', description: 'Integrity is the cornerstone of our culture, guiding us to uphold ethical standards in all our actions and fostering a workplace of trust and transparency.' },
    { title: 'Collaboration', description: 'We cultivate a collaborative culture, encouraging cross-departmental teamwork and open communication towards achieving goals that drive the companys growth.' },
    { title: 'Commitment', description: 'Our commitment extends beyond profitability - it is a steadfast dedication to our mission of powering sensible pharma.' },
  ];

  return (
    <div className="culture-container">
      <header className="culture-header">
        <h1>
          <span className="highlight">We are Powering</span>
          <br />sensible pharma
        </h1>
        <p>At Inventia, we are a dynamic team that thrives on innovation, collaboration, and a shared passion for science and manufacturing. We take pride in our thoughtful and meticulous approach to research, development, and engagement. We are a dedicated group that values ownership, trust, results, and agility. Together, we are powering sensible pharma.</p>
      </header>

      <section className="people-first">
        <h2>CULTURE AND ETHOS AT INVENTIA</h2>
        <p>
          People are at the heart of everything we do, and at Inventia, we proudly embrace a <span className="highlight">People-First culture</span>. 
          This ethos underscores our commitment to prioritising the well-being and fulfilment of every individual of 
          every individual involved in our ecosystem.
        </p>
      </section>

      <section className="powering-inventians">
        <h2><span className="highlight">Powering</span> all Inventians</h2>
        <p>Our aim is to help everyone at Inventia reach their full potential. It's not just what we do but how we do it that makes the ultimate difference. We empower through:</p>
        <div className="initiatives-grid">
          {initiatives.map((initiative) => (
            <div 
              key={initiative.id} 
              className={`initiative-item ${activeInitiative === initiative.id ? 'active' : ''}`}
              onClick={() => setActiveInitiative(initiative.id === activeInitiative ? null : initiative.id)}
            >
              <h3>{initiative.title}</h3>
              {activeInitiative === initiative.id && <p>{initiative.description}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="life-at-inventia">
        <h2>Life at Inventia</h2>
        <p>We believe in cultivating a culture of continuous learning and improvement. By nurturing our talent and offering opportunities for growth, we empower our employees, supporting their career advancement and personal development.</p>
        <div className="team-photos">
          {/* Add team photos here */}
        </div>
      </section>

      <section className="our-values">
        <h2>Our values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-item">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="join-us">
        <h2>Be a part of the journey.</h2>
        <h3>Join a team of <span className="highlight">passionate individuals</span>.</h3>
        <button className="explore-careers">Explore careers</button>
      </section>
    </div>
  );
};

export default Culture;