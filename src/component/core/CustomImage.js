import React, {useState} from "react";
import Image from "rc-image";


// blurData,
const CustomImage = ({ src, width, height,  alt, ...rest }) => {
    const [imgSrc, setImgSrc] = useState(src);

    return(
        <> 
            <Image
                src={imgSrc || "/img/placeholder.jpg"}
                width={width || "0"}
                height={height || "0"}
                preview={false}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                placeholder="blur"
                // blurDataURL={!!blurData ? blurData : defaultBlur}
                onError={() => {
                setImgSrc("/img/placeholder.jpg");
                }}
                // loading="lazy"
                {...rest}
                alt={alt || ""}
            />
                
        </>
    )
}

export default CustomImage