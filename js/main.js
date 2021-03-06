// Smooth Scrolling
$(".container a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

// Modal

// Get modal element
var modal = document.getElementById("simpleModal");

// Get open modal link
var modalLink = document.getElementById("modalLink");

// Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for open click
modalLink.addEventListener("click", openModal);
// Listen for close click
closeBtn.addEventListener("click", closeModal);
// Listen for outside click
window.addEventListener("click", outsideClick);

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

// Function to close modal if outside click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Loading screen

window.addEventListener("load", function() {
  const loader = this.document.querySelector(".loader");

  loader.setAttribute("id", "hidden");
  setInterval(function() {
    loader.style.display = "none";
  }, 6000);
});
