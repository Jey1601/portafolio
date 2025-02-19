import type { PreSkill, SocialNetwork } from "../../interfaces/interface";

/** These are the tecnologías that I have used and are displayed on the index page 
 * each one of them is a hipuerlink that redirects to the page of my skills
 * the last icon is somo intuitive help to that
*/
export const preSkills : PreSkill[] = [
    {
        src_image: "/images/html5-icon.webp",
        name_skill: "HTML5"
    },
    {
        src_image: "/images/css3-icon.webp",
        name_skill: "CSS3"
    },
    {
        src_image: "/images/js-icon.webp",
        name_skill: "JS"
    },
    {
        src_image: "/images/mysql-icon.webp",
        name_skill: "MySQL"
    },
    {
        src_image: "/images/plus-icon.webp",
        name_skill: "Explorar más"
    },

];

/** These is the list of social media platforms that I have an account at */
export const socialNetworks:SocialNetwork[] = [
    {
        src_image: "/images/github-icon.webp",
        name_network: "GitHub",
        url: "https://github.com/Jey1601"
    },
    {
        src_image: "/images/linkedin-icon.webp",
        name_network: "Youtube",
        url: "https://www.youtube.com/@fernandoespinalguevara3687"
    },
    {
        src_image: "/images/youtube-icon.webp",
        name_network: "Linkedin",
        url: "https://www.linkedin.com/in/jeysonespinal/"
    },

];