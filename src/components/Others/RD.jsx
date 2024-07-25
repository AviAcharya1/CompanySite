// R&D.jsx
import React, { useState } from 'react';
import './RD.css';

const RD = () => {
  const [activeTab, setActiveTab] = useState('formulation');

  const tabs = {
    formulation: {
      title: 'Formulation Development',
      content: 'State-of-the-art laboratory facilities dedicated to product and process development. Our team of formulation scientists boasts extensive expertise in developing various dosage forms and delivery systems. We adhere to a meticulously crafted framework for product development and documentation, ensuring compliance with regulatory standards across diverse markets.'
    },
    analytical: {
      title: 'Analytical Development',
      content: 'Our analytical development team ensures precise and accurate testing methodologies for all our products.'
    },
    pkpd: {
      title: 'PKPD / CT',
      content: 'We conduct thorough pharmacokinetic and pharmacodynamic studies to optimize drug efficacy and safety.'
    },
    regulatory: {
      title: 'Regulatory Affairs',
      content: 'Our regulatory affairs team ensures compliance with global standards and facilitates smooth approval processes.'
    },
    qa: {
      title: 'Quality Assurance',
      content: 'We maintain rigorous quality control measures throughout our R&D process to ensure product excellence.'
    },
    ipr: {
      title: 'Intellectual Property Rights',
      content: 'Our dedicated IPR team works to protect our innovations and secure our competitive advantage in the market.'
    }
  };

  return (
    <div className="rd-container">
      <header className="rd-header">
        <h1>Research & Development</h1>
        <p>A sensible outlook toward product inception</p>
      </header>

      <section className="rd-stats">
        <div className="stat-item">
          <h2>160+</h2>
          <p>R&D Professionals</p>
        </div>
        <div className="stat-item">
          <h2>32</h2>
          <p>Patents</p>
        </div>
        <div className="stat-item">
          <h2>2464</h2>
          <p>Dossiers</p>
        </div>
      </section>

      <section className="rd-patent-portfolio">
        <h2>Robust patent portfolio through in-house innovations</h2>
        <div className="patent-grid">
          <div className="patent-item">
            <h3>32</h3>
            <p>Patents</p>
          </div>
          <div className="patent-item">
            <h3>310</h3>
            <p>Approved Dossiers</p>
          </div>
          <div className="patent-item">
            <h3>760</h3>
            <p>Filed Dossiers</p>
          </div>
          <div className="patent-item">
            <h3>1394</h3>
            <p>Dossiers under development</p>
          </div>
        </div>
      </section>

      <section className="rd-capabilities">
        <h2>Comprehensive capabilities</h2>
        <p>At Inventia, we boast a comprehensive set of capabilities, including expertise in impurity profiling and ICH stability studies, robust support for bioavailability/bioequivalence (BA/BE), and a dedicated focus on clinical studies.</p>
      </section>

      <section className="rd-technology">
        <h2>Proficient technology</h2>
        <p>Our proficiency extends across various technology platforms, encompassing controlled drug delivery, multiple-unit pellet system (MUPS), multi-layer tablets, modified release profiles, pH-independent sustained release, hot melt extrusion, melt-filled capsules, and taste-masking compositions.</p>
      </section>

      <section className="rd-journey">
        <h2>Steering you at every step of the R&D journey</h2>
        <div className="journey-tabs">
          {Object.keys(tabs).map(tab => (
            <button 
              key={tab} 
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabs[tab].title}
            </button>
          ))}
        </div>
        <div className="journey-content">
          <h3>{tabs[activeTab].title}</h3>
          <p>{tabs[activeTab].content}</p>
        </div>
      </section>

      <section className="rd-platform-technology">
        <h2>Following a conscientious approach to platform technology</h2>
        <div className="technology-grid">
          <div>Controlled drug delivery</div>
          <div>Multiple-unit pellets systems</div>
          <div>Gastro-retentive drugs</div>
          <div>Multi-layer tablet technology</div>
          <div>Hot-melt extrusion delivery</div>
        </div>
      </section>

      <section className="rd-dosage-forms">
        <h2>Catering to a gamut of dosage forms</h2>
        <div className="dosage-grid">
          <div>Immediate Release Tablet</div>
          <div>Modified Release Tablet</div>
          <div>Multiple Unit Particulate System</div>
          <div>Capsules</div>
        </div>
      </section>
    </div>
  );
};

export default RD;