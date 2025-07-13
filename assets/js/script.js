'use strict';

// ----------
// Sidebar toggle
// ----------
const elementToggleFunc = (elem) => elem.classList.toggle("active");

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// ----------
// Modal (testimonials)
// ----------
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItems.forEach(item => {
  item.addEventListener("click", () => {
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// ----------
// Custom select (portfolio filter)
// ----------
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll(".project-item");

select.addEventListener("click", () => elementToggleFunc(select));

const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

let lastClickedBtn = filterBtns[0];

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedValue = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    btn.classList.add("active");
    lastClickedBtn = btn;
  });
});

// ----------
// Contact form enable/disable
// ----------
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// ----------
// Page navigation ✅
// ----------
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));
    link.classList.add("active");
    pages[index].classList.add("active");
    window.scrollTo(0, 0);
  });

  'use strict';

// =====================
// PROJECT FILTER ONLY
// =====================

// 1️⃣ Get desktop filter buttons
const filterBtns = document.querySelectorAll("[data-filter-btn]");

// 2️⃣ Get mobile select
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");

// 3️⃣ Get project items
const projectItems = document.querySelectorAll("[data-filter-item]");

// 4️⃣ Filter function
const filterProjects = (category) => {
  projectItems.forEach(item => {
    if (category === "all" || item.dataset.category.toLowerCase() === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// 5️⃣ Desktop buttons
let lastActiveBtn = filterBtns[0]; // mark first button as active by default

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.innerText.toLowerCase();
    filterProjects(category);

    lastActiveBtn.classList.remove("active");
    btn.classList.add("active");
    lastActiveBtn = btn;

    // Optional: sync select
    selectValue.innerText = btn.innerText;
  });
});

// 6️⃣ Mobile select dropdown
select.addEventListener("click", () => {
  select.classList.toggle("active");
});

selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const category = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    select.classList.remove("active");
    filterProjects(category);
  });
});

// 7️⃣ Init: show all by default
filterProjects("all");

});

// ✅ Show all projects by default
filterFunc("all");
