import useInput from './hooks/useInput';
import './App.css';

function App() {
  const maxLen = (value) => value.length < 10;
  const [title, onChange, reset] = useInput('', maxLen)

 const handleReset =() => {
  reset();
 }

  return (
    <div className='App'>
      <h1>Use Hooks</h1>
      <br />
      <input 
      placeholder='이름을 입력하세요' 
      value={title}
      onChange={onChange}
      />
      <button onClick={handleReset}>초기화</button>
    </div>
  );
}

export default App;
