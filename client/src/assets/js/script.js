
function alram() {
  if (document.querySelector('.alram-open').style.display == "none") {
    document.querySelector('.alram-open').style.display = "block";
    document.querySelector('.profile-open').style.display = "none";
  } else {
    document.querySelector('.alram-open').style.display = "none";
  }
}