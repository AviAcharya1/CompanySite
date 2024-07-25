// Manufacturing.jsx
import React from 'react';
import './Manufacturing.css';

const Manufacturing = () => {
  return (
    <div className="manufacturing-container">
      <header className="manufacturing-header">
        <h1>Manufacturing</h1>
        <p>Product scalability that exceeds global standards</p>
      </header>

      <section className="stats-section">
        <div className="stat-item">
          <h2>230k</h2>
          <p>sf. manufacturing facility</p>
        </div>
        <div className="stat-item">
          <h2>40</h2>
          <p>regulatory audits (since 2011)</p>
        </div>
        <div className="stat-item">
          <h2>15</h2>
          <p>customer audits (annually)</p>
        </div>
      </section>

      <section className="facilities-section">
        <h2>Mindfully building state-of-the-art facilities</h2>
        <p>Inventia's cutting-edge facility in Ambernath spans over 230,000 sq. ft., representing the perfect synergy of innovation and excellence. Our facility is tailored to specialize in both semi-finished and finished formulations, a testament to our commitment to superior quality and adaptability.</p>
      </section>

      <section className="systems-section">
        <h2>Our Systems</h2>
        <ul>
          <li>Manufacturing Execution System</li>
          <li>Building Management System</li>
          <li>Lab Info Management System</li>
          <li>Learning Management System</li>
          <li>Document Management System</li>
        </ul>
      </section>

      <section className="sap-section">
        <h2>SAP</h2>
        <ul>
          <li>Extensive SAP ERP modules straddling all major business processes - purchase, inventory, supply chain, and invoicing</li>
          <li>On SAP platform since 2009</li>
          <li>Moved to latest S/4 HANA in 2020</li>
        </ul>
      </section>

      <section className="capabilities-section">
        <h2>Manufacturing capacities that meet global demands</h2>
        <div className="capabilities-grid">
          <div className="capability-item">
            <h3>2.8 billion</h3>
            <p>tablets</p>
          </div>
          <div className="capability-item">
            <h3>1.4 billion</h3>
            <p>Capsules</p>
          </div>
          <div className="capability-item">
            <h3>2760 MT</h3>
            <p>tonnes of granules</p>
          </div>
          <div className="capability-item">
            <h3>360 MT</h3>
            <p>tonnes of pellets</p>
          </div>
        </div>
      </section>

      <section className="manufacturing-range">
        <h2>Housing a wide range of manufacturing capabilities</h2>
        <p>Boasting a diverse range of manufacturing capabilities, from single and bi-layer matrix tablets to orally dissolving tablets, HME, continuous granulation systems, taste-masking compositions, modified release products, enteric-coated formulations, pellets, and MUPS.</p>
        <div className="capabilities-grid">
          <div>Packaging & bottling</div>
          <div>Encapsulation</div>
          <div>Pelletization</div>
          <div>Granulation</div>
          <div>Compression</div>
        </div>
      </section>

      <section className="compliance-section">
        <p>With an impeccable record of compliance, Inventia's facility has completed over 40 regulatory audits from international authorities since 2011 and earning 'Zero' critical observations from the USFDA.</p>
      </section>
    </div>
  );
};

export default Manufacturing;