import { experiences, type Experience } from "@/data/experiences";

export const getExperiences = (): Experience[] => {
  // Return experiences sorted by order (if available) or start date
  return [...experiences].sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    return b.startDate.getTime() - a.startDate.getTime();
  });
};

export const getCurrentExperiences = (): Experience[] => {
  // Get experiences without an end date (current positions)
  return getExperiences().filter(exp => !exp.endDate);
};

export const getPastExperiences = (): Experience[] => {
  // Get experiences with an end date (past positions)
  return getExperiences().filter(exp => exp.endDate);
};

export const getExperiencesByCompany = (company: string): Experience[] => {
  return experiences
    .filter(exp => exp.company.toLowerCase() === company.toLowerCase())
    .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
};

export const searchExperiences = (query: string): Experience[] => {
  const searchTerms = query.toLowerCase().split(" ");
  
  return experiences
    .filter(exp => 
      searchTerms.some(term => 
        exp.title.toLowerCase().includes(term) ||
        exp.company.toLowerCase().includes(term) ||
        exp.description.toLowerCase().includes(term)
      )
    )
    .sort((a, b) => {
      if (a.order !== undefined && b.order !== undefined) {
        return a.order - b.order;
      }
      return b.startDate.getTime() - a.startDate.getTime();
    });
};
