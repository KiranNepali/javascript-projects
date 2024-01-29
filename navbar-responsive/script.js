const navToggle = document.querySelector(".nav-toggle");
const menuList = document.querySelector(".menu-list");

navToggle.addEventListener("click", function () {
  // console.log(menuList.classList.contains("show-menu-list"));

  // if (menuList.classList.contains("show-menu-list")) {
  //   menuList.classList.remove("show-menu-list");
  // } else {
  //   menuList.classList.add("show-menu-list");
  // }
  menuList.classList.toggle("show-menu-list");
});
