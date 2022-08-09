function openNav() {
  const btnOpen = document.querySelector("#nav-open");
  const btnClose = document.querySelector("#nav-close");
  const nav = document.querySelector("#side-bar");

  btnOpen.addEventListener("click", () => {
    nav.style.left = "0";
    btnOpen.style.display = "none";
    btnClose.style.display = "initial";
  });
}

function closeNav() {
  const btnOpen = document.querySelector("#nav-open");
  const btnClose = document.querySelector("#nav-close");
  const nav = document.querySelector("#side-bar");

  btnClose.addEventListener("click", () => {
    nav.style.left = "-100%";
    btnOpen.style.display = "initial";
    btnClose.style.display = "none";
  });
}

openNav();
closeNav();
