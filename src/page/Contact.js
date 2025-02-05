import React, { Suspense, lazy } from "react";
import Image from "rc-image";
import { Helmet } from 'react-helmet-async';

// Lazy load the component
const DynamicContactContant = lazy(() => import('../component/contact/ContactContant'));

// Loader component
const Loader = () => (
  <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
);

const Contact = () => {
    return(
        <Suspense fallback={<Loader/>}>
          <Helmet>
        <title>Contact Us - Rayon Web Solutions</title>
        <meta name="description" content="Get in touch with Rayon Web Solutions for expert web development, digital solutions, or to discuss your next project." />
      </Helmet>
            <DynamicContactContant/>
        </Suspense>
    )
}
export default Contact