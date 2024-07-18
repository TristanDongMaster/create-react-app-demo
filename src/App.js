import './App.css';
import TaskApp from './components/useReducer/index'
import ContextApp from './components/useContext/index'
import ContextWithReducer from './components/useContextWithReducer/index'
import Position from './components/hook-position/index'
import Input from './components/hook-input/index'
import Online from './components/hook-online/index'
import Fade from './components/hook-fade/index'
import Counter from './components/hook-counter/index'



function App() {
  return (
    <div className="App">
      <ContextApp />
      <TaskApp />
      <ContextWithReducer ></ContextWithReducer>
      <h1>user hook demo</h1>
      <Position />
      <Input />
      <Online />
      <Fade />
      <Counter />
    </div>
  );
}

export default App;
