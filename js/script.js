/* 
Admin Page Script
*/
// Action Buttons
const btnOverviewEl = document.querySelector(".btn-overview");
const btnAiAuditEl = document.querySelector(".btn-ai-audit");
const btnFeedbackEl = document.querySelector(".btn-feedback");

// Event Listeners
btnOverviewEl.addEventListener("click", () => {
  // Handle Overview button click
  if (btnOverviewEl.classList.contains("active")) {
    console.log("pass");
  } else {
    btnOverviewEl.classList.add("active");

    // Remove active class from the rest Buttons
    btnAiAuditEl.classList.remove("active");
    btnFeedbackEl.classList.remove("active");
  }
});

btnAiAuditEl.addEventListener("click", () => {
  // Handle AI Audit button click
  if (btnAiAuditEl.classList.contains("active")) {
    console.log("Pass");
  } else {
    btnAiAuditEl.classList.add("active");
    // Remove active class from the rest Buttons
    btnOverviewEl.classList.remove("active");
    btnFeedbackEl.classList.remove("active");
  }
});

btnFeedbackEl.addEventListener("click", () => {
  // Handle Feedback button click
  if (btnFeedbackEl.classList.contains("active")) {
    console.log("Pass");
  } else {
    btnFeedbackEl.classList.add("active");
    // Remove active class from the rest Buttons
    btnAiAuditEl.classList.remove("active");
    btnOverviewEl.classList.remove("active");
  }
});
