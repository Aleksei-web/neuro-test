import React, {useState} from 'react';
import './App.css';
import {Speed} from "./screen/Speed";
import {Solutions} from "./screen/solutions/Solutions";
import {Numbers} from "./screen/numbers/Numbers";
import {ConsistentNumbers} from "./screen/consitens-numbers/ConsistentNumbers";
import {Synchronic} from "./screen/synchronic/Synchronic";
import {Equivalence} from "./screen/equivalence/Equivalence";
import {CoordinationBall} from "./screen/coordination-ball/CoordinationBall";
import {ConsistentBalls} from "./screen/consistent-balls/ConsistentBalls";

const testList = [
  {name: 'скорость', type: 'Speed', idx: 0},
  {name: 'принятие решений', type: 'Solutions', idx: 1},
  {name: 'обработка информации', type: 'Numbers', idx: 2},
  {name: 'последовательный', type: 'ConsistentNumbers', idx: 3},
  {name: 'синхронизация', type: 'Synchronic', idx: 4},
  {name: 'эквивалентность', type: 'Equivalence', idx: 5},
  {name: 'координация', type: 'CoordinationBall', idx: 6},
  {name: 'концентарция', type: 'ConsistentBalls', idx: 7},
]

function App() {
  const [test, setTest] = useState(0)

  const handlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    setTest(parseInt(e.target.value))
  }

  const renderTest = () => {
    switch (test) {
      case 0:
        return <Speed/>;
      case 1:
        return <Solutions/>;
      case 2:
        return <Numbers/>;
      case 3:
        return <ConsistentNumbers/>
      case 4:
        return <Synchronic/>
      case 5:
        return <Equivalence/>
      case 6:
        return <CoordinationBall/>
      case 7:
        return <ConsistentBalls/>
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <div style={{width: '200px', marginTop: '40px',}}>
          <h3>Выберите тест</h3>
          <select className="form-select" aria-label="выберите тест" onChange={handlerSelect}>
            {testList.map(el => <option key={el.name} value={el.idx}>{el.name}</option>)}
          </select>
        </div>
      </div>

      <div className="screen-container">
        {renderTest()}
      </div>
    </div>
  );
}

export default App;
