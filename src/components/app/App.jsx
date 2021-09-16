import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterDetails from '../../containers/CharacterDetails';
import RickAndMortyApi from '../../containers/RickAndMortyApi';

export default function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id" exact component={CharacterDetails} />
        <Route path="/" exact component={RickAndMortyApi} />
      </Switch>
    </BrowserRouter>
  );
}
