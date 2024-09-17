import { working } from "../data/working-process.js";

let working__processHTML = "";

working.forEach((work) => {
  working__processHTML += `
            <div class="process__card js-process__card" data-card="${work.id}">
                <div class="process__heading">
                    <div class="process__title">
                        <h1 class="bold">${work.id}</h1>
                        <h3>${work.title}</h3>
                    </div>
                    <div class="process__button js-process__button">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <span class="process__divider js-process__divider"></span>
                <div class="process__content js-process__content">
                    <p>${work.content}</p>
                </div>
            </div>
 `;
});

document.querySelector(".js-process__container").innerHTML =
  working__processHTML;

document.querySelectorAll(".js-process__card").forEach((button) => {
  button
    .getElementsByClassName("js-process__button")[0]
    .addEventListener("click", () => {
      const cardId = button.getAttribute("data-card");

      const card = document.querySelector(
        `.js-process__card[data-card="${cardId}"]`
      );

      const divider = card.querySelector(".js-process__divider");
      const content = card.querySelector(".js-process__content");
      const buttonIcon = card.querySelector(".js-process__button");

      divider.classList.toggle("open");
      content.classList.toggle("open");
      buttonIcon.classList.toggle("open");
      card.classList.toggle("open");
    });
});
