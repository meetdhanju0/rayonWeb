import React, { Suspense, lazy } from "react";
import Image from "rc-image";
import { Helmet } from 'react-helmet-async';


// Lazy load the component
const DynamicCareerContant = lazy(()=> import('../component/career/CareerContant'))

// Loader component
const Loader = () => (
    <div className="loader text-center">
      <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
  );


const Career = () => {
    return(
        <Suspense fallback={<Loader/>}>
          <Helmet>
        <title>Careers - Rayon Web Solutions</title>
        <meta name="description" content="Explore exciting career opportunities and join our innovative team at Rayon Web Solutions." />
      </Helmet>
            <DynamicCareerContant/>
        </Suspense>
    )
}
export default Career