import './App.css';
import spa from './spa.avif';
import beauty from './beauty.avif';

import { Planner } from './planner';

function App() {
  return (
    <div className='app'>
      <div className='container'>
<img src = { beauty } alt="beauty" width= "200px"/>
      </div>
      <div className='container'>
        <h1>Planner</h1>
      </div>
   <Planner/>
   <div className='container'>
<img src = { spa } width="200px" alt ="day spa"/>
   </div>
    </div>
 
  );
}

export default App;
