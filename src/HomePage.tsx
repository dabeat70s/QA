/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";

import { PrimaryButton } from "./Styles";
import { QuestionList } from "./QuestionList";
import {
  getUnansweredQuestions,
  QuestionData,
  ClintsQuest,
} from "./QuestionsData";
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";
import { RouteComponentProps } from 'react-router-dom';
import { useEffect, FC } from 'react';

// const renderQuestion = (question: QuestionData) =>
// <div>{question.title}{console.log(question)}</div>;

// const renClint = (question:QuestionData)=> <div>{question.answers[1].content}</div>;

export const HomePage:FC<RouteComponentProps> = ({ history }) => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("first rendered");
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);
  console.log('rendered');

  const handleAskQuestionClick = () => {
      history.push('/ask');
    setCount(count + 1);
    console.log('TODO - move to the AskPage ct = ' ,count);
    };
  return (
    <Page>
      <div
        css={css`
          margin: 50px auto 20px auto;
          padding: 30px 20px;
          max-width: 600px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <PageTitle>Unanswered Questions</PageTitle>

          <PrimaryButton onClick={handleAskQuestionClick} >Ask a question</PrimaryButton>
        </div>
        {/* <QuestionList data={questions || []} /> */}
        {/* <QuestionList data={getUnansweredQuestions()} renderItem={renderQuestion} />
      <QuestionList data={ClintsQuest()} renderItem={renClint} /> */}
      </div>

      {questionsLoading ? (
        <div
          css={css`
            font-size: 16px;
            font-style: italic;
          `}
        >
          Loading...
        </div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};
