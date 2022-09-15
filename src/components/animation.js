export const loaderVariants = {
  initial: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    scale: [1, 1.6, 0.8],
    transition: {
      duration: 0.7,
      delay: 0.3,
    },
  },
};
export const childVariants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
    },
  },
};
