import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RickAndMortyApi from '../../containers/RickAndMortyApi';

export default function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={RickAndMortyApi} />
      </Switch>
    </BrowserRouter>
  );
}
