import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Message from './components/messege';
function App() {
  return (
    <div className="App">
     <Greet name="bruce" title="chakraborty"></Greet> 
     <Welcome/>
     <Message name="muni"/>
    </div>
  );
}

export default App;
