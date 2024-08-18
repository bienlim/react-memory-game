# Memory Game

## Description
The Memory Game is a simple card-matching game built with React. The objective of the game is to select each card only once. This project demonstrates the use of useState and useEffect.

## Features
- Fetches 12 random card data from the Pokémon TCG API on each game start.
- Shuffles the cards randomly for every point.
- Tracks the player's score.
- Creates a new game when a card is clicked twice.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/bienlim/memory-game.git
    ```
2. Navigate to the project directory:
    ```sh
    cd memory-game
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage
1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5173/`.

## Code Overview
### Components
- `Game.jsx`: The main component that handles the game logic, including fetching card data, shuffling cards, and managing the game state.

### State Management
- `useState`: Used to manage the score, high score, selected cards, and the deck of cards.
- `useEffect`: Used to fetch card data from the Pokémon TCG API when the component mounts and update the Displayed High score.

## API
This project uses the [Pokémon TCG API](https://pokemontcg.io/) to fetch card data.

## Acknowledgements
- [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card) for the game mechanics. 
- [Pokémon TCG API](https://pokemontcg.io/) for providing the card data.
- React for the powerful UI library.
- 