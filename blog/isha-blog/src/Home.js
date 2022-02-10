import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs , setBlogs] = useState([
        {title : 'My new website' , body : 'lorem ipsum...' , author : 'abby' , id : 1},
        {title : 'Blog warming party!' , body : 'lorem ipsum...' , author : 'abhipsha' , id : 2},
        {title : 'Wevdev tips' , body : 'lorem ipsum...' , author : 'abby' , id : 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
      console.log('use effect ');
      console.log(blogs);
    });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
    </div>
  );
};

export default Home;


// useEffect doesnot return anything
// pass a func as an argument
// used for fetching data , authentication service(side effects)