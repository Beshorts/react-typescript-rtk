
const size = {
  smXs: "320px",
  sm: "375px",
  smL: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};



export const device = (Object.keys(size) as Array<keyof typeof size>).reduce(
  (acc, key) => {
    acc[key] = (style: "string") =>
      `@media (min-width: ${size[key]}) { ${style} }`;
    return acc;
  },
  {} as { [index: string]: Function }
);

