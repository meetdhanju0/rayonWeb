import React, { Suspense, lazy } from "react";
import Image from "rc-image";

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
            <DynamicContactContant/>
        </Suspense>
    )
}
export default Contact