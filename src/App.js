import logo from './logo.svg';
import './App.css';
import Garage from './Garage';

import Link from './Link'
import CanvasJSReact from '@canvasjs/react-charts';



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

      <CanvasJSChart options = {options}
		  /* onRef = {ref => this.chart = ref} */
		  />
    </div>
  );
}

export default App;
