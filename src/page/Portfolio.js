import React, { Suspense, lazy } from "react";
import Image from "rc-image";
import { Helmet } from 'react-helmet-async';


// Lazy load the component
const DynamicProjectsSection = lazy(() => import('../component/Home/ProjectsSection'));

// Loader component
const Loader = () => (
  <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
);


const Portfolio = ()=>{
    return(
        <Suspense fallback={<Loader/>}>
          <Helmet>
        <title>Our Portfolio - Rayon Web Solutions</title>
        <meta name="description" content="Discover our successful projects and innovative solutions delivered to clients across industries at Rayon Web Solutions." />
      </Helmet>
            <DynamicProjectsSection/>
        </Suspense>
    )
}
export default Portfolio