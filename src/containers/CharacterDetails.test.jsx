import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mortydetail from '../fixtures/mortydetail.json';
import CharacterDetails from './CharacterDetails';

const mockServer = setupServer(
  rest.get('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
    return res(ctx.json(mortydetail));
  })
);

describe('chartater detail pag', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());

  it('has the details of only a single character', async () => {
    render(
      <MemoryRouter initialEntries={['/2']}>
        <CharacterDetails />
      </MemoryRouter>
    );

    screen.getByAltText('loading spinner');

    const character = await screen.findByText('Morty Smith', { exact: false });

    expect(character).toMatchSnapshot();
  });
});
