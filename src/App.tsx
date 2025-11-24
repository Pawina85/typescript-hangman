import { useEffect, useState } from 'react'
import words from './words.json' 
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'           

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        
        return words[Math.floor(Math.random() * words.length)]
    })
    const [guessdLetters, setGuessedLetters] = useState<string[]>([])
   
    const incorrectLetters = guessdLetters.filter(
        letter => !wordToGuess.includes(letter)
    )
 
    function addGuessedLetters(letter: string) {
        if (guessdLetters.includes(letter)) return

        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if (!key.match(/^[a-z]$/)) return

            e.preventDefault()
            addGuessedLetters(key)
        }
        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [])
    

    return (
  <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "2rem", margin: "0 auto", alignItems: "center" }}>
    <div style={{ fontSize: "2rem", textAlign: "center" }}>
      Lose Win
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessdLetters} wordToGuess={wordToGuess} />
    </div>
    <div style={{ alignSelf: "stretch" }}>
      <Keyboard />
    </div>
  </div>
    )
}

export default App