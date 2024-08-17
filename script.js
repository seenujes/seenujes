
// Assign handleMouse to mouse movement events
/*var x, y=0;
window.addEventListener("wheel",()=>{
    
    if (x && y) {
        // Scroll window by difference between current and previous positions
        window.scrollBy(e.clientX - x, 0);
      }
    
      // Store current position
      x = clientX;
      y = clientY;
}*/
// Variables for current position
var x, y;

function ScrollPosition(e) {
  // Verify that x and y already have some value
  if (x && y) {
    // Scroll window by difference between current and previous positions
    window.scrollBy(e.clientX - x);
  }

  // Store current position
  x = e.clientX;
  y = e.clientY;
}

// Assign handleMouse to mouse movement events
/*document.getElementById('home').onscroll = handleMouse;

function showScrollPosition() {
  console.log(window.scrollX, window.scrollY);
}*/

// This will add the function as a scroll event listener
//window.addEventListener("scroll", showScrollPosition);

//document.addEventListener('scroll',handleMouse) ;
//addEventListener("scroll", (event) => {
  // Handle scroll event here
//});
//document.onscroll = (event) => {
  // Handle document scroll event here
//};