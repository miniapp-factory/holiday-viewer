"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Which of these destinations is known for its beautiful beaches and tropical climate?",
      image: "/beach.png",
      options: [
        { label: "Hawaii, USA", value: "hawaii", correct: true },
        { label: "Bali, Indonesia", value: "bali", correct: true },
        { label: "Paris, France", value: "paris", correct: false },
        { label: "Kyoto, Japan", value: "kyoto", correct: false },
      ],
    },
    {
      text: "Which city is famous for its historic canals and gondolas?",
      image: "/canals.png",
      options: [
        { label: "Venice, Italy", value: "venice", correct: true },
        { label: "Amsterdam, Netherlands", value: "amsterdam", correct: true },
        { label: "Barcelona, Spain", value: "barcelona", correct: false },
        { label: "Lisbon, Portugal", value: "lisbon", correct: false },
      ],
    },
    {
      text: "Which destination is known for its iconic Eiffel Tower?",
      image: "/eiffel.png",
      options: [
        { label: "Paris, France", value: "paris", correct: true },
        { label: "London, UK", value: "london", correct: false },
        { label: "Berlin, Germany", value: "berlin", correct: false },
        { label: "Rome, Italy", value: "rome", correct: false },
      ],
    },
    {
      text: "Which place is famous for its ancient ruins and Mediterranean climate?",
      image: "/rome.png",
      options: [
        { label: "Rome, Italy", value: "rome", correct: true },
        { label: "Athens, Greece", value: "athens", correct: true },
        { label: "Cairo, Egypt", value: "cairo", correct: false },
        { label: "Istanbul, Turkey", value: "istanbul", correct: false },
      ],
    },
    {
      text: "Which destination is known for its vibrant nightlife and beaches?",
      image: "/barcelona.png",
      options: [
        { label: "Barcelona, Spain", value: "barcelona", correct: true },
        { label: "Miami, USA", value: "miami", correct: true },
        { label: "Tokyo, Japan", value: "tokyo", correct: false },
        { label: "Seoul, South Korea", value: "seoul", correct: false },
      ],
    },
    {
      text: "Which city is famous for its historic temples and cherry blossoms?",
      image: "/kyoto.png",
      options: [
        { label: "Kyoto, Japan", value: "kyoto", correct: true },
        { label: "Beijing, China", value: "beijing", correct: false },
        { label: "Seoul, South Korea", value: "seoul", correct: false },
        { label: "Bangkok, Thailand", value: "bangkok", correct: false },
      ],
    },
    {
      text: "Which destination is known for its stunning fjords and midnight sun?",
      image: "/oslo.png",
      options: [
        { label: "Oslo, Norway", value: "oslo", correct: true },
        { label: "Reykjavik, Iceland", value: "reykjavik", correct: true },
        { label: "Stockholm, Sweden", value: "stockholm", correct: false },
        { label: "Helsinki, Finland", value: "helsinki", correct: false },
      ],
    },
    {
      text: "Which place is famous for its ancient pyramids and desert landscapes?",
      image: "/cairo.png",
      options: [
        { label: "Cairo, Egypt", value: "cairo", correct: true },
        { label: "Marrakesh, Morocco", value: "marrakesh", correct: true },
        { label: "Dubai, UAE", value: "dubai", correct: false },
        { label: "Tel Aviv, Israel", value: "telaviv", correct: false },
      ],
    },
    {
      text: "Which destination is known for its vibrant street markets and spicy food?",
      image: "/bangkok.png",
      options: [
        { label: "Bangkok, Thailand", value: "bangkok", correct: true },
        { label: "Mumbai, India", value: "mumbai", correct: true },
        { label: "Seoul, South Korea", value: "seoul", correct: false },
        { label: "Jakarta, Indonesia", value: "jakarta", correct: false },
      ],
    },
    {
      text: "Which city is famous for its iconic skyline and skyscrapers?",
      image: "/newyork.png",
      options: [
        { label: "New York, USA", value: "newyork", correct: true },
        { label: "Chicago, USA", value: "chicago", correct: false },
        { label: "San Francisco, USA", value: "sanfrancisco", correct: false },
        { label: "Los Angeles, USA", value: "losangeles", correct: false },
      ],
    },
  ];

  const currentQuestion = questions[current];

  const handleSelect = (option: typeof currentQuestion.options[0]) => {
    setSelected(option.value);
    if (option.correct) setScore(score + 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {current < questions.length ? (
        <>
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
                variant={selected === opt.value ? "default" : "outline"}
                onClick={() => handleSelect(opt)}
              >
                {opt.label}
              </Button>
            ))}
          </div>
          {selected && (
            <div className="mt-4">
              {currentQuestion.options.find((o) => o.value === selected)?.correct ? (
                <p className="text-green-600">Correct! You earned {score} point(s).</p>
              ) : (
                <p className="text-red-600">Incorrect. Try again.</p>
              )}
            </div>
          )}
          <div className="mt-4 flex justify-end">
            <Button onClick={handleNext} disabled={!selected}>
              {current === questions.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Quiz Complete!</h2>
          <p className="text-lg">Your score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
}
