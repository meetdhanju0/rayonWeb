import React from "react";
import { GrIntegration } from 'react-icons/gr'; 


const Devops = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />CI CD Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our CI CD Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <GrIntegration size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Faster Development Cycles</h5>
                            <p className="m-0">With continuous integration, every code commit is automatically tested, helping you detect bugs early and reduce time spent on manual testing and debugging.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <GrIntegration size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Improved Software Quality</h5>
                            <p className="m-0">CI/CD ensures that your application is consistently tested for bugs, and security vulnerabilities. This reduces the chances of bugs making it into production and leads to higher-quality releases.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <GrIntegration size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Reduced Risk</h5>
                            <p className="m-0">CI/CD minimizes the risk of deploying bugs or breaking changes into production. Each release is small, making it easier to identify and fix issues before they affect end users.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <GrIntegration size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Scalable Infrastructure</h5>
                            <p className="m-0">Your development and deployment processes can scale with your application, whether you're hosting on cloud platforms like AWS, Azure, or Google Cloud.   </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Devops