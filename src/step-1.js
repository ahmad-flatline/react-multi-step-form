import { useState } from "react";

function Step1({ previous, next, firstName, lastName }) {
  const [state, setState] = useState({ firstName, lastName });
  const [isDisabled, setDisabled] = useState(true);

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
    setDisabled(false);
  };

  const handleNext = () => {
    // Todo: Validation goes here, E.g. check if the state has all the data you want before passing it to the parent component
    next(state);
  };

  return (
    <div className="step-one">
      <h2>Step ( 1 )</h2>
      <input type="text" name="firstName" value={state.firstName} onChange={handleChange} />
      <input type="text" name="lastName" value={state.lastName} onChange={handleChange} />
      <button type="button" onClick={previous}>
        Previous
      </button>
      <button type="button" onClick={handleNext} disabled={isDisabled}>
        Next
      </button>
    </div>
  );
}

export default Step1;
