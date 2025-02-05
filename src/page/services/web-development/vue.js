import React from "react";
import { FaVuejs } from "react-icons/fa";

const Vue = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Vue Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Vue Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaVuejs size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Vue.js Development</h5>
                            <p className="m-0">Using Vue’s reactive data-binding and component-based structure, we develop high-quality applications that are both scalable and performant.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaVuejs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Real-Time Applications</h5>
                            <p className="m-0">From live chat systems to collaborative tools, Vue.js allows us to build real-time, dynamic applications that keep users engaged with instant updates.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaVuejs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Reactivity System</h5>
                            <p className="m-0">Vue’s reactivity system is one of its standout features. It automatically tracks changes in the data and updates the DOM accordingly, which results in a dynamic user experience.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaVuejs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Deployment and Ongoing Support</h5>
                            <p className="m-0">We also provide post-launch support, including updates, bug fixes, and scaling as needed to meet your business growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Vue