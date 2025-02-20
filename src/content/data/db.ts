import type { PreSkill, Skills, SocialNetwork } from "../../interfaces/interface";

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

/** This of skills I own with the percentage of how good I am at them  */
export const skills: Skills = {
    "Desarrollo Web": {
        Frontend: [
            { name: "HTML5", percentage: 100, src_icon: "/images/html5-icon.webp" },
            { name: "CSS3", percentage: 70, src_icon: "/images/css3-icon.webp" },
            { name: "JavaScript", percentage: 60, src_icon: "/images/js-icon.webp" },
            { name: "TypeScript", percentage: 50, src_icon: "/images/ts-icon.webp" },
            { name: "Astro", percentage: 30, src_icon: "/images/astro-icon.webp" },
        ],
        Backend: [
            { name: "Node.js", percentage: 40, src_icon: "/images/node-icon.webp" },
            { name: "PHP", percentage: 40, src_icon: "/images/php-icon.webp" },
            { name: "Laravel", percentage: 40, src_icon: "/images/laravel-icon.webp" },
        ]
    },
    "Bases de Datos": {
        SQL: [
            { name: "MySQL", percentage: 60, src_icon: "/images/mysql-icon.webp" },
            { name: "SQL Server", percentage: 50, src_icon: "/images/sqlserver-icon.webp" },
            { name: "Oracle DB", percentage: 65, src_icon: "/images/oracle-icon.webp" }
        ],
        NoSQL: [
            { name: "MongoDB", percentage: 30, src_icon: "/images/mongodb-icon.webp" },
        ]
    },
    "Análisis de Datos & BI": {
        "Herramientas de BI": [
            { name: "Power BI", percentage: 60, src_icon: "/images/powerbi-icon.webp" },
            { name: "Tableau", percentage: 50, src_icon: "/images/tableau-icon.webp" }
        ],
        "Lenguajes de Programación": [
            { name: "Python", percentage: 40, src_icon: "/images/python-icon.webp" },
        ]
    },
    "Diseño y Prototipado": {
        "Herramientas de Diseño UI/UX": [
            { name: "Figma", percentage: 70, src_icon: "/images/figma-icon.webp" },
            { name: "Canva", percentage: 70, src_icon: "/images/canva-icon.webp" },
        ]
    }
};


/** This is the list of social media platforms that I have an account at */
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

