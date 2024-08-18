import { useState , useEffect } from 'react';
import Header from './Header';
import Board from './Board';



export default  function Game() {
    const [score, setScore] = useState(0);
    const [selectedCards, setSelectedCards] = useState([]);
    const [cards, setCards] = useState([])
    const [highScore, setHighScore] = useState(0);
    const [gameCount, setGameCount] = useState(1);

    useEffect(() => {
      fetch(`https://api.pokemontcg.io/v2/cards?page=${Math.floor(Math.random() * 20) + 1}&pageSize=12`)
      .then((response) => response.json())
      .then((data) => {
        setCards(data.data);
        console.log(data)
      })
    }, [gameCount]);

    useEffect(() => {
        if (score >= highScore) {
            setHighScore(score);
        }
    }, [score])
  
    const shuffleArray = array => array.sort(() => Math.random() - 0.5);

    function handleClick(cardId) {
        console.log(selectedCards);
        console.log(cardId);
        if (selectedCards.includes(cardId)) {
            setScore(0);
            setSelectedCards([]);
            setGameCount(gameCount+1)
        } else {
            setScore(score + 1);
            setCards(shuffleArray(cards));
            setSelectedCards([...selectedCards, cardId]);
        }
        
    }
 
    return (
        <div className='border-gray-300 border-2 rounded-md p-4 bg-white'>
            <Header score={score} highScore={highScore} gameCount={gameCount}/>
            <Board cards={cards} cardClick={handleClick}/>
        </div>
    )
}