import React from "react";
import { FaSearch } from "react-icons/fa";


const SEO = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />SEO Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our SEO Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaSearch size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Technical SEO Expertise</h5>
                            <p className="m-0">We optimize your website for search engines by improving site speed, mobile-friendliness, indexing, and schema markup, ensuring strong technical performance for better rankings.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaSearch size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Mobile Optimization</h5>
                            <p className="m-0">
                            We ensure your website is responsive and mobile-optimized, providing a great user experience and boosting your rankings in mobile search results.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaSearch size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Comprehensive SEO Strategy</h5>
                            <p className="m-0">We create a tailored SEO strategy focusing on both on-page (content, meta tags) and off-page (link building, social signals) to boost your website's ranking, traffic, and conversions.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaSearch size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Quality Content Creation</h5>
                            <p className="m-0">We create high-quality, SEO-friendly content that engages your audience, answers user queries, and incorporates relevant keywords to boost search engine rankings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SEO