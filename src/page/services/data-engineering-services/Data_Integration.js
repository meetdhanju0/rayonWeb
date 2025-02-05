import React from "react";
import { BsDatabaseFillAdd } from 'react-icons/bs';


const DataIntegration = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Data Integration Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Data Integration Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <BsDatabaseFillAdd size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Real-Time Data Integration</h5>
                            <p className="m-0">
                            We provide real-time data integration using event-driven architectures and technologies like Apache Kafka and AWS Kinesis, ensuring up-to-date information across all systems.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <BsDatabaseFillAdd size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Cloud Data Integration</h5>
                            <p className="m-0">We integrate data from cloud apps like Salesforce, Google Analytics, AWS, and Azure, helping you consolidate cloud and on-premise data for a complete view of your business.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <BsDatabaseFillAdd size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Real-Time Data Streaming</h5>
                            <p className="m-0">We offer real-time data streaming solutions with tools like Apache Kafka and AWS Kinesis, enabling timely insights and automated actions for IoT, and customer interactions.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <BsDatabaseFillAdd size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Security and Compliance</h5>
                            <p className="m-0">We ensure data integration complies with standards like GDPR, HIPAA, and SOC 2, implementing strong security measures to protect and secure your data throughout the process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataIntegration