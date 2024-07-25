import React from 'react';
import './About.css';

const teamMembers = [
  { name: 'Janak Shah', position: 'Chairman & MD', imgSrc: '/path/to/image.png' },
  { name: 'Naresh Shah', position: 'Chief Operating Officer', imgSrc: '/path/to/image.png' },
  { name: 'Dr. Ankur Shah', position: 'Whole-time director', imgSrc: '/path/to/image.png' },
  { name: 'Hemendra Shah', position: 'Chief Financial Officer', imgSrc: '/path/to/image.png' },
  { name: 'Maya Shah', position: 'Whole-time Director', imgSrc: '/path/to/image.png' },
];

const About = () => {
  return (
    <div className="about-container">
      <section className="intro">
        <h2>Making quality healthcare accessible globally</h2>
        <p>Inventia is a global Pharma development and manufacturing company, headquartered in Mumbai. Partnering with Pharma companies & distributors globally, we research, develop, manufacture & distribute value-added OSD forms, injectables & nutraceuticals. Following a sensible, people-first and responsible mindset towards innovation in drug delivery, our purpose at Inventia is crystal clear. We’re here to make quality healthcare accessible globally, by simplifying how medicines are made.</p>
      </section>

      <section className="management-team">
        <h2>Management Team</h2>
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

      <section className="culture">
        <h2>Our Culture</h2>
        <ul>
          <li>Treat everyone with dignity & respect</li>
          <li>Think about the customer at every step</li>
          <li>Don’t be afraid to fail but learn from it</li>
          <li>Put in the work - there are no shortcuts</li>
          <li>Imbibe a culture of quality</li>
          <li>Innovation comes with experimentation</li>
          <li>Feedback is important, give and receive</li>
          <li>Have fun while doing serious work</li>
        </ul>
      </section>

      <section className="journey">
        <h2>Our Journey</h2>
        <ul>
          <li>1985: Inventia was incorporated as a private limited company</li>
          <li>1985 – 2004: Established in-house product selection, development and manufacturing facility at Thane, Mumbai</li>
          <li>1985 – 2004: Made entry into SEA, SAARC and LATAM regions</li>
          <li>2007 – 2013: Filed 13 ANDAs in US with first product launched in 2013</li>
          <li>2007: Established Ambernath, Mumbai manufacturing facility</li>
          <li>2011 – 2014: Ambernath facility received approvals from USFDA, Korean FDA, UKMHRA and ANVISA</li>
          <li>2015 – 2019: R&D focus on extending US products to new geographies</li>
          <li>2015 – 2019: Onboarded several customers across emerging markets including LatAm and SEA</li>
          <li>2020 – current: Onboarded several customers across emerging markets including LatAm and SEA</li>
          <li>2020 – current: Onboarded several customers with enhanced focus on emerging markets</li>
        </ul>
      </section>

      <section className="join-us">
        <h2>Join Us</h2>
        <p>Be a part of a dynamic and rewarding culture that is making a positive impact on communities worldwide. At Inventia, we believe in cutting-edge research and deep innovation to holistically power sensible pharma. As part of our team, you will have the opportunity to work alongside the brightest and most compassionate minds in pharma to create solutions that will change the lives of millions globally.</p>
        <a href="#explore-careers">Explore careers</a>
      </section>

      
    </div>
  );
};

export default About;
