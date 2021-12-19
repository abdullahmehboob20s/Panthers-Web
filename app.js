let link = document.querySelectorAll(".link");
const nav = document.querySelector(".nav");

link.forEach((item) => {
  item.addEventListener("click", (e) => {
    let link_accordion = e.target.nextElementSibling;

    link.forEach((item2) => {
      if (item2 !== item) {
        let item2_link_accordion = item2.nextElementSibling;
        item2_link_accordion.style.height = "";
        item2.classList.remove("active");
      }
    });

    if (link_accordion.style.height == "") {
      link_accordion.style.height = link_accordion.scrollHeight + "px";
      console.log(link_accordion.style.height);
      item.classList.add("active");
    } else {
      link_accordion.style.height = "";
      item.classList.remove("active");
    }

    // item.style.backgroundColor = "red";
  });
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
