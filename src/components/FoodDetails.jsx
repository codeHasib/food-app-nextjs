import Image from "next/image";

const FoodDetails = ({ currentFood }) => {
  const {
    id,
    dish_name,
    rating,
    price,
    origin_and_popularity,
    main_ingredients,
    image_link,
  } = currentFood;
  return (
    <div>
      <div>
        <Image
          src={image_link}
          alt={dish_name}
          width={350}
          height={350}
        ></Image>
      </div>
      <div>
        <h2>{dish_name}</h2>
        <ul className="list-disc">
          {main_ingredients.map((ing, ind) => (
            <li key={ind}> {ing} </li>
          ))}
        </ul>
        <h3>Rating: {rating}</h3>
        <p>Price:- ${price}</p>
      </div>
    </div>
  );
};

export default FoodDetails;
