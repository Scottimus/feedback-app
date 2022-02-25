import React, {useState} from 'react'

function Feedback() {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

function goodVote(event) {
    console.log("goodVote called")
    setGood(good+1)
}

function neutralVote(event) {
    console.log("neutralVote called")
    setNeutral(neutral+1)
}

function badVote(event) {
    console.log("badVote called")
    setBad(bad+1)
}

  return (
    <div>
        <h1>Give Feedback</h1>
        <button onClick={goodVote}>Good</button>
        <button onClick={neutralVote}>Neutral</button>
        <button onClick={badVote}>Bad</button>
        
        <h1>Statistics</h1>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
    </div>
  )
}

export default Feedback