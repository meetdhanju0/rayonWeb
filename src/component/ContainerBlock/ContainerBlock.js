 

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BiSolidUpvote } from 'react-icons/bi';
import Image from "rc-image";
const Header = lazy(()=> import('../core/Header'));



// Loader component
const Loader = () => (
    <div className="loader text-center">
      <Image src="/loding.png" width={50} height={50} alt="Loader" className="loader-image" />
    </div>
    );

const ContainerBlock = ({ children, ...customMeta }) => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const meta = {
    title: "Rayonweb solutions",
    description: "Rayonweb Solutions: Your trusted partner for innovative web development, design, and digital marketing services. Enhance your online presence with our expert solutions.",
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };

  useEffect(() => {
    document.title = meta.title;
    // You can set meta tags dynamically using document.head.appendChild for a meta tag.
  }, [meta.title]);

  return (
    <div>
      <main>
        <Suspense fallback={<Loader />}>
          <Header />
        </Suspense>
        <div>{children}</div>
        <Suspense fallback={<Loader />}>
        </Suspense>
        {showBtn && (
          <div className="back-to-top-btn">
            <BiSolidUpvote className='active' size={50} onClick={handleClick} />
          </div>
        )}
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" />
    </div>
  );
}

export default ContainerBlock