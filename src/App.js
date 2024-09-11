import Header from './components/Header';
import Inputs from './components/Inputs';
import './App.css';
import './index.css';

function App() {
  return (
    <>
    <div className="container mt-5">
    <Header title='BMI Calculator' />
    <Inputs/>
    </div>
    </>
  );
}

export default App;
