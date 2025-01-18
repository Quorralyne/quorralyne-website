import { Box, Container, Group } from "@mantine/core";
import { theme } from "@/theme";
import styles from "./Navigation.module.css";
import Link from "next/link";
import Image from "next/image";
import { navigationItems } from "@/data/navigation";
import logo from "@/public/logo.png";

export function Navigation() {
  const items = navigationItems;
  return (
    <Box component="nav" className={styles.nav}>
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

        <Group gap="md" className={styles.links}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.link}
              style={{ color: theme.colors.text }}
            >
              {item.label}
            </Link>
          ))}
        </Group>
      </Container>
    </Box>
  );
}
