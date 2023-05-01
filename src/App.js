import logo from './logo.svg';
import './App.css';
import Ball from './Ball'
import Lottery from './Lottery'

// function App() {
//   return (
//     <div className="App">
//       <Ball num={17}/>
//       <Ball num={13}/>
//       <Ball num={11}/>
//       <Ball num={7}/>
      
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Lottery/>
      <Lottery title='Mini Daily' maxNum={10} numBalls={4}/>
      
    </div>
  );
}


export default App;
