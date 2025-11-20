"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Quiz() {
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);

  const question = {
    text: "Which of these destinations is known for its beautiful beaches and tropical climate?",
    image: "/beach.png",
    options: [
      { label: "Hawaii, USA", value: "hawaii", correct: true },
      { label: "Bali, Indonesia", value: "bali", correct: true },
      { label: "Paris, France", value: "paris", correct: false },
      { label: "Kyoto, Japan", value: "kyoto", correct: false },
    ],
  };

  const handleSelect = (option: typeof question.options[0]) => {
    setSelected(option.value);
    if (option.correct) setScore(score + 1);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">{question.text}</h2>
      <img src={question.image} alt="Question image" className="w-full h-auto mb-4" />
      <div className="grid grid-cols-1 gap-2">
        {question.options.map((opt) => (
          <Button
            key={opt.value}
            variant={selected === opt.value ? "default" : "outline"}
            onClick={() => handleSelect(opt)}
          >
            {opt.label}
          </Button>
        ))}
      </div>
      {selected && (
        <div className="mt-4">
          {question.options.find((o) => o.value === selected)?.correct ? (
            <p className="text-green-600">Correct! You earned {score} point(s).</p>
          ) : (
            <p className="text-red-600">Incorrect. Try again.</p>
          )}
        </div>
      )}
    </div>
  );
}
