"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([
    { name: "Alice", score: 3 },
    { name: "Bob", score: 2 },
    { name: "Charlie", score: 1 },
  ]);

  const questions = [
    {
      text: "Which of these destinations is known for its beautiful beaches and tropical climate?",
      image: "/boat.png",
      options: [
        { label: "Hawaii, USA", value: "hawaii", correct: true },
        { label: "Bali, Indonesia", value: "bali", correct: true },
        { label: "Paris, France", value: "paris", correct: false },
        { label: "Kyoto, Japan", value: "kyoto", correct: false },
      ],
    },
    {
      text: "Which mode of transport is typically the fastest for long distances?",
      image: "/aeroplane.png",
      options: [
        { label: "Car", value: "car", correct: false },
        { label: "Coach", value: "coach", correct: false },
        { label: "Boat", value: "boat", correct: false },
        { label: "Airplane", value: "airplane", correct: true },
      ],
    },
    {
      text: "What is the best way to travel between cities in Europe for comfort and speed?",
      image: "/coach.png",
      options: [
        { label: "Train", value: "train", correct: true },
        { label: "Car", value: "car", correct: false },
        { label: "Boat", value: "boat", correct: false },
        { label: "Airplane", value: "airplane", correct: false },
      ],
    },
    {
      text: "Which vehicle is most suitable for a scenic road trip across the countryside?",
      image: "/car.png",
      options: [
        { label: "Car", value: "car", correct: true },
        { label: "Coach", value: "coach", correct: false },
        { label: "Boat", value: "boat", correct: false },
        { label: "Airplane", value: "airplane", correct: false },
      ],
    },
    {
      text: "Which of these is a popular cruise destination?",
      image: "/boat.png",
      options: [
        { label: "Caribbean", value: "caribbean", correct: true },
        { label: "Alps", value: "alps", correct: false },
        { label: "Sahara", value: "sahara", correct: false },
        { label: "Amazon", value: "amazon", correct: false },
      ],
    },
  ];

  const currentQuestion = questions[current];

  const handleSelect = (option: typeof currentQuestion.options[0]) => {
    if (option.correct) {
      setScore(score + 1);
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
        </div>
      )}
    </div>
  );
}
