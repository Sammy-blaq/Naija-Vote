/* 
Admin Page Script
*/
// Action Buttons
const btnOverviewEl = document.querySelector(".btn-overview");
const btnFeedbackEl = document.querySelector(".btn-feedback");

// Event Listeners
btnOverviewEl.addEventListener("click", () => {
  // Handle Overview button click
  if (btnOverviewEl.classList.contains("active")) {
    console.log("pass");
  } else {
    btnOverviewEl.classList.add("active");
    // Show Overview content
    document.querySelector(".admin-overview").style.display = "grid";
    document.querySelector(".admin-feedback").style.display = "none";

    // Remove active class from the rest Buttons
    btnFeedbackEl.classList.remove("active");
  }
});

btnFeedbackEl.addEventListener("click", () => {
  // Handle Feedback button click
  if (btnFeedbackEl.classList.contains("active")) {
    console.log("Pass");
  } else {
    btnFeedbackEl.classList.add("active");
    // Show Feedback content
    document.querySelector(".admin-feedback").style.display = "block";
    document.querySelector(".admin-overview").style.display = "none";
    // Remove active class from the rest Buttons
    btnOverviewEl.classList.remove("active");
  }
});
