import React, {Suspense, lazy} from "react"
import Image from "rc-image";

// Lazy load the component
const DynamicAboutContant = lazy(()=> import('../component/about/AboutContantSection'))
const DynamicFactsSection = lazy(()=> import('../component/Home/FactsSection'))
// Loader component
const Loader = () => (
    <div className="loader text-center">
      <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
  );

const About = () =>{
    return(
        <Suspense fallback={<Loader/>}>
            <DynamicAboutContant/>
            <DynamicFactsSection/>
        </Suspense>
    )
}

export default About