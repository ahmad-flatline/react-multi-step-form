import { useState } from "react";

function Step2({ previous, next, age }) {
  const [ageYears, setAgeYears] = useState(age);
  const [isDisabled, setDisabled] = useState(true);

  const handleChange = ({ target }) => {
    setAgeYears(target.value);
    setDisabled(false);
  };

  const handleNext = () => {
    // Todo: Validation goes here, E.g. check if the state has all the data you want before passing it to the parent component
    next({ age: ageYears });
  };

  return (
    <div className="step-one">
      <h2>Step ( 2 )</h2>
      <input type="text" value={ageYears} onChange={handleChange} />
      <button type="button" onClick={previous}>
        Previous
      </button>
      <button type="button" onClick={handleNext} disabled={isDisabled}>
        Next
      </button>
    </div>
  );
}

export default Step2;
