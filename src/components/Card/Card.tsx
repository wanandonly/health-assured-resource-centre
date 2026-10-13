import { CardProps } from "../../types/card";
import styles from "./Card.module.css";

function Card({ title, image, tags, watchTime }: CardProps) {
  return (
    <div role="card" aria-label={`Card for ${title}`} className={styles.card}>
      <h3>{title}</h3>
      <img src={image} alt={title} className={styles.cardImage} />
      <div>
        Tags:
        {tags.map((tag, index) => (
          <span key={`${tag}-${index}`}>
            {tag}
            {index < tags.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
      <p>Duration: {watchTime} minutes</p>
    </div>
  );
}

export default Card;
