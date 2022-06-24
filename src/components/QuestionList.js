import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(questions => setQuestions(questions))
  }, [])

  function onDeleteClick(id){
    fetch(`http://localhost:4000/questions${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => setQuestions(questions.filter(item => item.id !== id)))
  }

  function onAnswerChange(id, correctIndex){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex,
      }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => setQuestions(updatedQuestion));
    }

  
  const questionItems = questions.map((q) => (
    <QuestionItem
      key={q.id}
      question={q}
      onDeleteClick={onDeleteClick}
      onAnswerChange={onAnswerChange}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
