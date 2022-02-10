import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs , setBlogs] = useState([
        {title : 'My new website' , body : 'lorem ipsum...' , author : 'abby' , id : 1},
        {title : 'Blog warming party!' , body : 'lorem ipsum...' , author : 'abhipsha' , id : 2},
        {title : 'Wevdev tips' , body : 'lorem ipsum...' , author : 'abby' , id : 3}
    ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'abby' )} title="Abby's blogs" />
    </div>
  );
};

export default Home;


//filter()
// can be used for making search pages where the title matches the search item 
