const apiURL = 'https://rickandmortyapi.com/api/json/';

export const fetchCharacters = async () => {
  const response = await fetch(apiURL);
  const json = await response.json();

  return json.map((character) => ({
    id: character.id,
    name: character.name,
    image: character.image,
  }));
};

export const fetchCharacterById = async (id) => {
  const response = await fetch(`${apiURL}${id}`);
  const json = await response.json();

  const details = {
    name: json.name,
    status: json.status,
    origin: json.origin.name,
    image: json.image,
  };

  return details;
};
