import personalData from "../data/personalData.js";
import toolsData from "../data/toolsData.js";
import projectsData from "../data/projectsData.js";


const renderHeader = () => {
  const headerHTML = `
    <div class="header__logo top-layer-element">
      <img class="header__logo-icon" src="icons/${personalData.logoIcon}" alt="logo icon">
      <p class="header__logo-label">${personalData.logoLabel}</p>
    </div>
    <div class="header__socmed-list top-layer-element">
      <a class="socmed-list__link" href="${personalData.facebookLink}">
        <img class="socmed-list__link-icon" src="icons/facebook-icon.png" alt="socmed-icon">
      </a>
      <a class="socmed-list__link" href="${personalData.tiktokLink}">
        <img class="socmed-list__link-icon" src="icons/tiktok-icon.png" alt="socmed-icon">
      </a>
      <a class="socmed-list__link" href="${personalData.intagramLink}">
        <img class="socmed-list__link-icon" src="icons/instagram-icon.png" alt="socmed-icon">
      </a>
    </div>
    <button class="header__contact-btn top-layer-element">Contact Me</button>
  `;

  document.querySelector('header').innerHTML = headerHTML;
}

const renderName = () => {
  const name = document.querySelector('#page-one-section .name');
  name.innerText = personalData.name;
}

const renderPageTwo = () => {
  const skillsListHTML = personalData.skills.map(skill => `<li>${skill}</li>`).join('');
  const pageTwoHTML = `
    <p class="about-me top-layer-element">${personalData.about}</p>
    <ul class="skills-list top-layer-element">${skillsListHTML}</ul>`;

  document.getElementById('page-two-section').innerHTML = pageTwoHTML;
}

const renderPageThree = () => {
  const toolsHTML = toolsData.map(tool => `
    <div class="tools-list__tool">
      <img class="tools-list__tool-img" src="icons/${tool.icon}" alt="tool-icon" title="${tool.name}">
    </div>`
  ).join('');

  const projectsHTML = projectsData.map(project => `
    <div class="projects-list__project-card">
      <h4 class="projects-list__project-card-title">${project.title}</h4>
      <p class="projects-list__project-card-description">${project.description}</p>
      <a  class="projects-list__project-card-view-btn" href="${project.link}">View More</a>
    </div>`
  ).join('')


  const pageThreeHTML = `
    <div class="tools-container top-layer-element">
      <div class="tools-container__heading">Tools</div>
      <div class="tools-list d-grid">${toolsHTML}</div>
    </div>
    <div class="projects-container top-layer-element">
      <div class="projects-container__heading">Projects</div>
      <div class="projects-list">${projectsHTML}</div>
    </div>`;

  document.getElementById('page-three-section').innerHTML = pageThreeHTML;
}


export default  function renderContentMainFunction(){
  renderHeader();
  renderName();
  renderPageTwo();
  renderPageThree();

  const copyrightTxt = document.querySelector('.copy-right-txt');
  copyrightTxt.innerText = `©${new Date().getFullYear()} Meowish. All rights reserved`
};

