import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';

import Main from '../src/containers/Main';
import SignIn from '../src/containers/SignIn';
import SignUp from '../src/containers/SignUp';
import ReserveModal from '../src/containers/ReserveModal';

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: NanumSquare;
    }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/modal" exact component={ReserveModal} />
      </Switch>
    </div>
  );
};

export default App;
