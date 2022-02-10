import { useState } from "react";

const Home = () => {

  // const name = 'isha'
  const [name , setName] = useState('isha'); //input
  const [age , setAge] = useState('21');

  const handleClick = () => {
      setName('abhipsha'); //processing
      setAge(30);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>{name}</p> {/* output */}
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;

