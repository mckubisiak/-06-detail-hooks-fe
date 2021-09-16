import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RickAndMortyApi from './RickAndMortyApi';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import characterlist from '../fixtures/characterlist.json';

const mockServer = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/', (req, res, ctx) => {
    return res(ctx.json(characterlist));
  })
);

describe('RickAndMortyApi', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('renders lists of characters', async () => {
    render(
      <MemoryRouter>
        <RickAndMortyApi />
      </MemoryRouter>
    );

    screen.getByAltText('loading spinner');

    const ul = await screen.findByRole('list', { name: 'characters' });

    expect(ul).toMatchSnapshot();
  });
});
