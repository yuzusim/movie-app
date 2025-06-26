import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <img src={picture} style={{ width: 200, height: "auto" }} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  },
  {
    name: "Bulgogi",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8",
  },
  {
    name: "samgiopsal",
    image:
      "https://godomall.speedycdn.net/0f1081f2872a5b54f665bd623a5689cb/goods/1190/image/detail/1190_detail_053.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.name} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
