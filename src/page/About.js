import React, {Suspense, lazy} from "react"
import Image from "rc-image";
import { Helmet } from 'react-helmet-async';


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
           <Helmet>
        <title>About Rayon Web Solutions - Your Vision, Our Code & Turning Ideas into Reality</title>
        <meta
          name="description"
          content="Learn more about Rayon Web Solutions. We specialize in turning your vision into reality with innovative web development and custom software solutions tailored to your business needs."
        />
      </Helmet>
            <DynamicAboutContant/>
            <DynamicFactsSection/>
        </Suspense>
    )
}

export default About