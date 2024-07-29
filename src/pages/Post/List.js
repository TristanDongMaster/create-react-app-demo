import { Link } from "react-router-dom";

const BlogPosts = {
    '1': {
      title: 'First Blog Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    '2': {
      title: 'Second Blog Post',
      description: 'Hello React Router v6'
    }
  };
function PostLists() {
    return (
      <ul>
        list
        {Object.entries(BlogPosts).map(([slug, { title }]) => (
          <li key={slug}>
            <h3><Link to={`/posts/${slug}`}>{title}</Link></h3>
          </li>
        ))}
      </ul>
    );
  }

  export default PostLists