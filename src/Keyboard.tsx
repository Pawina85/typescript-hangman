import styles from "./Keyboard.module.css";

const KEYS = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"
];

export function Keyboard({ addGuessedLetter }: { addGuessedLetter: (letter: string) => void }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      gap: ".5rem"
    }}>
      {KEYS.map(key => (
        <button
          key={key}
          className={styles.btn}
          onClick={() => addGuessedLetter(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
}
