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
                            <h5 className="mb-3 main-cl">SEO</h5>
                            <p className="m-0">SEO.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaSearch size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">SEO</h5>
                            <p className="m-0">SEO.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaSearch size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">SEO</h5>
                            <p className="m-0">SEO.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaSearch size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">SEO</h5>
                            <p className="m-0">SEO.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SEO