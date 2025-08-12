/***********************
 * HOW TO VOTE
 */

// Select all accordion headers
const accordionHeaders = document.querySelectorAll(".header-accordion-item");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    // Find the parent .accordion-item
    const parentItem = header.closest(".accordion-item");
    const detail = parentItem.querySelector(".accordion-item-detail");

    // Selection of accordion-icon
    accordionIconUp = header.querySelector(".accordion-icon-up");
    accordionIconDown = header.querySelector(".accordion-icon-down");

    // Close all other accordions
    document.querySelectorAll(".accordion-item-detail").forEach((item) => {
      if (item !== detail) {
        item.style.display = "none";
        // item.previousElementSibling?.classList.remove("active");
      }
    });

    // Resetting all other accordions to the Down Icon
    document.querySelectorAll(".accordion-icon-down").forEach((item) => {
      if (item !== accordionIconDown) {
        item.style.display = "block";
      }
    });
    document.querySelectorAll(".accordion-icon-up").forEach((item) => {
      if (item !== accordionIconUp) {
        item.style.display = "none";
      }
    });

    // Toggle current accordion
    if (detail.style.display === "block") {
      detail.style.display = "none";
      header.classList.remove("active");

      header.querySelector(".accordion-icon-down").style.display = "block";
      header.querySelector(".accordion-icon-up").style.display = "none";
    } else {
      detail.style.display = "block";
      header.classList.add("active");

      header.querySelector(".accordion-icon-down").style.display = "none";
      header.querySelector(".accordion-icon-up").style.display = "block";
    }
  });
});
