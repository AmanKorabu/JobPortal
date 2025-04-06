window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const jobTitle = urlParams.get("title");
  const jobCompany = urlParams.get("company");
  const jobLocation = urlParams.get("location");

  if (jobTitle) document.getElementById("jobTitle").textContent = jobTitle;
  if (jobCompany) document.getElementById("jobCompany").textContent = jobCompany;
  if (jobLocation) document.getElementById("jobLocation").textContent = jobLocation;
};
