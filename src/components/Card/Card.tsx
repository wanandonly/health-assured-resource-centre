import { useState } from "react";
import { CardProps } from "../../types/card";
import styles from "./Card.module.css";

function Card({
  title,
  thumbnail,
  tags,
  duration,
  description,
  date_uploaded,
}: Omit<CardProps, "category">) {
  const [toggleAllData, setToggleAllData] = useState(false);

  return (
    <div
      role="card"
      aria-label={`Card for ${title}`}
      className={styles.card}
      onClick={() => setToggleAllData(!toggleAllData)}
    >
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} className={styles.cardImage} />
      <div>
        Tags:
        {tags.map((tag, index) => (
          <span key={`${tag}-${index}`}>
            {tag}
            {index < tags.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
      <p>Duration: {duration} minutes</p>
      {toggleAllData && (
        <div>
          <p>{description}</p>
          <p>Date Uploaded: {date_uploaded}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
