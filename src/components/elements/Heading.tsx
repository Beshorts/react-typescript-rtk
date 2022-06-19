import React from 'react';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
    attrLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p",
    className: string,
    text: string | number,
}

// setting default value for attrLevel prop
const Heading = ({ attrLevel: HeadingLevel = "h1", className, text }: Props) => {
    return (
        <HeadingLevel className={className}>
            {text}
        </HeadingLevel>
    )
};

export default Heading;