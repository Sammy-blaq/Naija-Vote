/////////////////////////
// Verify Code
/////////////////////////

btnCastVote = document.querySelector(".btn-cast-vote");
btnVerifyClose = document.querySelector(".btn-verify-close");

btnCastVote.addEventListener("click", function () {
  // Do somethings such as cast the vote for the selected candidate

  // Show the verify code box
  document.querySelector(".verify-code-box").style.display = "flex";
});

btnVerifyClose.addEventListener("click", function () {
  // Hide the verify code box
  document.querySelector(".verify-code-box").style.display = "none";
});
