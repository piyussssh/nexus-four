"use client";
import TextareaAutosize from "react-textarea-autosize";
export default function FaqInput() {
  return (
    <div className="py-4 cont gap-4">
      <input
        className="input w-full focus:outline-none input-lg text-xl"
        placeholder="Question..."
      />
      <TextareaAutosize
        minRows={3}
        className="input w-full focus:outline-none input-lg py-1 text-lg resize-none"
        placeholder="Answere..."
      />
      <button className="btn btn-primary btn-base w-fit">Save FAQ</button>
    </div>
  );
}
