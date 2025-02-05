import React from "react";
import { FaCogs } from "react-icons/fa";


const Devops = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Devops Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Devops Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaCogs size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Increased Automation</h5>
                            <p className="m-0">DevOps leverages automation tools and pipelines for repetitive tasks like testing, deployment, and monitoring. This improves consistency, reduces human error, and frees up your team to focus on innovation.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaCogs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Enhanced Security</h5>
                            <p className="m-0">With automated security testing and continuous monitoring, DevOps ensures that security is integrated into every stage of development. This results in more secure code and faster identification of vulnerabilities.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaCogs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Faster Time to Market</h5>
                            <p className="m-0">DevOps enables continuous integration (CI) and continuous delivery (CD), allowing your team to quickly push new features, improvements, and bug fixes into production.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaCogs size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Deployment and Support</h5>
                            <p className="m-0">Our team also offers ongoing support and maintenance, ensuring your DevOps pipeline remains efficient, scalable, and up-to-date with the latest industry practices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Devops