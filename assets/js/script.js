'use strict';

// -------------------------------
// ✅ Sidebar toggle
// -------------------------------
const elementToggleFunc = (elem) => elem.classList.toggle("active");

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// -------------------------------
// ✅ Modal (testimonials)
// -------------------------------
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

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// -------------------------------
// ✅ Portfolio filter (projects)
// -------------------------------
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll(".project-item");

if (select) {
  select.addEventListener("click", () => elementToggleFunc(select));
}

const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    if (
      selectedValue === "all" ||
      item.dataset.category.toLowerCase() === selectedValue
    ) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

selectItems.forEach(item => {
  item.addEventListener("click", () => {
    const selectedValue = item.textContent.trim().toLowerCase();
    selectValue.textContent = item.textContent;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

let lastClickedBtn = filterBtns[0];

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedValue = btn.textContent.trim().toLowerCase();
    selectValue.textContent = btn.textContent;

    filterFunc(selectedValue);

    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    btn.classList.add("active");
    lastClickedBtn = btn;
  });
});

// Show all projects by default
filterFunc("all");

// -------------------------------
// ✅ Contact form enable/disable
// -------------------------------
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", () => {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}

// -------------------------------
// ✅ Page navigation
// -------------------------------
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const target = link.textContent.trim().toLowerCase();

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    pages.forEach(p => {
      if (p.dataset.page === target) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);
  });
});
