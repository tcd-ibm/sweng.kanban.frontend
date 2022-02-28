import logo from './logo.svg';
import './App.css';
import KBCard from './Componenets/Card.jsx'

const data = [{title:"Test title" , desc: "1234"}, {title: "title test", desc: "4321"}, {title: "group 31", desc: "100000"} ];

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      
      { data?.map( card => 
      <KBCard title={card?.title} desc={card?.desc}/>
      )
    }
    </div>
  );
}

export default App;
