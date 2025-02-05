import React from "react";
import { SiAmazonec2 } from 'react-icons/si';


const AwsEc2 = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Aws Ec2 Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Aws Ec2 Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAmazonec2 size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Cost Optimization</h5>
                            <p className="m-0">We help you identify the most cost-effective EC2 instance options, including Reserved Instances for long-term use or Spot Instances for short-term, highly flexible workloads.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAmazonec2 size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Security and Compliance Management</h5>
                            <p className="m-0">We implement robust security practices to protect your EC2 instances, including VPC setup, Security Groups, IAM roles, and data encryption.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAmazonec2 size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Backup and Disaster Recovery</h5>
                            <p className="m-0">We help you implement automated backup solutions using Amazon EBS snapshots and Amazon S3 for data storage.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAmazonec2 size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Migration to AWS EC2</h5>
                            <p className="m-0">we help streamline the migration process to EC2. Our team ensures minimal disruption and downtime during the migration and helps you achieve a smooth transition to AWS.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AwsEc2