import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">Insert</Link>
      <br />
      <br />
      <Link to="/update">Update</Link>
      <br />
      <br />
      <Link to="/fetch">Fetch</Link>
      <br />
      <br />
      <Link to="/delete">Delete</Link>
    </div>

  );
};

export default Home;
