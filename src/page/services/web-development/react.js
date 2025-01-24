import React from "react";
import { FaReact } from "react-icons/fa";


const ReactService = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />React Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our React Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaReact size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">ReactJS Application Development</h5>
                            <p className="m-0">If you are looking forward to an app update with the latest tools and technologies, we offer ReactJS technology services that offer the best development solutions.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaReact size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">ReactJS Plug-in Development</h5>
                            <p className="m-0">React allows you to develop solutions for multiple platforms due to its versatile nature. Our proficient team crafts solutions with great responsive components and visuals.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaReact size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">ReactJS QA and Testing</h5>
                            <p className="m-0">we use the best tools and innovations in ReactJS. We deploy the best developers and testers who continue to improve your performance drastically.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaReact size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">ReactJS Support and Maintenance</h5>
                            <p className="m-0">ReactJS is capable to offer support and services that fulfill the client's needs. Our experienced team helps you maintain your web projects and apps.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReactService