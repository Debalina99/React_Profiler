import './App.css';
import { useState, Profiler } from 'react';
import Input from './components/Input';
import Counter from './components/Counter';

function App() {
  const [data, setData] = useState({ name: '' });
  const onChangeEvent = (e) => {
    let res = { ...data }
    res[e.target.name] = e.target.value;
    setData(res);
  }
  const callback = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)
  }
  return (
    <div className="App">
      <Profiler id="input" onRender={callback}>
        <Input value={data.name} name="name" placeholder='Name' onChangeEvent={onChangeEvent} type='text' />
      </Profiler>
      <Profiler id="counter" onRender={callback}>
        <Counter />
      </Profiler>
    </div>
  );
}

export default App;
