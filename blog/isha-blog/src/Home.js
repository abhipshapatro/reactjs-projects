import { useState } from "react";

const Home = () => {
    const [blogs , setBlogs] = useState([
        {title : 'My new website' , body : 'lorem ipsum...' , author : 'isha' , id : 1},
        {title : 'Blog warming party!' , body : 'lorem ipsum...' , author : 'abhipsha' , id : 2},
        {title : 'Wevdev tips' , body : 'lorem ipsum...' , author : 'abby' , id : 3}
    ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>Written by : {blog.author}</p>
          </div>
      ))}
    </div>
  );
};

export default Home;

// map() - cycles through the array & can make changes with each item in the array