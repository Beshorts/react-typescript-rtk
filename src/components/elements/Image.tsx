import React from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string,
    className: string,
    alt: string,
}

const Image = ({ src, className, alt }: Props) => {
    return (
        <div className="imgContainer">
            <img className={className} src={src} alt={alt} />
        </div>

    )
};

export default Image;