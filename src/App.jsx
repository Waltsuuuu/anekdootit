import { useState } from 'react'



const App = () => {
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(8).fill(0)); //Inits an array of eight 0's [0, 0, 0 jne..]

  const getRandomAnecdote = () => {
    let randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const handleVote = () => {
    const newVotes = [...votes]; //Creates copy of votes array, for rendering purposes
    newVotes[selected] += 1; //Increments the vote for currently [selected] anecdote. 
    setVotes(newVotes); //Sets the new number of votes for the anecdote
  }

  // The (...)spread operator ensures that you're working with a new copy of the array, maintaining the immutability of the state.
  //Immutability helps React efficiently detect changes, ensuring that your components re-render correctly when the state changes.

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  console.log(selected)


  console.log(votes)

  return (
    <>
        <p>{anecdotes[selected]}</p>
        <p>votes: {votes[selected]}</p>
        <button onClick={getRandomAnecdote}>next anecdote</button>
        <button onClick={handleVote}>give vote</button>
    </>

  )
}

export default App