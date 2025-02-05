import React from "react";
import { TbDatabaseShare } from 'react-icons/tb';


const DataMigration = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Data Migration Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Data Migration Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <TbDatabaseShare size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Legacy System Migration</h5>
                            <p className="m-0">
                            We specialize in migrating data from legacy systems to modern platforms, ensuring seamless transitions with minimal risk, whether moving to the cloud or switching software.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <TbDatabaseShare size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Cloud Data Migration</h5>
                            <p className="m-0">We help businesses migrate data to the cloud (AWS, Azure, Google Cloud, etc.), ensuring scalability, security, and cost-efficiency with optimized data structures.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <TbDatabaseShare size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Database Migration</h5>
                            <p className="m-0">We assist with database migrations, ensuring smooth transitions between DBMS, upgrades, or consolidations while preserving schema, data integrity, and relationships.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <TbDatabaseShare size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Post-Migration Support</h5>
                            <p className="m-0">We provide ongoing support post-migration, including testing, troubleshooting, and performance monitoring, to ensure smooth operation and long-term success of your new system.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataMigration