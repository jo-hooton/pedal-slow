// target elements

const nav = document.getElementById("nav")
const menuItems = document.querySelectorAll("sub-menu-heading")
menuItems.forEach(menuItem => menuItem.addEventListener('click', () => handleClick()))

const handleClick = event => {
  console.log(event)
}

const openNav = () => {
  nav.style.height = "100%";
}

const closeNav = () => {
  nav.style.height = "0%";
}

const toggleSubMenu = event => {
  console.log(event.target)
  // subMenu.style.height == "0px" ? subMenu.style.height = "100%" : document.getElementById(`sub-menu-${id}`).style.height = "0px"
  // document.getElementById(`arrow-${id}`).style.transform = "rotate(-45deg)";
}