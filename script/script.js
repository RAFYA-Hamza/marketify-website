import { working } from "../data/working-process.js";
import { team } from "../data/team-work.js";
import { testimonials } from "../data/testimonials.js";

let working__processHTML = "";
let team__blogHTML = "";
let testimonialsHTML = "";
let starsHTML = "";

let length = testimonials.length;
let idStars = 0;
let sliderDirection;

function updateListComments(idStars, direction) {
  const starsElement = document.querySelectorAll(".js-blog-testimonial__stars");
  const contentElement = document.querySelector(
    ".js-blog-testimonial__content"
  );
  let screenWidth = window.innerWidth;

  starsElement.forEach((element) => {
    element.style.backgroundColor = "var(--accent-bg-color)";
  });

  starsElement.forEach((element) => {
    if (element.id == idStars) {
      element.style.backgroundColor = "var(--secondary-bg-color)";
    }
  });

  if (screenWidth === 665) {
    contentElement.style.transform = `translateX(${direction * 24}rem)`;
  } else {
    contentElement.style.transform = `translateX(${direction * 41}rem)`;
  }
}

function updateMenu() {
  const list = document.querySelector(".about-menu__list");
  const menu = document.querySelector(".about-menu__icon");

  list.classList.toggle("open");
  menu.classList.toggle("open");
}

// ----------------------------------> Work team DOM
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

// ---------------------------------->Team member DOM
team.forEach((member) => {
  team__blogHTML += `
            <div class="blog-team__card">
                <div class="blog-team__heading">
                    <div class="blog-team__profile js-blog-team__profile"></div>
                    <div class="blog-team__content">
                        <div class="blog-team__icon"></div>

                        <div class="blog-team__name">
                            <h4>${member.name}</h4>
                            <p>${member.status}</p>
                        </div>
                    </div>

                </div>

                <span class="blog-team__divider"></span>
                <p>
                ${member.description}
                </p>
            </div>
  `;
});

document.querySelector(".js-blog-team__container").innerHTML = team__blogHTML;

document.querySelectorAll(".js-blog-team__profile").forEach((imgs, index) => {
  imgs.style.backgroundImage = `url('../assets/images/profile-${index}.png')`;
});

// ----------------------------------> Testimonials

testimonials.forEach((testimonial) => {
  testimonialsHTML += `
                  <div id="${testimonial.id}" class="blog-testimonial__card">
                    <div class="blog-testimonial__container-comment">
                        <div class="blog-testimonial__comment">
                            <p>"${testimonial.Comment}"</p>
                        </div>
                        <div class="blog-testimonial__shape">
                        </div>
                    </div>
                    <div class="blog-testimonial__name">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.status}</p>
                    </div>
                  </div>

`;
  starsHTML += `
          <div id="${testimonial.id}" class="blog-testimonial__stars js-blog-testimonial__stars"></div>
`;
});

document.querySelector(".js-blog-testimonial__content").innerHTML =
  testimonialsHTML;

document.querySelector(".js-blog-testimonial__navigation").innerHTML =
  starsHTML;

if (length % 2 == 0) {
  idStars = length / 2 - 1;
  sliderDirection = 0.5;
} else {
  length--;
  idStars = length / 2;
  sliderDirection = 0;
  length = testimonials.length;
}

updateListComments(idStars, sliderDirection);

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

document
  .querySelector(".js-log-testimonial__left-arrow")
  .addEventListener("click", () => {
    if (idStars > 0) {
      sliderDirection++;
      idStars--;
    } else {
      idStars = 0;
    }
    updateListComments(idStars, sliderDirection);
  });

document
  .querySelector(".js-log-testimonial__right-arrow")
  .addEventListener("click", () => {
    if (idStars < length - 1) {
      sliderDirection--;
      idStars++;
    } else {
      idStars = length - 1;
    }
    updateListComments(idStars, sliderDirection);
  });

document.getElementById("form").addEventListener("submit", (event) => {
  // Prevent form submission from refreshing the page
  event.preventDefault();

  var formData = new FormData(form);
  console.log(Object.fromEntries(formData));

  // Reset the form
  form.reset();
});

document.querySelector(".about-menu__icon").addEventListener("click", () => {
  updateMenu();
});

document.querySelectorAll(".about-menu__item").forEach((element) => {
  element.addEventListener("click", () => {
    updateMenu();
  });
});
