import MetaImage from "../../assets/Certificate/meta-front-end-developer-certificate.png";
import MetaBadge from "../../assets/Certificate/meta-front-end-developer-certificate-badge.png";
import WebDesign1 from "../../assets/Certificate/Web Design for Beginner.png";
import WebDesign2 from "../../assets/Certificate/Front End Web Development.png";
import WebDesign3 from "../../assets/Certificate/Server-side Web Programming.png";
import Python1 from "../../assets/Certificate/Python Programming 1.png";
import Python2 from "../../assets/Certificate/Python Programming 2.png";

export const educationTabs = [
  {
    category: "University",
    subMenu: [
      {
        id: 1,
        title: "Bachelor Information Technology (BIT)",
        institute: "Seagis Campus, Sri Lanka",
        period: "2020 – 2023",
        description:
          "Focused on software engineering, UI/UX principles, web technologies, and modern application development.",
      },
    ],
  },
  {
    category: "College",
    subMenu: [
      {
        id: 1,
        title: "GCE Advanced Level (A/L)",
        institute: "Colombo Asoka College",
        period: "2018",
        description:
          "Completed advanced level studies with focus on ICT and mathematics.",
      },
      {
        id: 2,
        title: "GCE Ordinary Level (O/L)",
        institute: "Madagama Abhaya Model School",
        period: "2015",
        description:
          "Completed ordinary level studies with a strong foundation in science and mathematics.",
      },
    ],
  },
];

export const onlineTabs = [
  {
    category: "Coursera",
    subMenu: [
      {
        id: 1,
        title: "Meta Front-End Developer",
        institute: "Coursera via Meta",
        period: "Sep 2023",
        description: ( 
          <p> 
            The <b>Meta Front-End Developer Professional Certificate</b> 
            on Coursera is a beginner-friendly online program designed to 
            teach the essential skills needed to build modern, responsive 
            websites and web applications. Created by Meta, the course 
            covers core front-end technologies such as <b>HTML, CSS, 
            JavaScript, React, Git, and UI/UX principles</b>, with a 
            strong focus on hands-on projects and real-world practice. 
            It is self-paced, takes about <b>6–7 months</b> to complete, 
            and requires no prior coding experience. Upon completion, learners 
            earn an <b>industry-recognized certificate</b> and a portfolio of 
            projects that can help them prepare for entry-level front-end developer roles. </p> 
        ),
        img: MetaImage,
        badgeImg: MetaBadge,
        verification: {
          link: "https://www.coursera.org/account/accomplishments/professional-cert/N52ESHM1IMWI",
        },
      },
    ],
  },

  {
    category: "DP Education",

    courseCategory: [
      {
        categoryId: 1,
        categoryTitle: "Web Development",
        subMenuType: "WEB_DEVELOPMENT",
      },
      {
        categoryId: 2,
        categoryTitle: "Programming in Python",
        subMenuType: "PYTHON_PROGRAMMING",
      },
    ],

    subMenu: [
      {
        id: 1,
        courseType: "WEB_DEVELOPMENT",
        title: "Web Design for Beginners",
        institute: "DP Education via University of Moratuwa",
        period: "June 2023",
        description: (
          <p>
            The course cover the basic building blocks for web designing, 
            including introducing WWW and Internet, essential HTML elements, 
            applying CSS styles, creating interactivity using Javascript and 
            designing responsive web pages.
          </p>
        ),
        img: WebDesign1,
        verification: {
          link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
          code: "0DqXRd2EW7",
        },
      },
      {
        id: 2,
        courseType: "WEB_DEVELOPMENT",
        title: "Front-End Web Development",
        institute: "DP Education via University of Moratuwa",
        period: "July 2023",
        description: (
          <p>
            The course cover the basic building blocks for front-end web development, 
            including introducing jQuery, AJAX, single page applications (SPA), 
            and the development of a web application using the Angular framework.
          </p>
        ),
        img: WebDesign2,
        verification: {
          link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
          code: "YaCnQFujYp",
        },
      },
      {
        id: 3,
        courseType: "WEB_DEVELOPMENT",
        title: "Server-side Web Programming",
        institute: "DP Education via University of Moratuwa",
        period: "July 2023",
        description: (
          <p>
            The course cover the basic building blocks for server-side web programming,
            including introducing NodeJS and Express, REST APIs and handling data, 
            developing an HTTP server with NodeJS and Express framework, and web server security.
          </p>
        ),
        img: WebDesign3,
        verification: {
          link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
          code: "yg3gVBdzxH",
        },
      },
      {
        id: 4,
        courseType: "PYTHON_PROGRAMMING",
        title: "Python for Beginners",
        institute: "DP Education via University of Moratuwa",
        period: "August 2024",
        description: (
          <p>The Python for Beginners course is designed for anyone with 
             no prior programming experience. It introduces Python fundamentals 
             in a simple and easy-to-understand way, covering basics such as 
             variables, data types, loops, and functions. Through hands-on exercises 
             and practical examples, learners build a strong foundation in Python and 
             gain the confidence to start coding and solving real-world problems.
          </p>
        ),
        img: Python1,
        verification: {
          link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
          code: "PwK0BfGhu4",
        },
      },
      {
        id: 5,
        courseType: "PYTHON_PROGRAMMING",
        title: "Python Programming",
        institute: "DP Education via University of Moratuwa",
        period: "October 2024",
        description: (
          <p>The Python Programming course is designed for learners who already 
            have basic coding knowledge and want to deepen their Python skills. 
            It covers advanced topics such as object-oriented programming, file 
            handling, modules, libraries, and error handling. Through practical 
            projects and real-world examples, learners enhance their problem-solving 
            abilities and gain the confidence to build more complex Python applications.
          </p>
        ),
        img: Python2,
        verification: {
          link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
          code: "jK1nBOBYhF",
        },
      },
    ],
  },

  {
    category: "Udemy",
    subMenu: [
      {
        id: 1,
        title: "Modern React & Tailwind",
        institute: "Udemy",
        period: "2024",
        description:
          "Built modern React applications using Tailwind CSS.",
      },
    ],
  },
];
