import { presentations, type Presentation } from "@/data/presentations";

export const getPresentations = (): Presentation[] => {
  return [...presentations].sort((a, b) => 
    (b.order ?? 0) - (a.order ?? 0)
  );
};

export const getRecentPresentations = (count: number = 3): Presentation[] => {
  return getPresentations().slice(0, count);
};

export const getPresentationByTitle = (title: string): Presentation | undefined => {
  return presentations.find(presentation => 
    presentation.title.toLowerCase() === title.toLowerCase()
  );
};

export const searchPresentations = (query: string): Presentation[] => {
  const searchTerms = query.toLowerCase().split(" ");
  
  return presentations.filter(presentation => 
    searchTerms.some(term => 
      presentation.title.toLowerCase().includes(term) ||
      presentation.description.toLowerCase().includes(term) ||
      presentation.list?.some(item => 
        item.toLowerCase().includes(term)
      )
    )
  ).sort((a, b) => (b.order ?? 0) - (a.order ?? 0));
};
