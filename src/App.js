import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
