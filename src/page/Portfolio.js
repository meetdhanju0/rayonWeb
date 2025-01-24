import React, { Suspense, lazy } from "react";
import Image from "rc-image";

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
            <DynamicProjectsSection/>
        </Suspense>
    )
}
export default Portfolio