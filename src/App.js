import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Bulgogi",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
    rating: 4.5,
  },
  {
    id: 3,
    name: "samgiopsal",
    image:
      "https://godomall.speedycdn.net/0f1081f2872a5b54f665bd623a5689cb/goods/1190/image/detail/1190_detail_053.jpg",
    rating: 4.9,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} style={{ width: 200, height: "auto" }} />
    </div>
  );
}

// 타입이 뭐고 어떤 모양이어야 하는지 설명해줄 수 있음
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
