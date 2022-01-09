import "./styles.css";
import Timer from "./Timer";
import Countdown from "./Countdown";
export default function App() {
  // const [state, setState] = useState(null);
  // const response = useFetch(`https://api.github.com/search/users?q=masai`);

  return (
    <div className="App">
      <Timer />
      <Countdown />
    </div>
  );
}
