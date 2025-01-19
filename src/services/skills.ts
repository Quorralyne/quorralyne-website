export interface Skill {
  title: string;
  description: string;
  content: string;
  icon: string;
}

export function getSkills(): Skill[] {
  return [
    {
      title: "Server-side Development",
      description: "Slim, maintainable RESTful services",
      content:
        "I understand how important it is to create the right service to present data with minimal performance impact. My back-End Development services are available and customizable to suit whatever your needs may be. My specialty is to create microservices specifically tailored to IOT devices, but have done larger service projects as well.",
      icon: "coding",
    },
    {
      title: "Conversational AI",
      description: "Voice Apps and Chat Bots",
      content:
        "Connecting with users can take on many forms - one of the most intuitive and natural can be through voice interfaces like Alexa, Siri, Google Assistant and Cortana. Having a deep understanding of conversation flow will help bring customer retention onto a more personal level.",
      icon: "ai",
    },
    {
      title: "Mobile App Development",
      description: "Cross-Platform Approach",
      content:
        "Since the early days of my career, I've had a strong passion for mobile. Ultimately I settled on working with Xamarin for most projects and native development when needed. This skill is indispensable when it comes to leaving a lasting impression on a client, and ensuring their product looks great and is maintainable. With my experience building for Fortune 500 companies, I'm always working to ensure my clients' needs get the attention they deserve in a timely manner.",
      icon: "mobile",
    },
    {
      title: "Technical Speaking",
      description: "Presentations on code and confidence",
      content:
        "Quality teaching can be difficult to come by, and I have dedicated a large amount of time to research the best way to communicate new tech to people. Whether it is at a conference, user group, recorded video or company presentation. I specialize in presenting device programming and confidence boosting for non-traditional developers.",
      icon: "speaking",
    },
  ];
}
