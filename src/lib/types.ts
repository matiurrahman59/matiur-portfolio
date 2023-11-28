export const globalAnimationVariants = (delay?: number) => ({
  initial: { opacity: 0, y: 75 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

export const staggerAnimationVariants = {
  initial: { opacity: 0, y: 60 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
