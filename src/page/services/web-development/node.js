


import React from "react";
import { FaNodeJs } from "react-icons/fa";


const Node = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Node Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Node Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaNodeJs size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Node.js Web Development.</h5>
                            <p className="m-0">With the Node.js development framework, you can simplify the web development process. With the web development framework, you can build fast and secure websites.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaNodeJs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">API and Migration</h5>
                            <p className="m-0">If you think your existing solution is no longer fulfilling your needs, you can migrate to Node.js with us. Our node.js developers help migrate your existing software and take care of all your needs.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaNodeJs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Front and Back-end Development</h5>
                            <p className="m-0">We use the latest frameworks including, MEAN, node.js, we help you boost the functioning of both the front-end and back-end apps.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaNodeJs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Support and Maintenance</h5>
                            <p className="m-0">We are a leading Node.js development company that offers support, maintenance services, and various performance metrics. We ensure to keep your mobile app web app up-to-date that responds to all your needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Node