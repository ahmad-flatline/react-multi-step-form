import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import "./App.css";
import { useState } from "react";

function App() {
  const steps = 3;
  const [step, setStep] = useState(1);
  const [state, setState] = useState({ firstName: "", lastName: "", age: "" });
  const { firstName, lastName, age } = state;

  const previous = () => {
    setStep(step <= 1 ? step : step - 1);
  };

  const next = (data) => {
    setState({ ...state, ...data });

    setStep(step < steps ? step + 1 : step);
  };

  const handleSubmit = (e) => {
    // Todo: Here you can make the api request, E.g. send the data to server
    e.preventDefault();

    console.log("Here all the data: ", state);
  };

  return (
    <div className="App">
      <h1>Multi-step From </h1>
      <form onSubmit={handleSubmit}>
        {step === 1 && <Step1 previous={previous} next={next} firstName={firstName} lastName={lastName} />}
        {step === 2 && <Step2 previous={previous} next={next} age={age} />}
        {step === 3 && <Step3 data={state} />}
      </form>
    </div>
  );
}

export default App;
