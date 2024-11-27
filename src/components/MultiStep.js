import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TodoContext";
import { FormValidation } from "./FormValidation";

// Step 1 Component
const Step2 = ({ onNext }) => {
  const [topic, setTopic] = useState("");

  const handleNext = () => {
    if (topic) {
      onNext();
    } else {
      alert("Topic is required");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter your topic"
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

// step 3
const Step3 = () => {
  const { addTask } = useContext(TaskContext);
  const [todo, setTodo] = useState("");
  const handleCLick = () => {
    addTask({ id: Date.now(), text: todo });
  };
  return (
    <>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Your Todo"
      />
      <button onClick={handleCLick}>Submit</button>
    </>
  );
};

// Main Form Wizard Component
export const FormWizard = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div>
      {step === 1 && <FormValidation onNext={nextStep} />}
      {step === 2 && <Step2 onBack={prevStep} onNext={nextStep} />}
      {step === 3 && <Step3 />}
    </div>
  );
};
