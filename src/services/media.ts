import { mediaAppearances, type MediaAppearance } from "@/data/media";

export const getMediaAppearances = (): MediaAppearance[] => {
  // Return all media appearances sorted by date (most recent first)
  return [...mediaAppearances].sort((a, b) => 
    (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0)
  );
};

export const getRecentMediaAppearances = (count: number = 3): MediaAppearance[] => {
  // Get the most recent media appearances limited by count
  return getMediaAppearances().slice(0, count);
};

export const getMediaAppearanceByTitle = (title: string): MediaAppearance | undefined => {
  return mediaAppearances.find(appearance => 
    appearance.title.toLowerCase() === title.toLowerCase()
  );
};

export const getMediaAppearancesByType = (type: string): MediaAppearance[] => {
  // Filter by type (e.g., "Podcast", "Conference")
  return mediaAppearances.filter(appearance => 
    appearance.description.toLowerCase().includes(type.toLowerCase())
  ).sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
};
