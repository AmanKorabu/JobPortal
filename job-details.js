// job-details.js
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title");
    const company = urlParams.get("company");
    const location = urlParams.get("location");
  
    document.getElementById("jobTitle").textContent = title;
    document.getElementById("jobCompany").textContent = company;
    document.getElementById("jobLocation").textContent = location;
  
    const form = document.getElementById("applicationForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("applicantName").value;
      const email = document.getElementById("applicantEmail").value;
      const cover = document.getElementById("coverLetter").value;
  
      alert(`Application Submitted!\n\nName: ${name}\nEmail: ${email}\nCover Letter: ${cover}`);
      form.reset();
    });
  });
  