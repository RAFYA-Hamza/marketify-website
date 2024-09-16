function toggleCard(cards) {
  console.log(cards);
  const divider = document.querySelector(".process__divider");
  const content = document.querySelector(".process__content");
  const card = document.querySelector(".process__card");

  divider.classList.toggle("open");
  content.classList.toggle("open");
  card.classList.toggle("open");
}
