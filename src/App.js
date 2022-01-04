import UserFormScreen from './Components/UserFormScreen';
import UserDisplay from './Components/UserDisplay';
import NavBar from './Components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
    <NavBar/>
    <UserFormScreen></UserFormScreen>
    <UserDisplay/>
    </div>
  );
}

export default App;
