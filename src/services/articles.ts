import { articles, type Article } from "@/data/articles";

export const getArticles = (): Article[] => {
  // Return all articles sorted by date (most recent first)
  return [...articles].sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const getRecentArticles = (count: number = 3): Article[] => {
  // Get the most recent articles limited by count
  return getArticles().slice(0, count);
};

export const getArticleByTitle = (title: string): Article | undefined => {
  return articles.find(article => 
    article.title.toLowerCase() === title.toLowerCase()
  );
};

export const searchArticles = (query: string): Article[] => {
  const searchTerms = query.toLowerCase().split(" ");
  
  return articles.filter(article => 
    searchTerms.some(term => 
      article.title.toLowerCase().includes(term) ||
      article.excerpt.toLowerCase().includes(term)
    )
  ).sort((a, b) => b.date.getTime() - a.date.getTime());
};
