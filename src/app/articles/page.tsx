import Image from 'next/image';
import Link from 'next/link'
import heroImage from "../../public/images/heather-articles.jpg";

export default function Articles() {
  const articles = [
    {
      title: "The truth of coding motivation",
      excerpt: "Years ago, a programmer's life was very different. Someone in the STEM field is considered quite smart. In many circles...",
      link: "https://medium.com/@quorralyne/the-truth-of-coding-motivation-6a7a37f6e8e9"
    },
    {
      title: "Are you impressive in technology?",
      excerpt: `When you hear the word "impressive" used as a descriptor for someone in the tech industry, what is the bar that you set for that...`,
      link: "https://medium.com/@quorralyne/are-you-impressive-in-technology-a98adcf93edc"
    }
  ];

  return (
    <div className="articles">
      <div className="hero">
        <Image
         src={heroImage}
         alt="Hero image"
         layout="fill"
         objectFit="cover"
         objectPosition="50% 40%"
        />
        <div className="hero-content">
          <h1>Articles</h1>
        </div>
      </div>
      {articles.map((article, index) => (
        <div key={index} className="article-item">
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
          <Link href={article.link} target="_blank" rel="noopener noreferrer">Read on Medium</Link>
        </div>
      ))}
    </div>
  )
}