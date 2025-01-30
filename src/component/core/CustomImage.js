import React, {useState} from "react";
import Image from "rc-image";


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
                onError={() => {
                setImgSrc("/img/placeholder.jpg");
                }}
                {...rest}
                alt={alt || ""}
            />
                
        </>
    )
}

export default CustomImage