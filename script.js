document
        .getElementById("mobile-menu-button")
        .addEventListener("click", function () {
          const mobileMenu = document.getElementById("mobile-menu");
          mobileMenu.classList.toggle("hidden");
        });

      const roles = [
        'Backend System Builder',
        'Django & API Developer',
        'Problem Solver'
      ];
      let roleIndex = 0;
      let charIndex = 0;
      const typingDelay = 100;
      const erasingDelay = 50;
      const newRoleDelay = 2000;

      function typeRole() {
        if (charIndex < roles[roleIndex].length) {
          document.getElementById("dynamic-role").textContent +=
            roles[roleIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeRole, typingDelay);
        } else {
          setTimeout(eraseRole, newRoleDelay);
        }
      }

      function eraseRole() {
        if (charIndex > 0) {
          document.getElementById("dynamic-role").textContent = roles[
            roleIndex
          ].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(eraseRole, erasingDelay);
        } else {
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(typeRole, typingDelay + 1000);
        }
      }

      document.addEventListener("DOMContentLoaded", function () {
        typeRole();
      });
       // JavaScript for Adding Animation when Elements are in View
       document.addEventListener("DOMContentLoaded", function () {
              const elements = document.querySelectorAll(".animate-fade-slide-in");
          
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.1 });
          
              elements.forEach((el) => {
                el.classList.add("opacity-0", "translate-y-5"); // initial state for animation
                observer.observe(el);
              });
            });
