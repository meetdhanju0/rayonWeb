import React from "react";
import { SiAntdesign } from 'react-icons/si';


const UIUX = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />UI UX Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our UI UX Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAntdesign size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Wireframing & Prototyping</h5>
                            <p className="m-0">We design wireframes and interactive prototypes based on research, helping you visualize the layout, structure, and functionality before development begins.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAntdesign size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">UI Design & Visuals</h5>
                            <p className="m-0">After wireframe validation, our UI team creates high-fidelity designs that reflect the final product's look and feel, ensuring visual appeal and brand alignment.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAntdesign size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Discovery & Research</h5>
                            <p className="m-0">We start by understanding your business goals, target audience, and user challenges through research, competitor analysis, and stakeholder interviews to guide the design direction.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAntdesign size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Usability Testing & Feedback</h5>
                            <p className="m-0">
                            We conduct usability testing with real users to identify issues and refine the design, ensuring a seamless user experience based on their feedback.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UIUX