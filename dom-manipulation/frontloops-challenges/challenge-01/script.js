const [segmentContainer] = document.getElementsByClassName('selector-container');

function removeActiveSegment() {
  const [activeElement] = document.getElementsByClassName('active-segment');
  if(activeElement) {
    activeElement.classList.remove('active-segment');
    activeElement.classList.add('hover-item');
  }
}

const priceSegment = document.getElementById('price');
priceSegment.addEventListener('click', () => {
    removeActiveSegment();
    priceSegment.classList.remove('hover-item');
    priceSegment.classList.add('active-segment')
})

const nameSegment = document.getElementById('name');
nameSegment.addEventListener('click', () => {
    removeActiveSegment();
    nameSegment.classList.remove('hover-item');
    nameSegment.classList.add('active-segment')
})

const relevanceSegment = document.getElementById('relevance');
relevanceSegment.addEventListener('click', () => {
    removeActiveSegment();
    relevanceSegment.classList.remove('hover-item');
    relevanceSegment.classList.add('active-segment')
})