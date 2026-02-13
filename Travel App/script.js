 const menu = document.querySelector(".ham-menu");

               if (menu) {
                menu.addEventListener("click", () => {
                menu.classList.toggle("active");
                });
            }

  function buyTour(tourName) {
                    alert("🎉 Successfully purchased the " + tourName + " package! Have a wonderful journey!");
                }              