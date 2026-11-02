function showPage(pageId) {
    let pages =
    document.querySelectorAll(".page");
    pages.forEach(function(page){
    page.hidden = true;
});
let selectedPage = document.getElementById(pageId);
if (selectedPage){
    selectedPage.hidden = false;
}

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
    



        const themeToggleButton = 
        document.getElementById("theme-toggle");
        if(themeToggleButton)
        themeToggleButton.addEventListener("click",function() {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")){
                themeToggleButton.textContent = "Light Mode";
            } else {
                themeToggleButton.textContent = "Dark Mode";
            }
        
            
        });
        
         var distanceSlider = document.getElementById("distance-slider");
         if (distanceSlider){
            distanceSlider.addEventListener("input",function(){

                var distance = Number(distanceSlider.value);
                var distanceValue=document.getElementById("distance-value")
                var status = document.getElementById("sensor-status");
                var obstacle = document.getElementById("obstacle-icon");
                if(distanceValue){
                    distanceValue.textContent = distance;
                }
                if (status && obstacle){
                    if(distance<=20){
                    status.textContent="Warning! An obstacle is very close to the robot.";
                    obstacle.style.opacity = "1";

                

                }else{
                    status.textContent="The path is clear. No neaeby obstacle detected.";
                    obstacle.style.opacity = "0.4";
             
                }
                }

            });
         }
        

var personalFacts = [
    {
        emoji:"🤖",
        text: "I am interested in mechatronics, Robotics, and hardware."
    },
    {
        emoji:"💻",
        text: "I am learning programming and building my own website."
    },
    {
        emoji: "☀️",
        text:"I am interested in smart solar energy systems."
    },
    {
        emoji:"✨",
        text:"I enjoy exploring AI and new technologies."
    },
    {
        emoji:"🌍",
    text:"I want to learn from different cultures and international experiences."
    },
    {
        emoji:"🚀",
        text:"I am looking for new skills to learn and challenges to try."
    }

];
 var factButton = document.getElementById("fact-button");

if (factButton) {
    factButton.addEventListener("click", function() {
        var randomIndex = Math.floor(Math.random() * personalFacts.length);
        var selectedFact = personalFacts[randomIndex];

        var factEmoji = document.getElementById("fact-emoji");
        var factText = document.getElementById("fact-text");

        factEmoji.textContent = selectedFact.emoji;
        factText.textContent = selectedFact.text;
    });
} else {
    console.log("Fact button was not found!");
}









var themeButtons =
document.querySelectorAll(".theme-button");
var themeColors = {
    purple: {
        accent: '#7951a8',
        deep:'#5e3d88',
        pale:'#eee5f8'
    },
    blue: {
        accent:"#3478db",
        deep:"#2456a0",
        pale:"#e3efff",
    },
    green: {
        accent:"#27865b",
        deep:"#196641",
        pale:"#e0f5e9",

    }
}

function changeTheme(themeName){
    var selectedTheme = themeColors[themeName];
    if(!selectedTheme){
        return;
    }


 document.documentElement.style.setProperty(
    "--accent",
    selectedTheme.accent
 );
 
document.documentElement.style.setProperty(
    "--accent-deep",
    selectedTheme.deep
 );
 document.documentElement.style.setProperty(
    "--accent-pale",
    selectedTheme.pale
 );


var themeMessage = document.getElementById("theme-message");

if (themeMessage) {
    themeMessage.textContent = "Your theme is now " + themeName + "!";
}



localStorage.setItem("preferredTheme", themeName);
}



themeButtons.forEach(function(button) {
    button.addEventListener("click",function() {
    
    changeTheme(button.dataset.theme);

});
});
var savedTheme = 
localStorage.getItem("preferredTheme");

if (savedTheme && themeColors[savedTheme]) {
    changeTheme(savedTheme);
}

var backToTopButton = document.getElementById("back-to-top");

if(backToTopButton){
    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

var ideaButton = document.getElementById("idea-button");
var ideaTitle = document.getElementById("idea-title");
var ideaDescription = document.getElementById("idea-description");

var projectIdeas = [
    {
        title:"Smart Robot",
        description: "Build a robot that can move and avoid obstacle."
    
    },

{
    title: "Solar Energy System",
    description:"Create a system that uses solar energy to power small devices."

},
{
    title: "Mental Detection Robot",
    description:"Create a robot that can detect metal objects."
    },
    {

    title:"AI Healthcare",
    description:"Explore how Ai can help monitor people'health"

    }

];

if(ideaButton && ideaTitle && ideaDescription){
    ideaButton.addEventListener("click", function(){
        var randomIndex = Math.floor(Math.random() * projectIdeas.length);
        var selectedIdea = projectIdeas[randomIndex];
        ideaTitle.textContent = selectedIdea.title;
        ideaDescription.textContent = selectedIdea.description;
    });


}




var contactForm = document.getElementById("contact-form");

if(contactForm) {
    contactForm.addEventListener("submit", function(event){
        event.preventDefault();
        alert("Thank you! Your message has been received.")

        contactForm.reset();
    });
}
//vintage lab terminal
var terminalInput = document.getElementById("terminal-input");
var terminalOutput = document.getElementById("terminal-output");

var terminalCommands = {
    help:
    "Available commands: about, archive, projects, skills, scan, clear",

    about:"Welcome, explorer! You are inside Salma's Vintage Digital Lab. A place where old technology meets new ideas.",
    archive: "TIME CAPSULE 1985: Ideas never get old. Every great invention started with a simple question.",
    projects:"PROJECT FILES FOUND: Smart Solar System | AI Healthcare | Personal Portfolio.",
    skills:"SKILL DATABASE: HTML | CSS | JavaScript | Python | Hardware Exploration.",
    scan: "Scanning the laboratory... 3 project files found. 5 technologies detected. Curiosity level: UNLIMITED."
};

if (terminalInput && terminalOutput) {
    terminalInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter"){
            var command = terminalInput.value.trim().toLowerCase();
            if (command === "") {
                return;
            }
            var commandLine = document.createElement("p");
            commandLine.textContent = "guest@vintage-lab:~$ " + command;
            terminalOutput.appendChild(commandLine);
             
            var result = document.createElement("p");
            if (command === "clear") {
                terminalOutput.innerHTML = "";

            } else if (terminalCommands[command]) {
                result.textContent = terminalCommands[command];
                terminalOutput.appendChild(result);

            }else {
                result.textContent = "Command not found. Type 'help' to see available commands.";
                terminalOutput.appendChild(result);
            }
            terminalInput.value = "";
        







        }
    });
}

//archive button
var archiveButtons = document.querySelectorAll(".archive-file");

//content

var archivecontent = document.getElementById("archive-content");
 
//info

var archiveFiles = {
    PROJECT_01: "Smart Solar Energy System: exploring solar tracking, energy storage,  and renewable energy.",

    PROJECT_02: "Metal Detection Robot: Exploring robotics, Arduino, and hardware projects.",


};

archiveButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var fileName = button.textContent.trim();
        archivecontent.textContent = archiveFiles[fileName];
    });
});
  

var journeyItems = document.querySelectorAll(".journey-item");

if (journeyItems.length > 0) {
    var journeyObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {


                entry.target.classList.add("show");
                journeyObserver.unobserve(entry.target);

            }
        });
    });

    journeyItems.forEach(function(item) {
        journeyObserver.observe(item);
    });
}



var vintageFacts = [
    "The first computer mouse was made of wood!",
    "The first website was created in 1991.",
    "Early computers used floppy disks to store data.",
    "The first computer bug was an actual insect.",
    "The first iPhone was released in 2007."

];

var factText = document.getElementById("vintage-fact-text");
var nextFactButton = document.getElementById("next-fact");

 var currentFact = 0;

 if (factText && nextFactButton) {
    nextFactButton.addEventListener("click", function() {
        currentFact++;  

        if (currentFact >= vintageFacts.length) {
            currentFact = 0;

        }

        factText.textContent = vintageFacts[currentFact];
    });
}









// BEHIND THE SCREEN INTERACTION

var screenButtons = document.querySelectorAll(".screen-button");
var screenPanel = document.getElementById("screen-panel");
var fileNumber = document.getElementById("file-number");

var screenData = {
    interests: {
        number: "FILE_001",
        title: "MY INTERESTS",
        description: "I enjoy exploring technology and discovering how things work.",
        items: [
            "Mechatronics Engineering",
            "Robotics and Hardware",
            "Artificial Intelligence",
            "Creative Technology"
        ]
    },

    learning: {
        number: "FILE_002",
        title: "CURRENTLY LEARNING",
        description: "I am always trying to improve my skills and learn something new.",
        items: [
            "HTML, CSS and JavaScript",
            "Python Programming",
            "Arduino and Electronics",
            "Artificial Intelligence"
        ]
    },

    goals: {
        number: "FILE_003",
        title: "FUTURE GOALS",
        description: "I hope to turn my curiosity into useful projects and real-world solutions.",
        items: [
            "Study Mechatronics Engineering",
            "Build innovative technology projects",
            "Gain international experience",
            "Create my own technology project"
        ]
    },

    facts: {
        number: "FILE_004",
        title: "FUN FACTS",
        description: "A few little things about me!",
        items: [
            "I enjoy learning new languages",
            "I have a passion for engineering",
            "I love creative problem-solving",
            "I enjoy working on new ideas"
        ]
    }
};

function showScreen(panelName) {
    var selectedData = screenData[panelName];

    if (!selectedData || !screenPanel || !fileNumber) {
        return;
    }

    fileNumber.textContent = selectedData.number;

    var listItems = "";

    for (var i = 0; i < selectedData.items.length; i++) {
        listItems += "<li>" + selectedData.items[i] + "</li>";
    }

    screenPanel.innerHTML =
        "<h3>" + selectedData.title + "</h3>" +
        "<p>" + selectedData.description + "</p>" +
        "<ul>" + listItems + "</ul>";

    screenButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    var activeButton = document.querySelector(
        '.screen-button[data-panel="' + panelName + '"]'
    );

    if (activeButton) {
        activeButton.classList.add("active");
    }
}

screenButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var panelName = button.getAttribute("data-panel");
        showScreen(panelName);
    });
});























