import React, { useState, useEffect } from "react";
import axios from 'axios';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1713823799895-bddbbf670531?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
      caption: "Beautiful Flower",
    },
  ]);

useEffect(()=>{

  axios.get("http://localhost:3000/posts")
  .then((res)=>{
    
    setPosts(res.data.posts)

  })

}, [])


  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h3>NO post available</h3>
      )}
    </section>
  );
};

export default Feed;
