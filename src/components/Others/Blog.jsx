import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
      date: "May 23, 2022",
      summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      link: "#"
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="blog-container">
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

      <section className="featured-post">
        <h2>Featured Post</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>By John Doe &nbsp;|&nbsp; May 23, 2022</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <a href="#" className="read-more">Read more</a>
      </section>

      <section className="blog-list">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <h3>{post.title}</h3>
            <p>By {post.author} &nbsp;|&nbsp; {post.date}</p>
            <p>{post.summary}</p>
            <a href={post.link} className="read-more">Read more</a>
          </div>
        ))}
      </section>

      <button className="load-more">Load more</button>

      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
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

export default Blog;
