import React, { Suspense, lazy } from "react";
import Image from "rc-image";

// Lazy load the component
const DynamicPrivacyContant = lazy(() => import('../component/privacy-policy/PrivacyPolicy'));

// Loader component
const Loader = () => (
  <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
);


const Privacy=()=> {
  return (
    <Suspense fallback={<Loader/>}>
        <DynamicPrivacyContant />
    </Suspense>
  );
}

export default Privacy