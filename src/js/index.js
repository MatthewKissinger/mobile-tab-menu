// TODO LIST

// add in basic main container app generation when clicking on the appropriate nav-tab

// DOM cache
const navTabs = document.querySelectorAll('.nav-tab');

console.log(navTabs);

navTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    navTabs.forEach((navTab) => {
      navTab.classList.remove('focused');
    });

    tab.classList.toggle('focused');
  });
});

console.log('testing live server');
