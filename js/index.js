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

// Changing Candidate according to selected election

const electionSelect = document.querySelector(".select-election");
electionSelect.value = ""; // Setting to empty string by default

const candidateLists = document.querySelectorAll(".candidate-list");

const candidatesHeading = document.querySelector(".candidates-heading");
candidatesHeading.textContent = ""; // Setting it to an empty string

const noCandidatesMessage = document.querySelector(".no-candidates");

const btnCastVoteDisabled = document.querySelector(".btn-cast-vote");
btnCastVoteDisabled.disabled = true; // Disable the cast vote button

// Candidate boxes
const divPresidentCandidate = document.querySelector(".president-candidates");
const divSenatorCandidate = document.querySelector(".senator-candidates");
const divRepsCandidate = document.querySelector(".reps-candidates");
const divGovernorCandidate = document.querySelector(".governor-candidates");
const divLocalGovCandidate = document.querySelector(".local-gov-candidates");

electionSelect.addEventListener("input", function () {
  const selectedElection = electionSelect.value;
  console.log(selectedElection);

  switch (selectedElection) {
    case "":
      // No election selected
      candidatesHeading.textContent = ""; // Setting it to an empty string
      noCandidatesMessage.style.display = "grid"; // Show no candidates message
      btnCastVoteDisabled.disabled = true; // Disable the cast vote button
      btnCastVoteDisabled.classList.add("btn-disabled");

      // Hiding other candidates boxes
      divPresidentCandidate.style.display = "none"; // Hide the president candidate section
      divSenatorCandidate.style.display = "none";
      divLocalGovCandidate.style.display = "none";
      divGovernorCandidate.style.display = "none";
      divRepsCandidate.style.display = "none";
      break;
    case "President":
      // President election selected
      noCandidatesMessage.style.display = "none"; // Hide no candidates message
      btnCastVoteDisabled.disabled = false; // Enable the cast vote button
      btnCastVoteDisabled.classList.remove("btn-disabled");
      divPresidentCandidate.style.display = "grid"; // Show the president candidate section
      candidatesHeading.textContent = "Presidential Candidates"; // Update heading

      // Hiding other candidates boxes
      divSenatorCandidate.style.display = "none";
      divLocalGovCandidate.style.display = "none";
      divGovernorCandidate.style.display = "none";
      divRepsCandidate.style.display = "none";
      break;
    case "Senatorial":
      // Senator election selected
      noCandidatesMessage.style.display = "none";
      btnCastVoteDisabled.disabled = false; // Enable the cast vote button
      btnCastVoteDisabled.classList.remove("btn-disabled");
      divSenatorCandidate.style.display = "grid"; // Show the Senator candidate
      candidatesHeading.textContent = "Senatorial Candidates"; // Update heading

      // Hiding other candidates boxes
      divPresidentCandidate.style.display = "none"; // Hide the president candidate section
      divLocalGovCandidate.style.display = "none";
      divGovernorCandidate.style.display = "none";
      divRepsCandidate.style.display = "none";
      break;
    case "House of Reps":
      // House of Reps election selected
      noCandidatesMessage.style.display = "none";
      btnCastVoteDisabled.disabled = false; // Enable the cast vote button
      btnCastVoteDisabled.classList.remove("btn-disabled");
      divRepsCandidate.style.display = "grid"; // Show the Senator candidate
      candidatesHeading.textContent = "House of Representative Candidates"; // Update heading

      // Hiding other candidates boxes
      divPresidentCandidate.style.display = "none"; // Hide the president candidate section
      divSenatorCandidate.style.display = "none";
      divLocalGovCandidate.style.display = "none";
      divGovernorCandidate.style.display = "none";
      break;
    case "Governorship":
      // Governorship election selected
      noCandidatesMessage.style.display = "none";
      btnCastVoteDisabled.disabled = false; // Enable the cast vote button
      btnCastVoteDisabled.classList.remove("btn-disabled");
      divGovernorCandidate.style.display = "grid"; // Show the Senator candidate
      candidatesHeading.textContent = "Governorship Candidates"; // Update heading

      // Hiding other candidates boxes
      divPresidentCandidate.style.display = "none"; // Hide the president candidate section
      divSenatorCandidate.style.display = "none";
      divLocalGovCandidate.style.display = "none";
      divRepsCandidate.style.display = "none";
      break;
    case "Local Government":
      // Local Gpovernment election selected
      noCandidatesMessage.style.display = "none";
      btnCastVoteDisabled.disabled = false; // Enable the cast vote button
      btnCastVoteDisabled.classList.remove("btn-disabled");
      divLocalGovCandidate.style.display = "grid"; // Show the Senator candidate
      candidatesHeading.textContent = "Local Government Chairman Candidates"; // Update heading

      // Hiding other candidates boxes
      divPresidentCandidate.style.display = "none"; // Hide the president candidate section
      divSenatorCandidate.style.display = "none";
      divGovernorCandidate.style.display = "none";
      divRepsCandidate.style.display = "none";
      break;
  }
});
