import React, { useState, useEffect, createContext } from "react";

export const PostsContext = createContext({
  posts: [],
  setPosts: () => null,
  media: [],
  setMedia: () => null,
});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState([]);

  const values = {
    posts,
    setPosts,
    media,
    setMedia,
  };

  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
};
