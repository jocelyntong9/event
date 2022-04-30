import './App.css';
import { AddEvent } from './components/AddEvent';
import Cards from './components/Card';

function App() {
  return (
    <div>
      <div className='view'>
        <div className="container mt-5" >
          <div className="desc">
            <h1>Input your new event here</h1>
          </div>
          <div className="col-md-5">
            <div className="test">
              <AddEvent />
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <h1>Event List</h1>
      </div>
    </div>
  );
}

export default App;
