import React, { Suspense, lazy } from "react";
import Image from "rc-image";

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
            <DynamicServiceSection/>
        </Suspense>
    )
}
export default Service