function showPage(pageId) {
    let pages =
    document.querySelectorAll(".page");
    pages.forEach(function(page){
    page.hidden = true;
});


document.getElementById(pageId).hidden = false;
}


    
    document.querySelectorAll(".details-button")
    .forEach(function(button)  {
        button.addEventListener("click",function(){

    const detailsId =
    button.getAttribute("aria-controls");
        const details = 
        document.getElementById(detailsId);
        if(!details){
            return;
        }
        const isExpanded = 
        button.getAttribute("aria-expanded")==="true";
        details.hidden= isExpanded;
    button.setAttribute("aria-expanded", String(!isExpanded));
        if (isExpanded){
            button.textContent = "Learn More";
        } 
        else{
            button.textContent = "Show Less";
        }



        });

        });
    



        const themeButton = 
        document.getElementById("theme-toggle");
        themeButton.addEventListener("click",function() {
            document.body.classList. toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")){
                themeButton.textContent = "Light Mode";
            } else {
                themeButton.textContent = "Dark Mode";
            }
        
            
        });
        const languageButton = document.getElementById("language-toggle");
        let currentLanguage = "en";
         const translation = {
            en: {
                Home: "Hi, I am Salma",
                about: "About Me",
                Skills: "My Skills",
                Project: "My Projects",
                Dreams: "My dreams",
                contact: "Contact"
            },

            ar: {
                Home: "أهلا, انا سلمي",
                about:"من أنا",
                Skills:"مهاراتي",
                
                Project: "مشاريعي",


            }
         }


/*const body = document.body;
const themeButton = document.getElementById("theme-toggle");
const menuButton = document.getElementById('menu-toggle');
const navigation = document.getElementById('primary-nav');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function setTheme(dark){
    body.classList.toggle('dark-mode',dark);
    themeButton.setAttribute('aria-label',dark? 'Swich to light mode' : 'Swich to dark mode');
    themeButton.title=dark ? 'Swich to light mode':'Swich to dark mode';
    document.querySelector('meta[name="theme-color"]').content = dark? '#17131d': '#f7f5fb';

}*/
