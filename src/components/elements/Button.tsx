import React from 'react';

// set polymorphique BUTTON (to use it as button or Link or anchor)

export const ButtonDefaultAsType = 'button' as const;



export type ButtonOwnProps<P extends React.ElementType> = {
  className: string,
  type: "button"| "submit" | "reset",
  children: React.ReactNode,
  as?: P
};

export type ButtonProps<P extends React.ElementType> = ButtonOwnProps<P> &
  Omit<React.ComponentProps<P>, keyof ButtonOwnProps<P>>

export const Button = <P extends React.ElementType = typeof ButtonDefaultAsType>({
  className,
  children,
  as,
}: ButtonProps<P>) => {
  
  const Tag = as || ButtonDefaultAsType

  return <Tag className={className}>{children}</Tag>
}

export default Button;