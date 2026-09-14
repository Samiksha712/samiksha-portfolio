function showCareerSection(sectionName, button) {

    // Hide all career sections
    const sections = document.querySelectorAll(".career-content");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });


    // Remove active state from all buttons
    const buttons = document.querySelectorAll(".career-tab");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });


    // Show selected section
    document.getElementById(sectionName).classList.add("active");


    // Highlight selected button
    button.classList.add("active");
}