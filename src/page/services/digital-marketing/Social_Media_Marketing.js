import React from "react";
import { FaUsers } from "react-icons/fa";


const Social_Media_Marketing = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Social Media Marketing Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Social Media Marketing Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaUsers size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">High-Quality Content Creation</h5>
                            <p className="m-0">Content is at the core of our work. Our team creates high-quality, SEO-optimized content—blogs, case studies, videos, and infographics—that educates, informs, and engages your target audience.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaUsers size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">SEO-Driven Content</h5>
                            <p className="m-0">Our content marketing services focus on SEO best practices, creating keyword-optimized content that drives organic traffic and aligns with your target audience's search behavior.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaUsers size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Data-Driven Insights & Optimization</h5>
                            <p className="m-0">We track content performance, analyzing metrics like traffic, engagement, and conversions, to continuously refine and optimize your strategy for the best results.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaUsers size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Long-Term Success</h5>
                            <p className="m-0">Our content marketing strategies drive sustainable growth by consistently producing valuable content, refining tactics, and tracking results to keep your brand relevant and top-of-mind.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Social_Media_Marketing