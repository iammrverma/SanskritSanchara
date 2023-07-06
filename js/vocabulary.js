const cards = document.getElementsByClassName("vocabCard");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function() {
    this.classList.toggle("flipped");
  });

  cards[i].addEventListener("mouseleave", function() {
    this.classList.remove("flipped");
  });
}
