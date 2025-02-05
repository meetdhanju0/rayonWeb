import React from "react";
import { SiAmazons3 } from 'react-icons/si';


const AwsS3 = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Aws S3 Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Aws S3 Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAmazons3 size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Data Migration to AWS S3</h5>
                            <p className="m-0">we make the process seamless and efficient. We’ll handle everything from data transfer to optimization, ensuring minimal downtime during the migration.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAmazons3 size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Performance Optimization</h5>
                            <p className="m-0"> We help you optimize storage performance by configuring data retrieval policies and setting up cloud performance metrics to ensure you're getting the most out of your storage.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAmazons3 size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Data Archiving and Backup Solutions</h5>
                            <p className="m-0">With S3 Glacier and S3 Glacier Deep Archive, we provide affordable and scalable archival solutions for long-term data storage.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <SiAmazons3 size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Data Sharing and Collaboration</h5>
                            <p className="m-0">we help you set up secure data sharing and collaboration solutions using AWS S3's presigned URLs, S3 buckets, and cross-region replication features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AwsS3