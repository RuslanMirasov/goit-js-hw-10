const KEY = 'live_Vc9e1qcWjWcmEZjGfrHmfo3xc2VhnvB6UcELTFlcSEYGuBX4Fl8bMkzqeo9A7iuK';

function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${KEY}`).then(response => {
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${KEY}`).then(response => {
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
