import { Routes as RRDRoutes, Route } from "react-router-dom";
import Post from './pages/Post';
import PostsList from './pages/PostsList';

function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<PostsList />} />
      <Route path="/post/:postId" element={<Post />} />
    </RRDRoutes>
  );
}

export default Routes;
