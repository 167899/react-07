import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services/api";

const Post = () => {
  const [postTitle, setPostTitle] = useState([]);
  const [postBody, setPostBody] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    getPost(postId).then(({body, title}) => {
      setPostBody(body);
      setPostTitle(title);
    });
  }, [postId]);

  return (
    <div>
      <h2>{postTitle}</h2>
      <p>{postBody}</p>
    </div>
  );
};

export default Post;
