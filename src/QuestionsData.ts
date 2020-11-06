export interface QuestionData {
  questionId: number;
  title: string;
  content: string;
  userName: string;
  created: Date;
  answers: AnswerData[];
}

export interface AnswerData {
  answerId: number;
  content: string;
  userName: string;
  created: Date;
}

const questions: QuestionData[] = [
  {
    questionId: 1,
    title: "Why should I learn TypeScript?",
    content:
      "TypeScript seems to be getting popular so I wondered whether it is worth my time learning it? What benefits does it give over JavaScript?",
    userName: "Bob",
    created: new Date(),
    answers: [
      {
        answerId: 1,
        content: "To catch problems earlier speeding up your developments",
        userName: "Jane",
        created: new Date(),
      },
      {
        answerId: 2,
        content:
          "So, that you can use the JavaScript features of tomorrow,today",
        userName: "Fred",
        created: new Date(),
      },
    ],
  },  
  {
    questionId: 2,
    title: "Which state management tool should I use?",
    content:
      "There seem to be a fair few state management tools around for React - React, Unstated, ... Which one should I use?",
    userName: "Bob",
    created: new Date(),
    answers: [],
  },
  {
    questionId: 3,
    title: "Life where else should I be?",
    content:
      "Life is thankfulness, seems to be getting popular again that people love themselves and all others. I mean where would you rather be?",
    userName: "Tony",
    created: new Date(),
    answers: [
      {
        answerId: 1,
        content: "Thanks and Praise i say.. Show off your love life lovingly",
        userName: "Becky",
        created: new Date(),
      },
      {
        answerId: 2,
        content:
          "So, infinity is what we can look forward to yesturday today and tomorrow",
        userName: "Vicky",
        created: new Date(),
      },
    ],
  }
];
const wait = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
    };

export const getUnansweredQuestions = async (): Promise<QuestionData[]> => {
    await wait(500);
    return questions.filter(q => q.answers.length === 0);
    };

    export const ClintsQuest = (): QuestionData[] => {
        return questions.filter(q => q.questionId === 3);
        };
