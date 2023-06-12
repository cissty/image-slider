const rightArrow = document.querySelector('.direction-arrow.right');
const leftArrow = document.querySelector('.direction-arrow.left')
const circles = [...document.querySelectorAll('circle')];
const durationSelect = document.getElementById('duration-select');

const caseFlow = [0, 1, 2, 3, 4, 5, 6];
let activeIndex = 0;

let intervalDuration = parseInt(durationSelect.value, 10)

rightArrow.addEventListener('click', () =>{
    
    stopSlideInterval(); // Stop the automatic slide advancement
    advanceSlide(); // Advance the slide manually
    startSlideInterval(); // Start the automatic slide advancement again

});

leftArrow.addEventListener('click', () => {
    stopSlideInterval(); // Stop the automatic slide advancement
    const previousIndex = activeIndex === 0 ? circles.length - 1 : activeIndex - 1;

    circles[activeIndex].classList.remove('active');
    circles[previousIndex].classList.add('active');

    activeIndex = previousIndex;
    updateContent(previousIndex, caseFlow);
    startSlideInterval(); // Start the automatic slide advancement again
  });

  circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      stopSlideInterval();
      activeIndex = index;

      circles.forEach(circle => circle.classList.remove('active'));
      circle.classList.add('active');
  
      updateContent(index, caseFlow);
      startSlideInterval();
    });
  });
  
  function editImage(imageNum, ref, name){
    const picture = document.getElementById('image');
    const href = document.getElementById('ref');
    const userProfilePicture = document.getElementById('user-pp');
    const userName = document.getElementById('user-name');
    
    picture.setAttribute('src', `images/image${imageNum}.jpg`);
    href.setAttribute('href', `https://unsplash.com/photos/${ref}`);
    userProfilePicture.setAttribute('src', `images/users/user${imageNum}.jpg`)
    userName.textContent = `photo by ${name}`;
  };

function updateCircleColor(activeIndex, nextIndex) {
    if (activeIndex !== -1) {
      circles[activeIndex].classList.remove('active');
    };
  
    circles[nextIndex].classList.add('active');
  };

  function updateContent(index, caseFlow){
    switch (caseFlow[index]){
        case 0:
                editImage('1', 'b9drVB7xIOI', 'Aaron Burden');
                break;
        case 1:
                editImage('3', '63Znf38gnXk', 'Denys Nevozhai');
                break;
        case 2:
                editImage('4', 'rFBA42UFpLs', 'Matthew Smith');
                break;
        case 3:
                editImage('5', 'cO7zI0lqzqI', 'Miguel Ibáñez');
                break;
        case 4:
                editImage('6', 'Goe4Q0xwvwc', 'NEOM');
                break;
        case 5: 
                editImage('7', 'jQvOExlroYA', 'Cosmic Timetraveler');
                break;
        case 6:
                editImage('2', 'AgE1Vmi-r_M', 'Blake Cheek');
                break;
    }
  };
  function advanceSlide() {
    const nextIndex = (activeIndex + 1) % circles.length;
  
    circles[activeIndex].classList.remove('active');
    circles[nextIndex].classList.add('active');
  
    activeIndex = nextIndex; 
  
    // Update content based on the next circle
    updateContent(nextIndex, caseFlow);
  }

  function startSlideInterval() {
    slideInterval = setInterval(advanceSlide, intervalDuration);
  }
  
  function stopSlideInterval() {
    clearInterval(slideInterval);
  }

  durationSelect.addEventListener('change', () => {
    intervalDuration = parseInt(durationSelect.value, 10);
    
    // Restart the slide interval with the new duration
    stopSlideInterval();
    startSlideInterval();
  });

  startSlideInterval();