import React from "react";

const Home = () => {
  const render = [...Array(10)].map((arr, idx) => {
    return <h1 key={idx}>home!</h1>;
  });
  return <>{render}</>;
};

export default Home;
