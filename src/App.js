import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
     <Greet name="bruce" title="chakraborty"></Greet> 
     <Welcome/>
    </div>
  );
}

export default App;
