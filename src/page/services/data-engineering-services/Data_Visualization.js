import React from "react";
import { TbDatabaseSearch } from 'react-icons/tb';


const DataVisualization = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center">
                        <span />Data Visualization Services<span />
                    </p>
                    <h1 className="text-center mb-5 main-cl">Our Data Visualization Development Solutions</h1>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <TbDatabaseSearch size={50} />  
                            </div>
                            <h5 className="mb-3 main-cl">Data Visualization</h5>
                            <p className="m-0">Data Visualization.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <TbDatabaseSearch size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Data Visualization</h5>
                            <p className="m-0">Data Visualization.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <TbDatabaseSearch size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Data Visualization</h5>
                            <p className="m-0">Data Visualization.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <TbDatabaseSearch size={50} />
                            </div>
                            <h5 className="mb-3 main-cl">Data Visualization</h5>
                            <p className="m-0">Data Visualization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataVisualization