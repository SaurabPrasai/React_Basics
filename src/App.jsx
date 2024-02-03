import ConditionalComponent from "./components/ConditionalComponent";
import { Form } from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/message";

function App() {
  const array = [1, 2, 3, 4, 5];

  const student = {
    name: "Sudip Niroula",
    rollNo: 34,
    address: "Birtamode",
  };
  return (
    <>
      {/* <Hello array={array} student={student}/> */}
      {/* <Fruits /> */}
      {/* <ConditionalComponent/> */}
      {/* <Message /> */}
      <Form/>
    </>
  );
}

export default App;
