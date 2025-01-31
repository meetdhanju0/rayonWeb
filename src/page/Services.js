import React, { Suspense, lazy } from "react";
import Image from "rc-image";
import { Helmet } from 'react-helmet-async';


// Lazy load the component
const DynamicServiceSection = lazy(() => import('../component/Home/ServiceSection'));

// Loader component
const Loader = () => (
  <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
);

const Service = ()=>{
    return(
      
        <Suspense fallback={<Loader/>}>
          <Helmet>
        <title>Our Services - Rayon Web Solutions</title>
        <meta name="description" content="Explore the wide range of web development, software solutions, and digital services offered by Rayon Web Solutions to grow your business." />
      </Helmet>
            <DynamicServiceSection/>
        </Suspense>
    )
}
export default Service