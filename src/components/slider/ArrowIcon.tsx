import React from 'react';

//styles
import { Arrow} from './index.styles';

// define default props for the 2 arrow btn
interface ArrowLeftBtn extends React.ComponentPropsWithoutRef<"button"> {
  direction: "left",
  children: React.ReactNode,
  value: string | number | readonly string[] | undefined,
  onClick: React.MouseEventHandler<HTMLButtonElement>,

}

interface ArrowRightBtn extends React.ComponentPropsWithoutRef<"button"> {
  direction: "right",
  children: React.ReactNode,
  value: string | number | readonly string[] | undefined,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

// Create a disjoint union
export type ArrowBtn = ArrowLeftBtn | ArrowRightBtn;

// Add built-in HTML props to the disjoin union
export type ArrowProps = React.ComponentPropsWithoutRef<"button"> & ArrowBtn;

const ArrowIcon = ({ direction, children, onClick, value }: ArrowProps )  => {

  return (
      <Arrow 
        className={`arrow ${direction}`}
        as="button"
        name={direction}
        direction={direction}
        value={value}
        type="button"
        onClick={onClick}
      >
        {children}
      </Arrow>
  )
};

export default ArrowIcon;


