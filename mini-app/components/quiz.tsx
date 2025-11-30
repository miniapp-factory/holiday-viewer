"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [leaderboard, setLeaderboard] = useState([
    { name: "Alice", score: 3 },
    { name: "Bob", score: 2 },
    { name: "Charlie", score: 1 },
  ]);

  const questions = [
    {
      text: "What is the fastest way to travel from New York to London?",
      image: "/plane.png",
      options: [
        { label: "Car", value: "car", correct: false },
        { label: "Train", value: "train", correct: false },
        { label: "Plane", value: "plane", correct: true },
        { label: "Boat", value: "boat", correct: false },
      ],
    },
    {
      text: "What is the fastest way to travel from Tokyo to Osaka?",
      image: "/train.png",
      options: [
        { label: "Car", value: "car", correct: false },
        { label: "Train", value: "train", correct: true },
        { label: "Plane", value: "plane", correct: false },
        { label: "Boat", value: "boat", correct: false },
      ],
    },
    {
      text: "What is the fastest way to travel from Sydney to Melbourne?",
      image: "/plane.png",
      options: [
        { label: "Car", value: "car", correct: false },
        { label: "Train", value: "train", correct: false },
        { label: "Plane", value: "plane", correct: true },
        { label: "Boat", value: "boat", correct: false },
      ],
    },
    {
      text: "What is the fastest way to travel from Rio de Janeiro to Sao Paulo?",
      image: "/train.png",
      options: [
        { label: "Car", value: "car", correct: false },
        { label: "Train", value: "train", correct: true },
        { label: "Plane", value: "plane", correct: false },
        { label: "Boat", value: "boat", correct: false },
      ],
    },
    {
      text: "What is the fastest way to travel from Cape Town to Johannesburg?",
      image: "/car.png",
      options: [
        { label: "Car", value: "car", correct: true },
        { label: "Train", value: "train", correct: false },
        { label: "Plane", value: "plane", correct: false },
        { label: "Boat", value: "boat", correct: false },
      ],
    },
  ];

  const currentQuestion = questions[current];

  const handleSelect = (option: typeof currentQuestion.options[0]) => {
    setSelectedOption(option.value);
    if (option.correct) {
      setScore(score + 1);
      setFeedback("Correct! +1 point");
    } else {
      setFeedback("Incorrect.");
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      // Quiz finished – update leaderboard mock
      const newEntry = { name: "You", score };
      setLeaderboard([newEntry, ...leaderboard.slice(0, 2)]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">{currentQuestion.text}</h2>
      <img
        src={currentQuestion.image}
        alt="Question image"
        className="w-full h-auto mb-4"
      />
      <div className="grid grid-cols-1 gap-2">
        {currentQuestion.options.map((opt) => (
          <Button
            key={opt.value}
            variant="outline"
            onClick={() => handleSelect(opt)}
          >
            {opt.label}
          </Button>
        ))}
      </div>
      {feedback && (
        <p className={feedback.startsWith("Correct") ? "text-green-600" : "text-red-600"}>{feedback}</p>
      )}
      {current === questions.length && (
        <div className="mt-4">
          <p className="text-green-600">
            Quiz finished! Your score: {score} / {questions.length}
          </p>
          <h3 className="mt-4 text-lg font-semibold">Leaderboard</h3>
          <ul className="list-disc pl-5">
            {leaderboard.map((entry, idx) => (
              <li key={idx}>
                {entry.name}: {entry.score}
              </li>
            ))}
          </ul>
          <a href={`https://twitter.com/intent/tweet?text=I scored ${score} out of ${questions.length} on the Travel Quiz!`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mt-2 block">
            Share on X
          </a>
        </div>
      )}
    </div>
  );
}
