import './index.css';
import App from './pages/App';
import About from './pages/About';
import Posts from './pages/Post/index';
import Post from './pages/Post/Item';
import PostLists from './pages/Post/List';
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function() {
   return (
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/posts" element={<Posts />}>
                <Route path="/posts/" element={<PostLists />} />
                <Route path="/posts/:slug" element={<Post />} />
            </Route>
            <Route path="/home" element={<App />} />
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div >NOT FOUND</div>} />
        </Routes>
    </BrowserRouter>
   )
}