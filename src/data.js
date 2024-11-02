// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
import newLogo from "./images/navbarlogo.png"

// Projects Images (add your images to the images directory and import below)
import Logo1 from "./images/logo1.png";
import Logo2 from "./images/logo2.png";
import Logo3 from "./images/logo3.png";
import Logo4 from "./images/logo4.png";
import Logo5 from "./images/logo5.png";
import Logo6 from "./images/logo.svg";
import Logo7 from "./images/logo7.png";
import Logo8 from "./images/logo8.png";
import Logo9 from "./images/logo9.png";
import Logo10 from "./images/logo10.png";
import Logo11 from "./images/logo11.png";
import Logo12 from "./images/logo12.png";
import Logo13 from "./images/logo13.png";
import Logo14 from "./images/logo14.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "danielh987";

// Navbar Logo image
export const navLogo = newLogo;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="bi:linkedin" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am passionate about technology and using it to help others improve their lives and be more productive.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 5,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 6,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 8,
    skill: <Icon icon="simple-icons:nextdotjs" className="display-4" />,
    name: "Next.js",
  },
];

// Resume link (string - "https://YourResumeUrl") 
export const resume = "https://docs.google.com/document/d/17v66akd_sHcLmU8H9k_IT-CLnP8Mr8rs/edit?usp=drive_link&ouid=105829136253040317520&rtpof=true&sd=true";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 repos will be included.
*/
export const filteredProjects = ["care-match", "portfolio", "Outwit", "algorithm-visualizer", "tutoring-queue", "auth-app"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "1st-order",
    image: Logo1,
  },
  {
    name: "2nd-order",
    image: Logo2,
  },
  {
    name: "Custom-Linked-List",
    image: Logo3,
  },
  {
    name: "DNF-and-CNF",
    image: Logo4,
  },
  {
    name: "Functions",
    image: Logo5,
  },
  {
    name: "portfolio",
    image: Logo6,
  },
  {
    name: "Graph-Traversal",
    image: Logo7,
  },
  {
    name: "Modular-Arithmetic",
    image: Logo8,
  },
  {
    name: "Pi",
    image: Logo9,
  },
  {
    name: "Outwit",
    image: Logo10,
  },
  {
    name: "care-match",
    image: Logo11,
  },
  {
    name: "algorithm-visualizer",
    image: Logo12,
  },
  {
    name: "tutoring-queue",
    image: Logo13,
  },
  {
    name: "auth-app",
    image: Logo14,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xyyryzvw";