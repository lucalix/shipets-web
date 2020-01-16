import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import MyPets from '../pages/MyPets';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/mypets" component={MyPets} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
