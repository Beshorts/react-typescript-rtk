import React from 'react';
import Heading from "../elements/Heading";
import { FilterColor } from "./index.styles";

interface InlineOptionsProps extends React.HTMLAttributes<HTMLElement> {
    filterColor: string[],
    titleOptions: string,
}

const SelectInlineOptions = ({ filterColor, titleOptions }: InlineOptionsProps) => {

    return (
        <section className="selectInlineOptions">
            <Heading attrLevel="h3" className="inlineOptionsTitle" text={titleOptions} />
            {filterColor.map(elem => (
                <FilterColor
                    key={elem}
                    className="filterOption"
                    color={elem}
                />
            ))}

        </section>

    )
};

export default SelectInlineOptions;