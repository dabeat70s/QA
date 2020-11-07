/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getUnansweredQuestionsActionCreator, AppState } from "./Store";

import { PrimaryButton } from "./Styles";
//import { QuestionList } from "./QuestionList";
import {  QuestionData } from "./QuestionsData";
import { Page } from "./Page";
import { PageTitle } from "./PageTitle";
import { RouteComponentProps } from "react-router-dom";
import { useEffect, FC } from "react";
import { QuestionList } from "./QuestionList";


// const renderQuestion = (question: QuestionData) =>
// <div>{question.title}{console.log(question)}</div>;

// const renClint = (question:QuestionData)=> <div>{question.answers[1].content}</div>;

interface Props extends RouteComponentProps {
  getUnansweredQuestions: () => Promise<void>;
  questions: QuestionData[] | null;
  questionsLoading: boolean;
}

const HomePage: FC<Props> = ({
  history,
  questions,
  questionsLoading,
  getUnansweredQuestions,
}) => {
  useEffect(() => {
    console.log("first rendered");
    if (questions === null) {
      getUnansweredQuestions();
    }
  }, [questions, getUnansweredQuestions]);
  console.log("rendered");

  const handleAskQuestionClick = () => {
    history.push("/ask");
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

          <PrimaryButton onClick={handleAskQuestionClick}>
            Ask a question
          </PrimaryButton>
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

const mapStateToProps = (store: AppState) => {
  return {
    questions: store.questions.unanswered,
    questionsLoading: store.questions.loading,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getUnansweredQuestions: () =>
      dispatch(getUnansweredQuestionsActionCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
