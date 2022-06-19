import React, { useEffect, useState, memo } from 'react';
import { Wrapper, StyledOptions, Select, DisabledOption } from './index.styles';

export interface FormProps extends React.ComponentPropsWithoutRef<"form"> {
    filter: string,
    list: string[],
    disabledOptionText: string,
    children?: React.ReactNode,
}

// as select tag mantain own state and update it based on user input
// write the form as a controlled component and make the React state be the “single source of truth”.
const SelectDropDown = ({ filter, list, children, disabledOptionText }: (FormProps)) => {
    console.count("DROPDOWN IS RENDERING")

    const [elementsList, setElementsList] = useState<FormProps["list"]>([])
    const [filterBy, setFilterBy] = useState<string>(filter)

    const selectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        setFilterBy(selected);
    };

    console.log(filter)

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const selected = e.currentTarget.value;
        setFilterBy(selected);
    };

    useEffect(() => {
        setElementsList(list);
    }, [list])

    return (
        <Wrapper className="dropDown" onSubmit={onSubmitForm}>
            {children}
            <Select
                className={"dropDownSelect"}
                name={"dropDownElem"}
                value={filterBy}
                onChange={selectOnChange}
                autoFocus
            >
                <DisabledOption
                    className={"disabledOption"}
                    disabled
                >
                    {disabledOptionText}
                </DisabledOption>

                {elementsList && elementsList.map((elem) => (
                    <StyledOptions
                        key={elem}
                        className="dropDownOptionList"
                        value={elem}>{elem}
                    </StyledOptions>
                ))}
            </Select>
        </Wrapper>
    )
};

export default memo(SelectDropDown);