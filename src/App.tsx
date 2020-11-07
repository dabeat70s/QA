/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { lazy, Suspense } from "react";

import { HeaderWithRouter as Header } from './Header';
import  HomePage  from "./HomePage";
import { fontFamily, fontSize, gray2 } from "./Styles";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from './Store';
import { SearchPage } from "./SearchPage";
import { SignInPage } from "./SignInPage";
import { NotFoundPage } from "./NotFoundPage";
import { QuestionPage } from "./QuestionPage";

const AskPage = lazy(() => import("./AskPage"));

const store = configureStore();

// function App() {
const App: React.FC = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/ask">
            <Suspense
              fallback={
                <div
                  css={css`
                    margin-top: 100px;
                    text-align: center;
                  `}
                >
                  Loading...
                </div>
              }
            >
              <AskPage />
            </Suspense>
          </Route>
          <Route path="/signin" component={SignInPage} />
          <Route path="/questions/:questionId" component={QuestionPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
