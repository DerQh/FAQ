// To DO
// nodelist of all toggel buttons
// look through the node list
// Add clikc event(AddEvent listinet)
// Toggle the active class on the parent node ()

const btns = document.querySelectorAll(".btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    btn.parentNode.classList.toggle("active");
    // console.log(parentNode.classList);
  });
});
