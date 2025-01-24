import React, { lazy, Suspense } from "react"
import { Link } from "react-router-dom"
// import styles from '.././styles/error.module.css'
import Image from "rc-image";


const DynamicContainerBlock = lazy(() => import('../component/ContainerBlock/ContainerBlock'))


// Loader component
const Loader = () => (
    <div className="loader text-center">
        <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
);

const Custom404 = () => {
    return (
        <Suspense fallback={<Loader />}>
            <DynamicContainerBlock>
                <section className="page_404">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 ">
                                <div className="col-sm-10 col-sm-offset-1  text-center pd_100">
                                    <div className="four_zero_four_bg">
                                        <h1 className="text-center">404</h1>
                                    </div>
                                    <div className="contant_box_404">
                                        <h3 className="h2 mb-5">Look like you re lost</h3>
                                        <p>the page you are looking for not avaible!</p>
                                        <Link to="/" className="link_404">
                                            Go to Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </DynamicContainerBlock>
        </Suspense>
    )
}

export default Custom404