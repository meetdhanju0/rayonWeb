import React, { Suspense, lazy } from "react";
import Image from "rc-image";

// Lazy load the component
const DynamicFQblock = lazy(() => import('../component/F&Q/F&qContantSection'));

// Loader component
const Loader = () => (
  <div className="loader text-center">
    <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
  </div>
);


const FQblock = ()=> {
  return (
    <Suspense fallback={<Loader/>}>
        <DynamicFQblock />
    </Suspense>
  );
}

export default FQblock  