import { CardProps } from "../../types/card";

function Card({ title, image, tags, watchTime }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <div>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p>Watch Time: {watchTime}</p>
    </div>
  );
}

export default Card;
