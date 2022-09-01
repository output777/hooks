import { useState } from 'react';
import './App.css';

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {value} = e.target;
    setValue(value);
  }
  return {value, onChange};
}


function App() {
  const name = useInput('')
  console.log(name);
  return (
    <div className='App'>
      <h1>Use Hooks</h1>
      <br />
      <input {...name} placeholder='이름을 입력하세요' />
    </div>
  );
}

export default App;
