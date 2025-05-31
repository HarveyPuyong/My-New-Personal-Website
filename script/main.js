import renderContentMainFunction from "./renderContent.js";
import changePageFunctionality from "./changePage.js";
import emailSender from "./emailSender.js";

renderContentMainFunction()

document.addEventListener('DOMContentLoaded', () => {
  changePageFunctionality();
  emailSender();
});
