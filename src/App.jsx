import { useState } from 'react';
import Scoredboard from './components/Scoreboard';
import SelectionView from './components/SelectionView';
import Rules from './components/Rules';
import RulesModal from './components/RulesModal';

function App() {
  const [score, setScore] = useState(0);
  const [showRulesModal, setShowRulesModal] = useState(false);

  return (
    <div className="relative flex flex-col bg-gradient h-[100vh] min-h-[750px] max-h-[1244px]">
      <Scoredboard score={score} />
      <SelectionView score={score} setScore={setScore} />
      <Rules setShowRulesModal={setShowRulesModal} />
      {showRulesModal &&
        <>
          <div className="absolute opacity-50 z-[15000] bg-header-outline h-full w-full"></div>
          <RulesModal setShowRulesModal={setShowRulesModal} />
        </>
      }
    </div>
  )
}

export default App;