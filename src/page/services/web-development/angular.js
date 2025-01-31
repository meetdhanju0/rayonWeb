import React from "react";
import { FaVuejs } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';


const Angular = () => {
    return (
        <>
        <Helmet>
        <title>Angular Development Solutions - Rayon Web Solutions</title>
        <meta name="description" content="Expert Angular development solutions by Rayon Web Solutions. Build dynamic, feature-rich web applications for your business." />
      </Helmet>
        
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Angular Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Angular Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaVuejs size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Angular</h5>
                            <p className="m-0">Angular.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaVuejs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Angular</h5>
                            <p className="m-0">Angular.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaVuejs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Angular</h5>
                            <p className="m-0">Angular.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaVuejs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Angular</h5>
                            <p className="m-0">Angular.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Angular