// You can add JavaScript interactivity here if needed
// For example, smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



//
function show_full_project(num) {
    var project = ""
    var project_vid_path = ""
    var project_description = ""

    if (num == 1) {
        project = "Car Kit shopping website"
        project_vid_path = "./front/assets/shop_app.mp4"
        project_description = "Kit My Car is an innovative and user-centric platform designed to cater to automotive enthusiasts seeking to enhance the aesthetic and performance aspects of their vehicles through widebody kits. This project showcases my skills in web development, user experience design, and e-commerce functionality. This Website is a testament to my ability to merge creative design, user experience optimization, and e-commerce functionality to create a platform that caters to the needs and aspirations of automotive enthusiasts. Through this project, I demonstrate my proficiency in web development and my commitment to delivering engaging and functional digital experiences. "
    }
    else if (num == 2) {
        project = "Valorant character collection"
        project_vid_path = "./front/assets/groupie_tracker.mp4"
        project_description = "The Valorant Character Showcase Website is a dynamic and immersive platform designed to provide gamers and fans of the popular first-person shooter game, Valorant, with comprehensive information about each in-game character. This project exemplifies my expertise in web development, user interface design, and a passion for gaming. This project showcases my proficiency in blending a love for gaming with web development skills. Through this project, I demonstrate my ability to create an informative and visually captivating platform that caters to the interests of gamers and fans of the Valorant universe."
    }
    else if (num == 3) {
        project = '"Le Charolais" local butcher shop'
        project_vid_path = "./front/assets/charolais.mp4"
        project_description = "Le Charolais Local Butcher Shop Website is a warm and inviting online platform dedicated to showcasing the finest locally sourced meats and artisanal products offered by Le Charolais, a cherished local butcher shop. This project reflects my expertise in web development, user-centered design, and my commitment to promoting community businesses. This one exemplifies my ability to translate a cherished local business into the digital realm, preserving its essence and values. This project showcases my proficiency in web development and design, while also highlighting my dedication to supporting local enterprises and fostering community connections."
    }


    document.getElementById("full_project_title").innerHTML = project
    document.getElementById("project_video").src = project_vid_path
    document.getElementById("full_project_description").innerHTML = project_description
    document.getElementById("full_project").style.display = "flex"
    document.getElementById("full_project_blur").style.display = "block"
}

function close_full_project_view() {
    document.getElementById("full_project").style.display = "none"
    document.getElementById("full_project_blur").style.display = "none"
}