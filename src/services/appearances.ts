import { appearances, type Appearance } from "@/data/appearances";

export const getAppearances = (): Appearance[] => {
  const currentDate = new Date();
  
  // Sort appearances by date
  const sortedAppearances = [...appearances].sort((a, b) => a.date.getTime() - b.date.getTime());
  
  // Filter out past appearances (using endDate if available, otherwise use date)
  return sortedAppearances.filter(appearance => {
    const compareDate = appearance.endDate || appearance.date;
    return compareDate >= currentDate;
  });
};

export const getAllAppearances = (): Appearance[] => {
  // Return all appearances sorted by date (most recent first)
  return [...appearances].sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const getPastAppearances = (): Appearance[] => {
  const currentDate = new Date();
  
  // Return past appearances sorted by date (most recent first)
  return [...appearances]
    .filter(appearance => {
      const compareDate = appearance.endDate || appearance.date;
      return compareDate < currentDate;
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
};
