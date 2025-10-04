const hamburgerBtn = document.querySelector("#hamburgerIcon");
const sidebarCloseBtn = document.querySelector("#sidebarCloseBtn");
const sideBarContainer = document.querySelector("#sidebarContainer");
const sidebarOverlay = document.querySelector("#sidebarOverlay");

const allSidebarNavlinks = document.querySelectorAll(".sidebar-navlink-item");

hamburgerBtn.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  sidebarOverlay.classList.add("open");
  sideBarContainer.classList.add("open");
});

sidebarCloseBtn.addEventListener("click", () => {
  document.body.style.overflow = "auto";
  sidebarOverlay.classList.remove("open");
  sideBarContainer.classList.remove("open");
});

allSidebarNavlinks.forEach((navlink) => {
  navlink.addEventListener("click", () => {
    allSidebarNavlinks.forEach((item) => {
      item.classList.remove("active");
    });

    navlink.classList.add("active");
    document.body.style.overflow = "auto";
    sidebarOverlay.classList.remove("open");
    sideBarContainer.classList.remove("open");
  });
});
