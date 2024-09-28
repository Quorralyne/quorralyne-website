"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Header = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current!;
      const container = containerRef.current!;

      const canScroll = scrollWidth > clientWidth + 20;
      container.classList.toggle("can-scroll", canScroll);
      container.classList.toggle("at-left", scrollLeft <= 0);
      container.classList.toggle(
        "at-right",
        Math.ceil(scrollLeft + clientWidth) >= scrollWidth
      );
    };

    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      scrollElement?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollMenu = (direction: "left" | "right") => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollAmount = scrollElement.clientWidth / 2;
      scrollElement.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <header>
      <nav className="nav-container" ref={containerRef}>
        <div className="nav-scroll" ref={scrollRef}>
          <Link href="/">Home</Link>
          <Link href="/bio">Bio</Link>
          <Link href="/presentations">Presentations</Link>
          <Link href="/appearances">Appearances</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/media">Media</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button
          className="nav-arrow nav-arrow-left"
          onClick={() => scrollMenu("left")}
        >
          «
        </button>
        <button
          className="nav-arrow nav-arrow-right"
          onClick={() => scrollMenu("right")}
        >
          »
        </button>
      </nav>
    </header>
  );
};

export default Header;