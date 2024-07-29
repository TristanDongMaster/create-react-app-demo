import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

function About() {
     // 使用 hook
    const location = useLocation();
    const { from, pathname } = location

    return (
        <div className="App">
        <h1>About demo</h1>
        <div>这里是卡拉云的网站，你当前在 {pathname}，你是从 {from} 跳转过来的</div>
        <Link to={`/home`}>home</Link>
        </div>
    );
}
  
export default About;