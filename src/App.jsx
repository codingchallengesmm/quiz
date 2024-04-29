import { Nav } from "./components/Nav"
import { Question } from "./components/Question"
import './App.css'
import { questions } from './questions/javascript.js'
import { useState } from "react"

async function checkAnswers(questions, answers) {
  let correct = 0
  let wrong = 0
  let total = 0

  for (let i = 0; i < questions.length; i++) {
    if (answers[i] !== undefined && answers[i] == questions[i].answer) {
      correct++;
    } else {
      wrong++;
    }
    total++;
  }

  return { correct, wrong, total }
}

function App() {
  const [debug, setDebug] = useState(false);
  const [allowChange, setAllowChange] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(undefined)


  const checkAnswersAsync = async () => {
    let checkedAnswers = await checkAnswers(questions, answers);

    setResults(checkedAnswers);
  }

  return (<>
    <div className="min-h-full">
      <Nav />

      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Javascript Questions</h1>
        </div>
      </header>

      <main className="px-2 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="flex gap-8">

          <h2 className="text-xl">Debug setings: </h2>

          <div>
            <input type="checkbox" name="" id="debug" checked={debug} onChange={e => { setDebug(!debug) }} />
            &nbsp;
            <label htmlFor="debug" className="text-lg">Show "Run Code" Button</label>
          </div>

          <div>
            <input type="checkbox" name="" id="allowChange" checked={allowChange} onChange={e => { setAllowChange(!allowChange) }} />
            &nbsp;
            <label htmlFor="allowChange" className="text-lg">Allow Changing Answer</label>
          </div>

        </div>


        {results && <>
          <h1 className='mt-4 font-bold text-3xl'>Your Results: {results.correct} / {results.total} Correct. {parseInt(results.correct / results.total * 100)}%
          </h1>

          <button className="text-white bg-green-700 p-2 rounded-md my-4" onClick={() => {setAnswers({}); setResults(undefined); setIndex(0)}}>RESTART</button>
        </>}

        {!results && <>
          <Question
            debug={debug} {...questions[index]}
            number={`${index + 1}/${questions.length}`}
            key={questions[index].code}
            allowChange={allowChange}
            chooseAnswer={(choice) => {
              setAnswers((old) => {
                let newAnswers = { ...old };
                newAnswers[index] = choice;
                return newAnswers;
              });
            }}
          />

          {answers[index] !== undefined && index < questions.length - 1 && <button onClick={(e) => { e.preventDefault(); if (index < questions.length - 1) { setIndex(i => i + 1) } else { alert("You've reached the end.") } }} className="my-4 px-4 py-2 bg-green-700 text-white rounded-md">NEXT</button>}

          {answers[index] !== undefined && index >= questions.length - 1 &&
            <button className="my-4 px-4 py-2 bg-green-700 text-white rounded-md" onClick={checkAnswersAsync}>CHECK RESULT</button>
          }

        </>}

      </main>
    </div>
  </>)

}

export default App
