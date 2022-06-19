import React from 'react';
import { ProductItemProps } from '../products/ProductPreview';

// create this component to enforce Ui rendering only when component is mounted
type ApiStatusesCompProps<T> = {
    response: T | T[],
    isLoading: boolean,
    isError: boolean | string | undefined,
    isSuccess: boolean,
    children: React.ReactNode,
}

const ApiStatusesComp = <T extends ProductItemProps>({ isLoading, isError, isSuccess, children, response }: ApiStatusesCompProps<T>) => {

    let content;

    if (isError) {
        content = <h1>OOOPS!Error, Please Reload page...</h1>;
        return content;
    } else if (isLoading) {
        content = <h1>Loading Products</h1>;
        return content;
    } else if (isSuccess && response) {
        content = <>{children}</>;
        return content;
    } else if (!isError && !isLoading && !isSuccess) {
        return null;
    }

    return (
        <>
            {content}
        </>
    )
};

export default ApiStatusesComp;