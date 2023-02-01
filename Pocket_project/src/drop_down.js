
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  const dogLinks = [];
  Object.entries(dogs).forEach(( [name, link]) => {
    const atag = document.createElement('a');
    atag.innerHTML = name;
    atag.href = link;
    const litag = document.createElement('li');
    litag.classList.add("dog-link");
    litag.appendChild(atag);
    dogLinks.push(litag);
  });
  return dogLinks;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator()
  const dogList = document.querySelector('.drop-down-dog-list')

  dogLinks.forEach(dog => {
    dogList.appendChild(dog)
  })
  return dogLinks;
}

function handleEnter(e) {
  // console.log(e.target)
  // console.log("handleEnter");
  const dogLinks = document.querySelectorAll('.dog-link');
  dogLinks.forEach(dog => {
    dog.classList.remove('hidden');
  })
}

function handleLeave(e) {
  const dogLinks = document.querySelectorAll('.dog-link');
  dogLinks.forEach(dog => {
    dog.classList.add('hidden');
  })
}

attachDogLinks();
const dropDown = document.querySelector('.drop-down-dog-nav')
dropDown.addEventListener('mouseenter', handleEnter);
dropDown.addEventListener('mouseleave', handleLeave);