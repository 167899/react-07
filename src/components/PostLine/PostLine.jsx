import { Link } from "react-router-dom";

const PostLine = ({ body, title, id }) => {
  return (
    <li>
      <Link to={`/articles/${id}`}>
        <h2>{title}</h2>
        {body}
      </Link>
    </li>
  );
};

export default PostLine;
