import { Link } from 'react-router-dom';

const CareerContent = () => {
    return (
        <section className="py-5">
            <div className="container my-5 py-5 px-lg-5">
                {/* Section Header */}
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className="section-title text-secondary">Career Opportunities</p>
                        <p className="mb-5">Join our team and take your career to the next level!</p>
                    </div>
                </div>
                
                {/* Career Listings */}
                <div className="row g-4">
                    {/* Software Engineer */}
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <h5 className="mb-3 main-cl">Software Engineer</h5>
                            <p className="m-0">We’re looking for a skilled software engineer to join our team. If you have experience with React, Node.js, and MongoDB, we'd love to hear from you!</p>
                        </div>
                        <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                    </div>
                    
                    {/* UI/UX Designer */}
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <h5 className="mb-3 main-cl">UI/UX Designer</h5>
                            <p className="m-0">We’re seeking a talented UI/UX designer to create visually stunning and user-friendly interfaces. If you have experience with Sketch, Figma, and Adobe Creative Suite, we'd love to hear from you!</p>
                        </div>
                        <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                    </div>

                    {/* SEO & Backlinks */}
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <h5 className="mb-3 main-cl">SEO & Backlinks</h5>
                            <p className="m-0">SEO (Search Engine Optimization) involves optimizing websites to improve search engine rankings, while backlinks are links from other sites that enhance SEO authority.</p>
                        </div>
                        <Link to="/contact" className="btn btn-primary">Apply Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CareerContent;
