import React from "react";
import { SiWireshark } from 'react-icons/si';


const WireFraming = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Wire Framing Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Wire Framing Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiWireshark size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Website Wireframing</h5>
                            <p className="m-0">
                            We design wireframes that prioritize usability, accessibility, and clear content structure, ensuring a seamless experience for e-commerce, corporate, or content-driven websites.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiWireshark size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Mobile App Wireframing</h5>
                            <p className="m-0">We design mobile app wireframes optimized for small screens and touch interactions, prioritizing ease of navigation and intuitive experiences for iOS and Android.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiWireshark size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">E-Commerce Wireframing</h5>
                            <p className="m-0">We design e-commerce wireframes that ensure a smooth, frictionless journey from product discovery to checkout, prioritizing conversions and customer satisfaction.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiWireshark size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Custom Software Wireframing</h5>
                            <p className="m-0">We create interactive prototypes from wireframes, allowing you to test and validate design concepts before development, offering a realistic preview of the final product.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WireFraming