import React from "react";
import { Link } from "react-router-dom";

const foodItems = [
  { name: "Kenkey", id: 1 },
  { name: "Rice", id: 2 },
  { name: "Banku", id: 3 },
  { name: "Jollof", id: 4 },
  { name: "Waakye", id: 5 },
  { name: "Yam", id: 6 },
];

function Details() {
  return (
    <div>
      {foodItems.map((food) => {
        return (
          <Link key={food.id} to={"/details/" + food.id}>
            <h1>{food.name}</h1>
          </Link>
        );
      })}
    </div>
  );
}

export default Details;
