import React, { lazy, Suspense } from 'react';
import Image from 'rc-image';
import { Helmet } from 'react-helmet-async';


const DynamicIndex = lazy(() => import('../component/HomePage/index'));

const Home = () => {
    return (
        <>
        <Helmet>
        <title>Rayon Web Solutions - Your Vision, Our Code</title>
        <meta
          name="description"
          content="Welcome to Rayon Web Solutions, where we turn your ideas into reality with cutting-edge web development solutions."
        />
        {/* Noindex is typically added for pages you don't want to be indexed */}
        {/* <meta name="robots" content="noindex, nofollow" /> */}
      </Helmet>

        <Suspense fallback={
            <div className="loader text-center">
                <Image
                    src="/loding.png"
                    width={50}
                    height={50}
                    alt="Loader"
                    className="loader-image"
                />
            </div>
            }
        >   
            <DynamicIndex/>
        </Suspense>
        </>

    )
}

export default Home