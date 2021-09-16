import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterDetails from '../../containers/CharacterDetails';
import RickAndMortyApi from '../../containers/RickAndMortyApi';
import Header from '../Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/:id" exact component={CharacterDetails} />
        <Route path="/" exact component={RickAndMortyApi} />
      </Switch>
    </BrowserRouter>
  );
}
