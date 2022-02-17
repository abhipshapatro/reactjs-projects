import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
  const {data: blogs , isPending , error} = useFetch("http://localhost:8000/blogs");
//one line of code >> pass the endpoint(link) >> fetch the data(in usefetch.js) >> brings it to us >>  {data: blogs , loading state , error(if any)}

  return (
    <div className="home">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
        />
      )}
    </div>
  );
};

export default Home;



