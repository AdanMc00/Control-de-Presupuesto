import React, {useState, useEffect} from 'react'
import './index.css';
import Question from "./components/Question";
import Form from "./components/Form";
import List from './components/List'
import BadgeControl from './components/BadgeControl'
function App() {
    const [badge, saveBadge] = useState(0);
    const [remaining, saveRemaining] = useState(0);
    const [showquestion, setQuestion] = useState(true);
    const [spends, saveSpends] = useState([]);
    const [spend, saveSpend] = useState({});
    const [makespend, saveMakeSpend] = useState(false);
    //useEffect Update remaining
    useEffect(() => {
      if(makespend) {
    // add new badge
          saveSpends([
                  ...spends,
                  spend
              ]
          )
    // quita del presupúesto
    const BadgeRemain = remaining - spend.spendamount;
          saveRemaining(BadgeRemain);


    //reset to false
          saveMakeSpend(false);
      }
    },[spend]); // eslint-disable-line react-hooks/exhaustive-deps

// Add newSpend take spend object  from component Form
//     const addNewSpend = spend => {
//
//     }
    console.log(spends)
    return (
        <div className="container">
            <header>
                <h1>Gasto Semanal</h1>
                <div className="contenido contenido-principal">
                    {showquestion ? (<Question
                            saveBadge={saveBadge}
                            saveRemaining={saveRemaining}
                            setQuestion={setQuestion}
                        />
                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <Form
                                    saveSpend={saveSpend}
                                    saveMakeSpend={saveMakeSpend}
                                />
                            </div>
                            <div className="one-half column">
                                <List
                                spends={spends}
                                />
                                <BadgeControl
                                    badge={badge}
                                    remaining={remaining}
                                />
                            </div>
                        </div>
                    )
                    }
                </div>
            </header>
        </div>
    );
}

export default App;
