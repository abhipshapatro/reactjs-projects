import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs , setBlogs] = useState(null);

    const [name , setName] = useState('isha');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

//the link(fetch) returns a promise (then method)
//once (the promise has resolved) we have a data back >> we get a response obj 
//to get the data, res.json() passes the json into a js obj
//now we need to return this value
//when we return this >> the whole thing now returns another promise coz res.json() is also asyncronous >>
//another then block which fires a func >> takes a parameter (the actual data)

    useEffect(() => {
      console.log('use effect ran');
      fetch('http://localhost:8000/blogs')
        .then(res => {
          // passes the json into js obj
          return res.json();
        })
        .then(data => {
          setBlogs(data)
        })
    },[]);

//setBlogs doesnot cause an infinite loop because we have an empty dependency array

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
    </div>
  ); 
};

export default Home;


//blog is null so it doesnot look at the html part(&&)
//js