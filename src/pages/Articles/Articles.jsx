import PostLine from "../../component/PostLine/PostLine";
import { useEffect, useState } from "react";
import { getPosts } from "../../services/api";

const Articles = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <ul>
      {posts &&
        posts.map((e) => (
          <PostLine
            key={e.id}
            title={e.title}
            body={e.body}
            id={e.id}
          ></PostLine>
        ))}
    </ul>
  );
};

export default Articles;
