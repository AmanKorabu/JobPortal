const jobs = [
    { title: "Software Engineer", company: "Tata Consultancy Services", location: "Mumbai, Maharashtra" },
    { title: "Product Manager", company: "Infosys", location: "Pune, Maharashtra" },
    { title: "UX/UI Designer", company: "Persistent Systems", location: "Nashik, Maharashtra" },
    { title: "Data Analyst", company: "Cognizant", location: "Nagpur, Maharashtra" },
    { title: "Frontend Developer", company: "Zensar Technologies", location: "Aurangabad, Maharashtra" },
    { title: "Web Developer", company: "Walstar Technologies", location: "Mumbai, Maharashtra" }
];

function searchJobs() {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchQuery) || 
        job.company.toLowerCase().includes(searchQuery) || 
        job.location.toLowerCase().includes(searchQuery)
    );
    displayJobs(filteredJobs);
}

function displayJobs(jobArray) {
    const jobResults = document.getElementById("jobResults");
    jobResults.innerHTML = '';

    if (jobArray.length === 0) {
        jobResults.innerHTML = "<p>No jobs found. Try a different search.</p>";
    } else {
        jobArray.forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("job-card");

            jobCard.innerHTML = `
                <h4>${job.title}</h4>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <a href="job-details.html?title=${encodeURIComponent(job.title)}&company=${encodeURIComponent(job.company)}&location=${encodeURIComponent(job.location)}">
                    <button class="apply-btn">Apply Now</button>
                </a>
            `;

            jobResults.appendChild(jobCard);
        });
    }
}


// Hamburger menu toggle functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
});

// Initial display of jobs
displayJobs(jobs);
