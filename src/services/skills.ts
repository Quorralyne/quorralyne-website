import { skills, type Skill } from "@/data/skills";

export const getSkills = (): Skill[] => {
  return skills;
};

export const getSkillByTitle = (title: string): Skill | undefined => {
  return skills.find(skill => skill.title.toLowerCase() === title.toLowerCase());
};

export const getSkillsByCategory = (category: string[]): Skill[] => {
  return skills.filter(skill => 
    category.some(cat => 
      skill.title.toLowerCase().includes(cat.toLowerCase()) || 
      skill.description.toLowerCase().includes(cat.toLowerCase())
    )
  );
};
