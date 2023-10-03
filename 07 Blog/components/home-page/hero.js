import styles from "./hero.module.css";

import Image from "next/image";
//image from next makes it lazy loaded automatically and reduced in size

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/flo.png"
          alt="Image of Flo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Flo</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}

export default Hero;
