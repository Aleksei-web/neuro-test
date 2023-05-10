import React from 'react';
import './App.css';
import {Speed} from "./screen/Speed";
import {Solutions} from "./screen/Solutions";
import {Numbers} from "./screen/numbers/Numbers";
import {RangeNumbers} from "./components/range-numbers/RangeNumbers";
import {ConsistentNumbers} from "./screen/consitens-numbers/ConsistentNumbers";
import {Synchronic} from "./screen/synchronic/Synchronic";
import {Equivalence} from "./screen/equivalence/Equivalence";
import {CoordinationBall} from "./screen/coordination-ball/CoordinationBall";
import {ConsistentBalls} from "./screen/consistent-balls/ConsistentBalls";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <div className="screen-container">
        <ConsistentBalls/>
      </div>
    </div>
  );
}

export default App;
