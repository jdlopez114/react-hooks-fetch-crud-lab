import React from "react";

function QuestionItem({ question, onDeleteClick, onAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

function handleDelete(){
  onDeleteClick(id)
}

function handleOnAnswerChange(e){
  onAnswerChange(id, e.target.value)
}
  
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleOnAnswerChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}> Delete Question</button>
    </li>
  );
}

export default QuestionItem;
