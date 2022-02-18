import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("abby");
  
  const handleSubmit = (e) => {
    e.preventDefault(); //stops the page from refresh
    const blog = { title , body , author};

    console.log(blog);
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="isha">isha</option>
          <option value="abby">abby</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
      </form>
    </div>
  );
};

export default Create;
