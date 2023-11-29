export const calculateExperience = () => {
  const today = new Date();
  const startDate = new Date("2021-01-01");

  const years = today.getFullYear() - startDate.getFullYear();

  return {
    years,
  };
};
