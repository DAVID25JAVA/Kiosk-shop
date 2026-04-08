"use client";

import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import QuestionScreen from "./QuestionScreen";
import ConfirmDialog from "./ConfirmDialog";
import ThankYouScreen from "./ThankYou";

export default function SurveyKiosk() {
  const QUESTIONS = [
    { id: 1, text: "How satisfied are you?", type: "rating", scale: 5 },
    { id: 2, text: "Price fairness?", type: "rating", scale: 5 },
    { id: 3, text: "Value for money?", type: "rating", scale: 5 },
    { id: 4, text: "Recommend us?", type: "rating", scale: 10 },
    { id: 5, text: "Improve service?", type: "text" },
  ];

  const [screen, setScreen] = useState("WELCOME");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (val) => {
    setAnswers({ ...answers, [QUESTIONS[index].id]: val });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">

      {screen === "WELCOME" && (
        <WelcomeScreen onStart={() => setScreen("QUESTION")} />
      )}

      {screen === "QUESTION" && (
        <QuestionScreen
          question={QUESTIONS[index]}
          questionIndex={index}
          totalQuestions={QUESTIONS.length}
          answer={answers[QUESTIONS[index].id]}
          onAnswer={handleAnswer}
          onNext={() =>
            index < QUESTIONS.length - 1
              ? setIndex(index + 1)
              : setScreen("CONFIRM")
          }
          onPrev={() => index > 0 && setIndex(index - 1)}
          onSkip={() =>
            index < QUESTIONS.length - 1
              ? setIndex(index + 1)
              : setScreen("CONFIRM")
          }
        />
      )}

      {screen === "CONFIRM" && (
        <ConfirmDialog
          onConfirm={() => setScreen("THANKYOU")}
          onCancel={() => setScreen("QUESTION")}
        />
      )}

      {screen === "THANKYOU" && (
        <ThankYouScreen onFinish={() => setScreen("WELCOME")} />
      )}
    </div>
  );
}