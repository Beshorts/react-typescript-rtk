import React, { memo } from "react";
import { Add, Remove } from "@mui/icons-material";

interface CartButtonProps extends React.ComponentPropsWithoutRef<'div'> {
    added: number | object,
}
const CartButton = ({ added, onClick }: CartButtonProps) => {
    return (
        <div
            className='icon'
            aria-label={added ? "remove" : "add"}
            onClick={onClick}
        >
            {
                added ?
                    <Remove />
                    : <Add />
            }
        </div>

    )
};

export default memo(CartButton);