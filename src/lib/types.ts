export const globalAnimationVariants = () => ({
  initial: { opacity: 0, y: 70 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
});

export const staggerAnimationVariants = {
  initial: { opacity: 0, y: 60 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.3,
    },
  }),
};
