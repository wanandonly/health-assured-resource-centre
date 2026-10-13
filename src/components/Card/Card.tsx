import { CardProps } from "../../types/card";

function Card({ title, image, tags, watchTime }: CardProps) {
  return (
    <div role="card">
      <h3>{title}</h3>
      <img src={image} alt={title} />
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
