// PrivacyPolicy.jsx
import React, { useState } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'personal-info', title: 'Personal Information We Collect' },
    { id: 'use-info', title: 'How We Use Your Personal Information' },
    { id: 'sharing-info', title: 'Sharing Your Personal Information' },
    { id: 'storage-processing', title: 'Where We Store And Process Personal Data' },
    { id: 'data-security', title: 'How We Secure Personal Data' },
    { id: 'children', title: 'Children' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'changes', title: 'Changes' },
  ];

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? '' : sectionId);
  };

  return (
    <div className="privacy-policy-container">
      <header className="privacy-header">
        <div className="logo">Inventia</div>
        <nav>
          <ul>
            <li>Offerings</li>
            <li>Company</li>
            <li>Product Finder</li>
            <li>Blogs & News</li>
            <li>Contact us</li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Privacy Policy</h1>

        <section className="policy-intro">
          <p>Inventia Healthcare Limited and its subsidiaries or associates (henceforth referred as 'IHL') is committed to protecting the privacy and security of your information. The protection of your privacy in the processing of your personal data is an important concern to which we pay special attention during our business processes. We process personal data collected during visits to our websites according to the applicable provisions of law.</p>
          <p>This privacy policy describes the information about you, that IHL collects through this website. It also specifies as to how that information is used, maintained, protected and how you can update it. It also applies to all personal data received by IHL from the European Economic Area ("EEA") in any format, including electronic or paper.</p>
        </section>

        <section className="policy-sections">
          {sections.map((section) => (
            <div key={section.id} className="policy-section">
              <h2 onClick={() => toggleSection(section.id)}>{section.title}</h2>
              {activeSection === section.id && (
                <div className="section-content">
                  {/* Add content for each section here */}
                  <p>Content for {section.title} goes here.</p>
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at dpo@inventiahealthcare.com or by mail using the details provided below:</p>
          <address>
            Inventia Healthcare Ltd.<br />
            Unit 703-704, 7th Floor, Solaris One Premises Co-operative Society Limited,<br />
            N. S. Phadke Marg, Andheri (East),<br />
            Mumbai - 400069, Maharashtra, India.
          </address>
        </section>
      </main>

      <footer>
        <div className="footer-grid">
          <div>
            <h3>Contact</h3>
            <p>703/704, Hubtown Solaris, Professor NS Phadke Rd, Andheri (E), Mumbai, Maharashtra – 400069</p>
            <p>info@inventiahealthcare.com</p>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>Research & Development</li>
              <li>Manufacturing</li>
              <li>Business Development</li>
            </ul>
          </div>
          <div>
            <h3>About Us</h3>
            <ul>
              <li>Meet the team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3>Media Center</h3>
            <ul>
              <li>Blogs & News</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>1985-2023. All Rights Reserved.</p>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;