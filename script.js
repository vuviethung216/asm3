// yeu cau 10 //
document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".skill");

  skills.forEach((skill) => {
    const header = skill.querySelector(".skill-header");
    const content = skill.querySelector(".skill-content");
    const button = skill.querySelector(".toggle-button");

    header.addEventListener("mouseover", function () {
      button.style.display = "inline-block";
    });

    header.addEventListener("mouseleave", function () {
      if (content.style.display !== "block") {
        button.style.display = "none";
      }
    });

    button.addEventListener("click", function () {
      if (content.style.display === "block") {
        content.style.display = "none";
        button.textContent = "View More";
      } else {
        content.style.display = "block";
        button.textContent = "View Less";
      }
    });
  });
});
