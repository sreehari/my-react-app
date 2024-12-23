import logo from './logo.svg';
import './App.css';
import Garage from './Garage';

import Link from './Link';

function App() {
  const options = {
    title: {
      text: "Basic Column Chart in React"
    },
    data: [{
      type: "column",
      dataPoints: [
      { label: "Apple",  y: 10  },
      { label: "Orange", y: 15  },
      { label: "Banana", y: 25  },
      { label: "Mango",  y: 30  },
      { label: "Grape",  y: 28  }
      ]
    }]
    }

  return (
    <div className="App">
      <h1>hello</h1>

      <Link linkText="About"/>
      <Link linkText="Store"/>
      <Link linkText="About"/>
      <Link linkText="About"/>

      <Garage></Garage>
    </div>
  );
}

export default App;
