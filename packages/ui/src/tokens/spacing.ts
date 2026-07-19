export const spacing = {
  0: "0rem",

  1: "0.25rem", //4

  2: "0.5rem", //8

  3: "0.75rem", //12

  4: "1rem", //16

  5: "1.25rem", //20

  6: "1.5rem", //24

  8: "2rem", //32

  10: "2.5rem", //40

  12: "3rem", //48

  16: "4rem", //64

  20: "5rem", //80

  24: "6rem", //96
} as const;

export type Spacing = typeof spacing;
