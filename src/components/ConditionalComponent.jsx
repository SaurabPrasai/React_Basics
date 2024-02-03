import Fruits from "./Fruits";
import Hello from "./Hello";

export default function ConditionalComponent() {
  const display = true;
  return display ? <h1>This is true</h1> : <h1>This is false</h1>;
}
