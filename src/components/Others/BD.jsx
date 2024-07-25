// BD.jsx
import React, { useState } from 'react';
import './BD.css';

const BD = () => {
  const [activeTab, setActiveTab] = useState('flexible');

  const teamMembers = [
    { name: 'Dr. Ankur Shah', title: 'Whole-time Director', image: 'path_to_image1.jpg' },
    { name: 'Bhooma Raghavan', title: 'Senior Group Manager, API Evaluation & IPR', image: 'path_to_image2.jpg' },
    { name: 'Kailash Sherkar', title: 'Head, Alliance Management', image: 'path_to_image3.jpg' },
    { name: 'Merlyn Deshpande', title: 'Head, Supply Chain', image: 'path_to_image4.jpg' },
  ];

  const products = [
    { name: 'Metformin®', description: 'Metformin HCl, 500mg', therapeutic: 'Central Nervous System', form: 'Semi-finished', dosage: 'SR + Glimepiride 1/2mg Tablets' },
    // Add more products as needed
  ];

  return (
    <div className="bd-container">
      <header className="bd-header">
        <h1>Business Development</h1>
        <h2>Conscientiously forging end-to-end partnerships</h2>
        <p>People are at the heart of everything we do. Through our tailored business development approach, we foster close collaboration with our partners. Our dedicated teams work closely with them to identify and fill gaps in their product portfolio, ensuring mutual growth and success.</p>
      </header>

      <section className="bd-stats">
        <div className="stat-item">
          <h3>100+</h3>
          <p>partners</p>
        </div>
        <div className="stat-item">
          <h3>45</h3>
          <p>countries</p>
        </div>
        <div className="stat-item">
          <h3>2464</h3>
          <p>dossier</p>
        </div>
      </section>

      <section className="bd-solutions">
        <h2>Flexible business solutions that meet your unique needs</h2>
        <div className="tab-container">
          <button className={activeTab === 'flexible' ? 'active' : ''} onClick={() => setActiveTab('flexible')}>Flexible Business Model</button>
          <button className={activeTab === 'region' ? 'active' : ''} onClick={() => setActiveTab('region')}>Region Specific Focus Team</button>
          <button className={activeTab === 'partner' ? 'active' : ''} onClick={() => setActiveTab('partner')}>Partner Specific Initiative</button>
        </div>
        <div className="tab-content">
          {activeTab === 'flexible' && (
            <p>Maximise business opportunities through multi-pronged approach. Our business solutions are meticulously crafted, adaptable, and offered in a variety of formats to guarantee optimal outcomes for our partners.</p>
          )}
          {activeTab === 'region' && (
            <p>Well structured team (by key regions) ensuring regular contact with customers to facilitate business development, including early identification of product demand.</p>
          )}
          {activeTab === 'partner' && (
            <p>Partner owns the MA: Inventia manufactures the product and the partner's MA is valid only for supply from Inventia's manufacturing facility.</p>
          )}
        </div>
      </section>

      <section className="bd-advantage">
        <h2>The Inventia advantage</h2>
        <div className="advantage-grid">
          <div className="advantage-item">Targeting structurally attractive, large and growing markets</div>
          <div className="advantage-item">Well diversified across markets, products and customers</div>
          <div className="advantage-item">Deeply entrenched with major customers that enjoy leadership in key molecules in the respective markets.</div>
          <div className="advantage-item">Proven product development capabilities with strength in value-added formats resulting in IP backed product portfolio</div>
        </div>
      </section>

      <section className="bd-facility">
        <h2>Best in class manufacturing facility</h2>
        <p>Our facility is globally accredited, technologically-backed and fully compliant with all international pharmaceutical regulatory standards.</p>
        <div className="accreditations-grid">
          <div>WHO-GMP</div>
          <div>US Food & Drug Administration</div>
          <div>Columbia National Food & Drug Surveillance Institute</div>
          <div>FMHACA Ethiopia Food, Medicine & Health</div>
          <div>Ministry of Health Ukraine</div>
          <div>Medicines & Healthcare Products Regulatory Agency, UK</div>
          <div>Korean Food & Drug Administration</div>
          <div>Jordan Food & Drug Administration</div>
        </div>
      </section>

      <section className="bd-team">
        <h2>Meet our seasoned team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          ))}
        </div>
        <button className="talk-to-expert">Talk to an expert</button>
      </section>

      <section className="bd-products">
        <h2>Take a look at our product pipeline to see our latest innovations</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-item">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Therapeutic: {product.therapeutic}</p>
              <p>Form: {product.form}</p>
              <p>Dosage type: {product.dosage}</p>
            </div>
          ))}
        </div>
        <button className="explore-products">Explore all products</button>
      </section>

      <section className="bd-cta">
        <h2>EXPLORE OUR MANUFACTURING OFFERING</h2>
        <p>What does scalable manufacturing need? A global team to make the product live.</p>
        <button className="learn-more">Learn more</button>
      </section>
    </div>
  );
};

export default BD;