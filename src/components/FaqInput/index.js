"use client";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
export default function FaqInput() {
  const [faq, setFaq] = useState({ que: "", ans: "" });

  const handleQuestionChange = (e) => {
    setFaq({ ...faq, que: e.target.value });
  };

  const handleAnswerChange = (e) => {
    setFaq({ ...faq, ans: e.target.value });
  };

  const handleSave = () => {
  };
  return (
    <div className="py-4 cont gap-4">
      <input
        value={faq.question}
        onChange={handleQuestionChange}
        className="input w-full focus:outline-none input-lg text-xl"
        placeholder="Question..."
      />
      <TextareaAutosize
        value={faq.answer}
        onChange={handleAnswerChange}
        minRows={3}
        className="input w-full focus:outline-none input-lg py-1 text-lg resize-none"
        placeholder="Answer..."
      />
      <button onClick={handleSave} className="btn btn-primary btn-base w-fit">
        Save FAQ
      </button>
    </div>
  );
}
