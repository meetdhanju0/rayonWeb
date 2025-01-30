import React, { Suspense } from "react";
import Image from "rc-image";

// Loader component
const Loader = () => (
  <div className="loader text-center">
    <Image src="/loading.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
);

const Training = () => {
  return (
    <Suspense fallback={<Loader />}>
      <section className="hero-section py-5 bg-light">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row text-center">
            <div className="col-lg-12">
              <h1 className="display-4 mb-5 main-cl">Unlock Your Potential with Rayon Web's Training Programs</h1>
              <p className="lead hadding-p">Learn industry-leading skills that can transform your career with expert-led training sessions.</p>
              <button onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })} className="btn orange-cl rounded-pill mt-4">Explore Our Programs</button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section py-5">
        <div className="container text-center">
          <h2 className="h4 mb-3 main-cl">About Our Training Program</h2>
          <p className="">
            Rayon Web offers a comprehensive range of training programs designed for individuals and businesses to improve their skills in web development, SEO, digital marketing, and more. Our courses are taught by industry experts and include hands-on projects.
          </p>
        </div>
      </section>

      <section id="programs" className="programs-section py-5">
        <div className="container">
          <h2 className="text-center h3 mb-3 main-cl">Our Training Programs</h2>
          <div className="row g-4">
            {/* Full Stack Development */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="program-card bg-white rounded shadow-lg p-4">
                <h5 className="main-cl">Full Stack Development</h5>
                <p>Become a full-stack developer by mastering both front-end and back-end technologies. Learn React, Node.js, MongoDB, Express, and more in this comprehensive course.</p>
              </div>
            </div>

            {/* Frontend Development */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="program-card bg-white rounded shadow-lg p-4">
                <h5 className="main-cl">Frontend Development</h5>
                <p>Focus on building interactive user interfaces with HTML, CSS, JavaScript, and frameworks like React and Angular. Perfect for those passionate about creating beautiful and functional websites.</p>
              </div>
            </div>

            {/* Backend Development */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="program-card bg-white rounded shadow-lg p-4">
                <h5 className="main-cl">Backend Development</h5>
                <p>Learn to create robust back-end systems using Node.js, Express, and databases like MongoDB and SQL. Ideal for those who want to build the server-side architecture of web applications.</p>
              </div>
            </div>

            {/* More Programs */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="program-card bg-white rounded shadow-lg p-4">
                <h5 className="main-cl">Graphics Design</h5>
                <p>Learn the art of visual design using tools like Photoshop, Illustrator, and Figma. Master the principles of design and create stunning graphics for websites, logos, and branding.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="program-card bg-white rounded shadow-lg p-4">
                <h5 className="main-cl">DevOps Engineering</h5>
                <p>Gain expertise in automating the software development lifecycle with tools like Docker, Kubernetes, Jenkins, and AWS. This course prepares you for roles in infrastructure management and continuous integration.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="program-card bg-white rounded shadow-lg p-4">
                <h5 className="main-cl">Digital Marketing</h5>
                <p>Learn the fundamentals of digital marketing, including SEO, social media marketing, Google Ads, and content marketing to boost online sales and visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 main-cl">What Our Students Say</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-card bg-white rounded shadow-lg p-4">
                <p>"The Web Development course was amazing! I learned so much in just 8 weeks."</p>
                <p>- Jane Doe</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-card bg-white rounded shadow-lg p-4">
                <p>"I never thought I could learn SEO so quickly. This program changed my career."</p>
                <p>- John Smith</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section py-5">
        <div className="container text-center">
          <h2 className="mb-4 main-cl">Have Questions or Interested in Our Programs?</h2>
          <p className="lead text-muted">If you're interested or have any questions, feel free to reach out to us at <a href="mailto:info@rayonweb.com">info@rayonweb.com</a> or use our Contact Us page.</p>
          <a href="/contact" className="btn orange-cl rounded-pill mt-3">Go to Contact Us Page</a>
        </div>
      </section>
    </Suspense>
  );
};

export default Training;
