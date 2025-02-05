import React from "react";
import { FaCloud } from "react-icons/fa";


const CloudAutomation = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Cloud Automation Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Cloud Automation Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaCloud size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Increased Efficiency</h5>
                            <p className="m-0">Cloud automation eliminates manual processes, reducing the time required to provision, configure, and deploy applications. This allows your team to focus on innovation boosting overall productivity.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaCloud size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Scalability</h5>
                            <p className="m-0">Automation ensures that your cloud environment can easily scale up or down based on your needs. Whether you're experiencing a traffic spike or need to reduce resources during off-peak times.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaCloud size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Faster Deployment</h5>
                            <p className="m-0">Cloud automation accelerates the software delivery process by automating deployment workflows, from development to production.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <FaCloud size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Improved Security</h5>
                            <p className="m-0">Automated security practices, such as automated patching, continuous monitoring, and vulnerability scanning, ensure that your cloud environments remain secure and compliant.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CloudAutomation