import './App.css';
import { AddEvent } from './components/AddEvent';

function App() {
  return (
    <div className="container mt-3" >
      <div className="col-md-5">
      <fieldset>
            <AddEvent />
      </fieldset>
      </div>
    </div>
  );
}

export default App;
