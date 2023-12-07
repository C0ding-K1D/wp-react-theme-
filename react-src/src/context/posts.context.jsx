import { useState, useEffect, createContext } from "react";

export const PostsContext = createContext({
  posts: [],
  setPosts: () => null,
  media: [],
  setMedia: () => null,
  testimonials: [],
  setTestimonials: () => null,
  loadingPosts: true,
  setLoadingPosts: () => null,
  loadingMedia: true,
  setLoadingMedia: () => null,
  loadingTestimonials: true,
  setLoadingTestimonials: () => null,
});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [loadingMedia, setLoadingMedia] = useState(true);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://www.matthewalvarez.org/wp-json/wp/v2/blogs"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const response2 = await fetch(
          "https://www.matthewalvarez.org/wp-json/wp/v2/testimonials"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data2 = await response2.json();

        setPosts(data);
        setTestimonials(data2);
        setLoadingPosts(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchMedia = async () => {
      try {
        const response = await fetch(
          "https://www.matthewalvarez.org/wp-json/wp/v2/media"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMedia(data);
        setLoadingMedia(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
    fetchMedia();
  }, []);

  useEffect(() => {
    console.log(testimonials);
    console.log(media);
    console.log(posts);
  }, [testimonials, media, posts]);

  const values = {
    posts,
    setPosts,
    media,
    setMedia,
    loadingPosts,
    setLoadingPosts,
    loadingMedia,
    setLoadingMedia,
    loadingTestimonials,
    setLoadingTestimonials,
  };

  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
};
