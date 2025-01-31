import React from "react";
import { FaPhp, FaWordpress} from "react-icons/fa";
import { Helmet } from 'react-helmet-async';


const PHP = () => {
    return (
        <>
        <Helmet>
        <title>PHP Development Solutions - Rayon Web Solutions</title>
        <meta name="description" content="Expert PHP development solutions at Rayon Web Solutions. Build secure, scalable, and dynamic web applications tailored to your business needs." />
      </Helmet>
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />PHP Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our PHP Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaPhp size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">PHP Web Development</h5>
                            <p className="m-0">We understand your business needs and offer PHP web development services catered to your needs. We ensure to make your website look unique and amazing.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaWordpress size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">PHP Based CMS Development</h5>
                            <p className="m-0">With unmatched CMS or WordPress development services, we ensure that the final product delivered aligns with your business strategies and goals.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaPhp size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">PHP Consulting Services</h5>
                            <p className="m-0">We offer cost-efficient and end-to-end PHP consultation services globally aligned as per your project specifications and business verticals.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaPhp size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">PHP Support and Maintenance</h5>
                            <p className="m-0">We extend our support every time your business faces an issue and offer regular updates. Our experts review the existing codes and suggest solutions if there is room for improvement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default PHP