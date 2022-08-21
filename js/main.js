import fetchJsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');

petForm.addEventListener('submit', fetchAnimals);

// Fetch Animals From API
function fetchAnimals(e) {
  e.preventDefault();

  // Get User Input
  const animal = document.querySelector('#animal').value;
  const zip = document.querySelector('#zip').value;

  // Fetch Pets
  fetchJsonp(
    `http://api.petfinder.com/pet.find?format=json&key=7bec9c7514d4e1627003a8d320ba4286&animal=${animal}&location=${zip}&callback=callback`,
    {
      jsonpCallbackFunction: 'callback'
    }
  )
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

// JSONP callback
function callback(data) {
  console.log(data);
}

// Show Listings of pets
function showAnimals(pets) {
  const results = document.querySelector('#results');
  // Clear first
  results.innerHTML = '';
  // Loop through pets
  pets.forEach((pet) => {
    console.log(pet);
  });
}