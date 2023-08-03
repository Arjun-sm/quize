import React, { useEffect, useMemo, useState } from 'react'
import "./App.css"
import Trivia from './componets/Trivia';
import Timer from './componets/Timer';
import Start from './componets/Start';


export default function App() {
  const [username, setUsername] = useState(null);

  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$: 0")

  const data = [
    {
      id: 1,
      question: "Which type of JOIN is used to returns rows that do not have matching values?",
      answers: [
        { text: "Natural join", correct: false, },
        { text: "Outer join", correct: true, },
        { text: "EQUI JOIN", correct: false, },
        { text: "All of the above", correct: false, },

      ]
    },

    {
      id: 2,
      question: "Which one of the following is not a real time operating system?",
      answers: [
        { text: "RTLinux", correct: false, },
        { text: "Palm OS", correct: true, },
        { text: "QNX", correct: false, },
        { text: "VxWorks", correct: false, },

      ]
    },

    {
      id: 3,
      question: "Which of the following is not a valid SQL type?",
      answers: [
        { text: "FLOAT", correct: false, },
        { text: "NUMERIC", correct: false, },
        { text: "DECIMAL", correct: true, },
        { text: "CHARACTER", correct: false, },

      ]
    },

    {
      id: 4,
      question: "What is returned by INSTR ('JAVAT POINT', 'P')?",
      answers: [
        { text: "6", correct: false, },
        { text: "7", correct: true, },
        { text: "POINT", correct: false, },
        { text: "JAVAT", correct: false, },

      ]
    },

    {
      id: 5,
      question: "A command that lets you change one or more field in a table is:",
      answers: [
        { text: "INSERT", correct: false, },
        { text: "MODIFY", correct: true, },
        { text: "LOOK-UP", correct: false, },
        { text: "All of the above", correct: false, },

      ]
    },

    {
      id: 6,
      question: "_______ clause creates temporary relation for the query on which it is defined.",
      answers: [
        { text: "WITH", correct: true, },
        { text: "FROM", correct: false, },
        { text: "WHERE", correct: false, },
        { text: "SELECT", correct: false, },

      ]
    },

    {
      id: 7,
      question: "Which command is used to change the definition of a table in SQL?",
      answers: [
        { text: "CREATE", correct: false, },
        { text: "UPDATE", correct: false, },
        { text: "ALTER", correct: true, },
        { text: "SELECT", correct: false, },

      ]
    },

    {
      id: 8,
      question: "Group of operations that form a single logical unit of work is known as",
      answers: [
        { text: "view", correct: false, },
        { text: "Network", correct: false, },
        { text: "Unit", correct: false, },
        { text: "Transaction", correct: true, },

      ]
    },

    {
      id: 9,
      question: " A sequence in SQL can generate a maximum number:",
      answers: [
        { text: " 39 digits", correct: false, },
        { text: "37 digits ", correct: false, },
        { text: " 40 digits", correct: false, },
        { text: " 38 digits", correct: true, },

      ]
    },

    {
      id: 10,
      question: "Which operator is used to compare the NULL values in SQL? ",
      answers: [
        { text: "Equal ", correct: false, },
        { text: " IN", correct: false, },
        { text: "IS ", correct: true, },
        { text: " None of Above", correct: false, },

      ]
    },

    {
      id: 11,
      question: "  Which of the following operator can be used with a multiple-row subquery?",
      answers: [
        { text: "= ", correct: false, },
        { text: " BETWEEN", correct: false, },
        { text: " NOT IN", correct: true, },
        { text: " <>", correct: false, },

      ]
    },

    {
      id: 12,
      question: "_______ is a constraint that can be defined only at the column level? ",
      answers: [
        { text: "UNIQUE ", correct: false, },
        { text: "NOT NULL", correct: true, },
        { text: "CHECK ", correct: false, },
        { text: "PRIMARY KEY ", correct: false, },

      ]
    },


    {
      id: 13,
      question: " Which of the following tool is used for purpose of data auditing for SQL Server only? ",
      answers: [
        { text: "Idera ", correct: false, },
        { text: "ApexSQL ", correct: true, },
        { text: " SQL Ninja", correct: false, },
        { text: "SQL Audit ", correct: false, },

      ]
    },

    {
      id: 14,
      question: "What operator tests column for absence of data ",
      answers: [
        { text: " NOT Operator", correct: false, },
        { text: "Exists Operator ", correct: false, },
        { text: " IS NULL Operator", correct: true, },
        { text: "None of the above ", correct: false, },

      ]
    },


    {
      id: 15,
      question: "The SQL statement   SELECT ROUND (65.726, -1) FROM DUAL;   ",
      answers: [
        { text: "is illegal ", correct: false, },
        { text: "garbage ", correct: true, },
        { text: " 726", correct: false, },
        { text: "70 ", correct: false, },

      ]
    },


    

   
  ]

  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 3000" },
      { id: 8, amount: "$ 4000" },
      { id: 9, amount: "$ 5000" },
      { id: 10, amount: "$ 80000" },
      { id: 11, amount: "$ 160000" },
      { id: 12, amount: "$ 320000" },
      { id: 13, amount: "$ 640000" },
      { id: 14, amount: "$ 1280000" },
      { id: 15, amount: "$ 1500000" },
    ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);

  }, [moneyPyramid, questionNumber])
  return (
    <div className='app'>

      {username ? (
        <>


          <div className="main"  >
            {stop ? (
              <h1 className='endText'> You earned: {earned} </h1>
            ) : (
              <>

                <div className="top">
                  <div className="timer"> <Timer setStop={setStop} questionNumber={questionNumber} /> </div>
                </div>
                <div className="bottom">
                  <Trivia data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}

                  /> </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="moneyList" >
              {moneyPyramid.map((m) => (


                <li className={questionNumber == m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id} </span>
                  <span className="moneyListItemAmount">{m.amount} </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}

    </div>
  );
}
