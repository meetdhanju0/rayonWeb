import React from "react";
import { SiAwslambda } from 'react-icons/si';


const AwsLambda = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Aws Lambda Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Aws Lambda Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAwslambda size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Serverless Architecture</h5>
                            <p className="m-0">A
                            We design and implement serverless architectures using AWS Lambda, API Gateway, DynamoDB, and SNS to build scalable, fault-tolerant applications without managing servers.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAwslambda size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Integration with AWS Services</h5>
                            <p className="m-0">We integrate AWS services like Lambda, API Gateway, DynamoDB, and SNS to create seamless, scalable solutions.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAwslambda size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Event-Driven Application Development</h5>
                            <p className="m-0">
                            We help set up event triggers with AWS services like S3, DynamoDB, and API Gateway, enabling real-time responses for a seamless user experience.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAwslambda size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Performance Optimization</h5>
                            <p className="m-0">Using Amazon CloudWatch, we monitor and analyze Lambda functions, tracking metrics, logs, and error rates to ensure smooth, efficient performance with proactive issue resolution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AwsLambda