import React from "react";
import { FaFileAlt } from "react-icons/fa";


const Content_Marketing = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Content Marketing Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Content Marketing Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaFileAlt size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Content Distribution & Promotion</h5>
                            <p className="m-0">We create a content distribution plan across social media, email, paid ads, and influencer partnerships to ensure your content reaches the right audience for maximum exposure.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaFileAlt size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">SEO-Optimized Content</h5>
                            <p className="m-0">We create engaging, SEO-friendly content by conducting keyword research, optimizing on-page elements, and following best practices to improve search engine rankings.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaFileAlt size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Analytics & Reporting</h5>
                            <p className="m-0">We use data-driven content marketing, tracking performance across platforms and optimizing your strategy based on key metrics like traffic, engagement, and conversions.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaFileAlt size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Conversion Optimization</h5>
                            <p className="m-0">Every piece of content we create is strategically designed to drive conversions, whether it's generating leads, increasing sales, or encouraging sign-ups for tangible results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content_Marketing