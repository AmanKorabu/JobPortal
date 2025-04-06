// job-details.js
const params = new URLSearchParams(window.location.search);

document.getElementById("jobTitle").innerText = params.get("title");
document.getElementById("jobCompany").innerText = params.get("company");
document.getElementById("jobLocation").innerText = params.get("location");

// Optional: handle form submission
document.getElementById("applyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Application submitted successfully!");
});
