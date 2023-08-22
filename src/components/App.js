import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Articles from "../pages/Articles/Articles";
import Post from "../pages/Post/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:postId" element={<Post />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
