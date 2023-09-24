import Link from "next/link";
import styles from "./button.module.css";

function Button({ children, link }) {
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
}

export default Button;
