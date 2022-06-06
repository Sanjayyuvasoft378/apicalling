import logo from './logo.svg';
import './App.css';
import Api from './redux/action/Api';

import Employee from './Components/Employee';
import { Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     {/* <Employee /> */}
     <Routes>
       <Route path ="/api" element={<Api/>} />
       <Route path ="/" element={<Employee/>} />
     </Routes>
    </div>
  );
}

export default App;
