AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Simple Snake Games",
    cardImage: "assets/images/project-page/snakegame.png",
    description: "A simple snake game built on Python.",
    tag_img: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    GithubLink: "https://github.com/congvthanh9/snake.git",
  },
  {
    title: "Drumkit Website",
    cardImage: "assets/images/project-page/drumkit.png",
    description: "A simple website to run audio based on my knowledge about javascript, css and html.",
    tag_img: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    GithubLink: "https://github.com/congvthanh9/Dumkit-Website.git",
  },
  {
    title: "Translator App",
    cardImage: "assets/images/project-page/translator.png",
    description: "This is my first app i created by Python. Source code, background and icon i added. You can download and covert theme to exe file, or download from this link: https://mega.nz/folder/rl8SwBJL#u3Y-_N3c9RlWnnpYXoUkiA",
    tag_img: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    GithubLink: "https://github.com/congvthanh9/Vn-En-mylove-translate.git",
  },
  
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, GithubLink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${GithubLink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
