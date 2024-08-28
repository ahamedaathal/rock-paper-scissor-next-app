"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hand, Grab, Scissors, LucideIcon } from "lucide-react";

export default function GameInterface() {
  const [computerScore, setComputerScore] = useState(1);
  const [playerScore, setPlayerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("PAPER");
  const [computerChoice, setComputerChoice] = useState("SCISSOR");
  const [result, setResult] = useState("YOU LOSE");

  const handleChoice = (choice: string) => {
    setPlayerChoice(choice);
    // In a real game, you would determine the computer's choice and the result here
  };

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6">
        <div className="text-right mb-6">
          <p className="text-lg font-semibold">Computer : {computerScore}</p>
          <p className="text-lg font-semibold">You : {playerScore}</p>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <ChoiceButton choice="ROCK" Icon={Grab} onClick={handleChoice} />
          <ChoiceButton choice="PAPER" Icon={Hand} onClick={handleChoice} />
          <ChoiceButton
            choice="SCISSORS"
            Icon={Scissors}
            onClick={handleChoice}
          />
        </div>
        <div className="text-center space-y-2">
          <p className="text-lg">You choose {playerChoice}</p>
          <p className="text-lg">Computer choose {computerChoice}</p>
          <div className="bg-destructive/20 text-destructive font-semibold py-2 px-4 rounded">
            {result}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface ChoiceButtonProps {
  choice: string;
  Icon: LucideIcon;
  onClick: (choice: string) => void;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({
  choice,
  Icon,
  onClick,
}) => (
  <Button
    variant="outline"
    size="lg"
    className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-primary border-none hover:bg-primary/90"
    onClick={() => onClick(choice)}
  >
    <Icon size={40} />
  </Button>
);
