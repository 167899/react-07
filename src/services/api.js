export const getPosts = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const getPost = async (postId) => {
  const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
