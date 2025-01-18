import { Box, Container, Group } from "@mantine/core";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandBlogger,
  IconMail,
  IconBrandBluesky,
} from "@tabler/icons-react";
import logo from "@/public/logo.png";
import { footerItems } from "@/data/navigation";

const iconMap = {
  blog: IconBrandBlogger,
  bluesky: IconBrandBluesky,
  linkedin: IconBrandLinkedin,
  mail: IconMail,
  twitter: IconBrandTwitter,
  youtube: IconBrandYoutube,
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = footerItems;

  return (
    <Box component="footer" className={styles.footer}>
      <Container className="columns" size="xl">
        <Link href="/" className={styles.logo}>
          <Image
            src={logo}
            alt="Heather Downing"
            width={150}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </Link>

        <Group gap="lg" className={styles.socialLinks}>
          {socialLinks.map((link) => {
            const IconComponent = link.icon
              ? iconMap[link.icon as keyof typeof iconMap]
              : null;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                title={link.label}
              >
                {IconComponent && <IconComponent size={20} stroke={1.5} />}
              </a>
            );
          })}
        </Group>

        <div className={styles.copyright}>
          &copy; 2017&ndash;{currentYear} Heather Downing. All rights reserved.
        </div>
      </Container>
    </Box>
  );
}
