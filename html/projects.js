// projects.js

const projects = [
  {
    title: "Machine Learning NBA Sports Betting Analysis Tool",
    img: "/img/SportsBetterPNG.png",
    link: "MLproj.html",
    category: "Python",
  },
  // {
  //   title: "JobAipply",
  //   img: "/img/rubik.png",
  //   link: "ProjFive.html",
  //   category: "Python",
  // },
  {
    title: "Rubiks Cube",
    img: "/img/rubik.png",
    link: "ProjFive.html",
    category: "Python",
  },
  {
    title: "Path Finder Visualizer",
    img: "../img/bfs2.png",
    link: "ProjOne.html",
    category: "React JS",
  },
  {
    title: "Flappy Bird",
    img: "../img/FB.png",
    link: "ProjTwo.html",
    category: "Python",
  },
  {
    title: "Sudoku",
    img: "../img/sod1.png",
    link: "ProjThree.html",
    category: "Python",
  },
  {
    title: "MacTrac - a key counter",
    img: "/img/MacTracPNG.png",
    link: "mactrac.html",
    category: "Python",
  },
  {
    title: "Minesweeper",
    img: "../img/MS.png",
    link: "ProjFour.html",
    category: "Python",
  },
  {
    title: "Tic Tac Toe",
    img: "../img/ttt1.png",
    link: "ProjSix.html",
    category: "Python",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const projectContainer = document.querySelector("#project-container");

  projects.forEach((project) => {
    const projectBox = document.createElement("div");
    projectBox.classList.add("col-md-4", "col-sm-6");
    projectBox.innerHTML = `
      <div class="work-box">
        <a href="${project.link}">
          <div class="work-img">
            <img src="${project.img}" alt="" class="img-fluid">
          </div>
          <div class="work-content">
            <div class="row">
              <div class="col-sm-8">
                <h2 class="w-title">${project.title}</h2>
                <div class="w-more">
                  <span class="w-ctegory">${project.category}</span>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="w-like">
                  <span class="ion-ios-plus-outline"></span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    `;
    projectContainer.appendChild(projectBox);
  });
});
