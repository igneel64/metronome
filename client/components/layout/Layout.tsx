import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return <div className={styles.container}>{children}</div>;
}
