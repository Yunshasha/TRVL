import styles from "@/styles/Card.module.css";
import Link from "next/link";

interface CardItem {
  src: string;
  text: string;
  label: string;
  path: string;
}
function CardItem(props: CardItem) {
  return (
    <>
      <li className={styles.cards__item}>
        <Link className={styles.cards__item__link} href={props.path}>
          <figure
            className={styles.cards__item__pic_wrap}
            data-category={props.label}
          >
            <img
              className={styles.cards__item__img}
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className={styles.cards__item__info}>
            <h5 className={styles.cards__item__text}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
