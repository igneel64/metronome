import clsx from "clsx";

import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  handleClick: () => void;
  isActive?: boolean;
};

export function Button({ children, handleClick, isActive }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={clsx(styles.button, isActive && styles.active)}
    >
      {children}
    </button>
  );
}
