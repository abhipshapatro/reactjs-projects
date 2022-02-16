import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs , setBlogs] = useState([
        {title : 'My new website' , body : 'lorem ipsum...' , author : 'abby' , id : 1},
        {title : 'Blog warming party!' , body : 'lorem ipsum...' , author : 'abhipsha' , id : 2},
        {title : 'Wevdev tips' , body : 'lorem ipsum...' , author : 'abby' , id : 3}
    ]);

    const [name , setName] = useState('isha');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
      console.log('use effect ran');
      console.log(name)
    },[name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
      <button onClick={() => setName('abhipsha')}>change name</button>
      <p>{ name }</p>
    </div>
  );
};

export default Home;

//npx json-server --watch data/db.json --port 8000 
// endpoints
// /blogs               GET         fetch all blogs
// /blogs/{id}       GET          fetch a single bag
// /blogs               POST       add a new blog
// /blogs/{id}       DELETE    delete a blog