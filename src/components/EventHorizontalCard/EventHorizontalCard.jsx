import React from "react";
import styles from "./eventhorizontalcard.module.scss";
import Image from "next/image";
import Link from "next/link";

const EventHorizontalCard = () => {
  return (
    <Link href="#" className={`${styles.card} shadow-xl no-underline`}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.unsplash.com/photo-1585699324551-f6c309eedeca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          fill
          sizes="100vw"
          alt=""
        />
      </div>
      <div className={`${styles.cardBody}`}>
        <h4>A ORQUESTRA, puzzle musical para a Infância</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quis
          sapiente quas dolorem tenetur a earum est ratione! Dolor, facilis
          dolorem eos possimus unde dolorum quos officia iusto id aliquid.
        </p>

        <p>
          <b>Sessões:</b> 5ª Dom. 2ª 3ª 4ª: 13h, 14h, 15h10
        </p>
      </div>
    </Link>
  );
};

export default EventHorizontalCard;
