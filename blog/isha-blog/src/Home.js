import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending , setIsPending] = useState(true);
  const [error , setError] = useState(null);

  const [name, setName] = useState("isha");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          // console.log(res);
          if(!res.ok){
            throw Error('unable to fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          // console.log(err.message);
          setError(err.message);
        })
    } , 1000);
   
  }, []);

  return (
    <div className="home">
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
