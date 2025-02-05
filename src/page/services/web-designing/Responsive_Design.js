import React from "react";
import { DiResponsive } from 'react-icons/di';


const Responsive = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Responsive Design Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Responsive Design Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <DiResponsive size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Wireframing and Prototyping</h5>
                            <p className="m-0">We create wireframes and prototypes to map the user journey, refine the layout, and prepare for development across all screen sizes.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <DiResponsive size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Mobile-First Design Implementation</h5>
                            <p className="m-0">Our designers start with mobile screens, prioritizing usability, then progressively enhance the design for larger screens like tablets and desktops.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <DiResponsive size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Development and Testing</h5>
                            <p className="m-0">Once the design is finalized, our development team builds a responsive website using HTML, CSS, and JavaScript, testing it across devices and browsers for a consistent experience.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <DiResponsive size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Launch and Ongoing Optimization</h5>
                            <p className="m-0">After launch, we monitor your website's performance, making adjustments and optimizations as needed to maintain responsiveness and provide regular updates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Responsive