// app/mcq/page.tsx
"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";

import { units } from "@/lib/questions";

export default function MCQPage() {
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("unit1");

  const currentUnit = units.find((u) => u.id === selectedUnit) || units[0];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Card className="mb-6 border-t-4 border-t-primary">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold">
              QUESTION BANK
            </CardTitle>
            <CardDescription className="text-base md:text-lg mt-4">
              <div className="space-y-2">
                <p>
                  <strong>Program:</strong> EJ
                </p>
                <p>
                  <strong>Semester:</strong> VI
                </p>
                <p>
                  <strong>Course:</strong> EMERGING TRENDS IN ELECTRONICS
                  (22636)
                </p>
              </div>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Toggle Answers Button */}
        <div className="flex justify-end mb-4">
          <Button
            onClick={() => setShowAnswers(!showAnswers)}
            variant={showAnswers ? "default" : "outline"}
            className="gap-2"
          >
            <CheckCircle2 className="h-4 w-4" />
            {showAnswers ? "Hide Answers" : "Show Answers"}
          </Button>
        </div>

        {/* Tabs for Units */}
        <Tabs
          value={selectedUnit}
          onValueChange={setSelectedUnit}
          className="space-y-4"
        >
          <TabsList className="grid w-full grid-cols-5 h-auto">
            {units.map((unit) => (
              <TabsTrigger
                key={unit.id}
                value={unit.id}
                className="text-xs md:text-sm py-2"
              >
                {unit.name.split(":")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {units.map((unit) => (
            <TabsContent key={unit.id} value={unit.id} className="space-y-4">
              <Card className="border-l-4 border-l-primary bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">
                    {unit.name}
                  </CardTitle>
                </CardHeader>
              </Card>

              {/* Questions */}
              {unit.questions.map((q) => (
                <Card key={q.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {/* Question */}
                      <div className="flex gap-2">
                        <Badge variant="outline" className="shrink-0">
                          Q{q.id}
                        </Badge>
                        <p className="font-semibold text-foreground">
                          {q.question}
                        </p>
                      </div>

                      {/* Options */}
                      <RadioGroup className="space-y-2 ml-4">
                        {q.options.map((option) => (
                          <div
                            key={option.id}
                            className={`flex items-center space-x-2 p-3 rounded-lg border transition-colors ${
                              showAnswers && option.isCorrect
                                ? "bg-primary/10 border-primary border-2"
                                : "hover:bg-muted/50"
                            }`}
                          >
                            <RadioGroupItem
                              value={option.id}
                              id={`q${q.id}-${option.id}`}
                              disabled
                            />
                            <Label
                              htmlFor={`q${q.id}-${option.id}`}
                              className={`flex-1 cursor-pointer ${
                                showAnswers && option.isCorrect
                                  ? "font-bold text-primary"
                                  : "text-foreground"
                              }`}
                            >
                              <span className="font-semibold uppercase mr-2">
                                {option.id}.
                              </span>
                              {option.text}
                              {showAnswers && option.isCorrect && (
                                <CheckCircle2 className="inline ml-2 h-5 w-5 text-green-400 " />
                              )}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
