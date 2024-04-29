import React, { useState } from 'react';
import { useEffect } from "react";
import { classNames } from "../utils.js"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

// Then register the languages you need
hljs.registerLanguage('javascript', javascript);

export function Question({ allowChange = true, number, question, answer, code, choices, debug, chooseAnswer }) {

  const [chosen, setChosen] = useState(undefined);

  useEffect(() => {
    hljs.highlightAll();
  }, [])

  return (<div>
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 my-4 block">Question #{number}
      {debug && <button
        onClick={e => { try { eval('(async () => {' + code.replaceAll('console\.log', 'alert') + '})()') } catch (e) { alert('error: ' + e.toString()) } }}
        className='ml-2 px-2 bg-orange-400 shadow-sm rounded-md font-bold inline-block text-sm align-middle'>CLICK HERE TO RUN CODE</button>
      }
    </h1>

    <span className="text-xl">Question: {question}</span>

    <pre><code className="my-4 language-javascript hljs rounded-lg">{code}</code></pre>

    {choices.map((choice, i) => <div key={choice}>
      {"ABCD".charAt(i % 4)}: <button
        onClick={e => { e.preventDefault(); if (chosen === undefined || allowChange) { setChosen(choice); chooseAnswer(choice); } }}
        className={classNames((chosen === choice && (chosen == answer ? 'text-white bg-green-700' : 'text-white bg-red-600')), "p-2 border-[1px] border-gray-800 min-w-56 rounded-md")}>{choice}</button>

      {chosen !== undefined && chosen == choice &&
        <strong className="ml-2">{(choice === answer ? 'Correct!' : 'Incorrect.')}</strong>
      }
    </div>
    )}
  </div>)
}
