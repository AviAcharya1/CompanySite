// Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <main>
        <section className="hero">
          <h1>Powering sensible pharma</h1>
          <p>Inventia is powering sensible pharma and advancing pharmaceutical excellence for over 35 years by strategically utilising cutting-edge technologies. Our robust global capabilities, combined with a deep understanding of regional nuances, ensure that we provide access to high-quality healthcare across the globe.</p>
          <button className="cta-button">Learn more</button>
        </section>

        <section className="press-release">
          <h2>Press Release</h2>
          <p>We're thrilled to represent our Injectables Team at #CPHIWorldwide 2023!</p>
        </section>

        <section className="approach">
          <h2>A balanced approach to power your growth</h2>
          <div className="approach-grid">
            <div className="approach-item">
              <h3>Consistent collaboration</h3>
              <p>Flexible business models to nurture and grow your product portfolio in a balanced and calibrated approach</p>
            </div>
            <div className="approach-item">
              <h3>Extensive global access</h3>
              <p>that can easily adapt to your needs with minimal turnaround</p>
            </div>
            <div className="approach-item">
              <h3>Expert R&D and IPR teams</h3>
              <p>with a collective experience of over 200 years to help you gain a strategic advantage</p>
            </div>
          </div>
        </section>

        <section className="solutions">
          <h2>Consciously collaborative, end-to-end solutions</h2>
          <p>We purposefully empower you through every stage of R&D, manufacturing, and business development, making your product's life cycle our utmost priority.</p>
          <div className="solutions-grid">
            <div className="solution-item">
              <h3>01. Research & Development</h3>
              <p>Holistically managing your product lifecycle</p>
              <a href="#rd">Learn more</a>
            </div>
            <div className="solution-item">
              <h3>02. Manufacturing</h3>
              <p>The gold standard</p>
              <a href="#manufacturing">Learn more</a>
            </div>
            <div className="solution-item">
              <h3>03. Business Development</h3>
              <p>People-centric at heart</p>
              <a href="#bd">Learn more</a>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="stat-item">
            <h3>45</h3>
            <p>Countries</p>
          </div>
          <div className="stat-item">
            <h3>24</h3>
            <p>regulatory approvals</p>
          </div>
          <div className="stat-item">
            <h3>100+</h3>
            <p>Partners</p>
          </div>
        </section>

        <section className="product-finder">
          <h2>Discover the right product from our product finder feature</h2>
          <p>Use our intuitive search tool to find the product of interest by Therapeutic category, API Type & Formulation. Immediately receive the information in your inbox for offline use.</p>
          <button className="cta-button">Explore our product portfolio</button>
        </section>

        <section className="team">
          <h2>Meet your new team</h2>
          <div className="team-grid">
            {/* Add team member components here */}
          </div>
          <button className="cta-button">JOIN US</button>
          <p>We're talented innovators harnessing the power of science to fuel explosive growth.</p>
          <a href="#culture">Learn about our culture</a>
        </section>
      </main>
    </div>
  );
};

export default Home;