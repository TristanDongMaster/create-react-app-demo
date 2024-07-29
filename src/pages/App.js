import '../App.css';
import { Link } from "react-router-dom";
import TaskApp from '../components/useReducer/index'
import ContextApp from '../components/useContext/index'
import ContextWithReducer from '../components/useContextWithReducer/index'
import Position from '../components/hook-position/index'
import Input from '../components/hook-input/index'
import Online from '../components/hook-online/index'
import Fade from '../components/hook-fade/index'
import Counter from '../components/hook-counter/index'
import Lazy from '../components/lazy-markdown/index'
import Memo from '../components/memo/index'
// import Form from './components/hook-form/index'


function App() {
  return (
    <div className="App">
      <Link to={`/about`}>about</Link> | 
      <Link to={`/posts`}>posts</Link>
      <ContextApp />
      <TaskApp />
      <ContextWithReducer ></ContextWithReducer>
      <h1>user hook demo</h1>
      <Position />
      <Input />
      <Online />
      <Fade />
      <Counter />
      <Lazy />
      <Memo/>
      {/* <Form /> */}
    </div>
  );
}

export default App;
