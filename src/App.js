import "./styles.css";
import AnimatedTextWord from "./AnimatedTextWord";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

export default function App() {
  return (
    <div className="App">
      <AnimatedTextWord text="animated words" />
      <AnimatedTextCharacter text="animated characters" />
    </div>
  );
}
