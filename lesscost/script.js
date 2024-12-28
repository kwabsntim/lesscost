function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const hamburger = document.querySelector(".hamburger");

    menu.classList.toggle("open");
    hamburger.classList.toggle("clicked");
}

function closeMenu() {
    const menu = document.getElementById("sideMenu");
    const hamburger = document.querySelector(".hamburger");

    menu.classList.remove("open");
    hamburger.classList.remove("clicked");
}
document.addEventListener("DOMContentLoaded", () => {
  const introText = document.querySelector(".video-overlay .intro");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  introText.classList.add("in-view");
                  observer.unobserve(entry.target); // Stop observing once it's in view
              }
          });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  observer.observe(introText);
});
document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.bio p');

    // Create an intersection observer to trigger animation when the element is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running'; // Start animation
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

    // Observe each paragraph
    paragraphs.forEach((paragraph) => {
        observer.observe(paragraph); // Start observing the paragraphs
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const toggleButton = document.querySelector('#toggleMenu');

    toggleButton.addEventListener('click', () => {
        overlay.classList.toggle('open');
    });
});
const containers = document.querySelectorAll('.containerc');

containers.forEach(container => {
  const video = container.querySelector('video');

  container.addEventListener('mouseenter', () => {
    video.play();
  });

  container.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

