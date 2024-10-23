import {
    mobile,
    backend,
    creator,
    web,
    uiux,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    photoshop,
    wordpress,
    inctic,
    fintech,
    php,
    jquery,
    school,
    brewingHouse,
    waterasia,
    balthali,
    bizpro,
    bpsmriti,
    empteam,
    aptioswarcade,
    restaurant,
    hospital,
    dashboard,
    news,
    ecommerce,
    ingo,
    chairstation,
    myImage,
    facebook,
    instagram,
    linkedin,
    dribble,
  gitmedia,
  phone,
    email,
    property,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
      disabled:'false'
    },
    {
      id: "about",
      title: "About",
      disabled:'false'
    },
    {
      id: "work",
      title: "Work",
      disabled:'false'
    },
    {
      id: "contact",
      title: "Contact",
      disabled:'true'
    },
  ];
  
const contactDetails = [
  {
    title: "Email",
    icon: email,
    value : "msmizans@gmail.com"
  },
  {
    title: 'Phone',
    icon: phone,
    value:'+977-9849791116'
  }
]
  
  const socialLinks = [
   
    {
      name: "Linkedin",
      icon: linkedin,
      url:'https://www.linkedin.com/in/mijan-shrestha-412aba12a/',
    },
    {
      name: "Dribbble",
      icon: dribble,
      url:'https://dribbble.com/MijanShrestha',
    },
    {
      name: "Facebook",
      icon: facebook,
      url:'https://www.facebook.com/shrestha.mijan/'
    },
    {
      name: "Instagram",
      icon: instagram,
      url:'https://www.instagram.com/mizansth_grinosaurus/?hl=en',
    },
    {
      name: "Github",
      icon: gitmedia,
      url:'https://github.com/mizgrin',
    },
 
  ]

  const services = [
    {
      title: "Website Designer",
      icon: web,
    },
    {
      title: "UI/UX Designer",
      icon: uiux,
    },
    {
      title: "Full Stack Wordpress developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Graphic Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "JQuery",
      icon: jquery,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "React JS (Intermediate)",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS (Intermediate)",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name : 'Graphic design',
      icon : photoshop,
    },
  ];
  
  const experiences = [
    {
      title: "Secondary level computer teacher",
      company_name: "New Holy Cross School",
      company_website:"/",
      icon:school ,
      iconBg: "#383E56",
      date: "June 2016 - November 2021",
      points: [
        "Delivered comprehensive instruction and support in computer fundamentals to secondary level students as a dedicated computer teacher."
      ],
    },
    {
      title: "Website Designer",
      company_name: "Fintech Nepal",
      company_website:"https://fintechnepal.com/",
      icon: fintech,
      iconBg: "#E6DEDD",
      date: "2018 - December 2022",
      points: [
       " Proficient in meticulously translating PSD mockups into pixel-perfect HTML and CSS code, guaranteeing the creation of responsive webpages that adhere closely to design specifications.",
       " Skilled in crafting intuitive UI/UX interfaces utilizing Semantic HTML, SCSS, JavaScript, and jQuery, ensuring seamless user experiences across platforms.",
       " Demonstrated expertise in swiftly identifying and resolving intricate CSS and JavaScript issues within diverse projects, optimizing performance and functionality.",
       " Exemplary leadership qualities showcased through mentoring interns and junior developers, coupled with adept planning and delegation of frontend tasks to achieve project objectives efficiently.",
       " Proven track record of delivering high-quality frontend solutions through a meticulous approach to detail and a commitment to excellence.",
      ],
    },
    {
      title: "Full stack wordpress Developer",
      company_name: "Fintech Nepal",
      company_website:"www.fintechnepal.com.np",
      icon: fintech,
      iconBg: "#383E56",
      date: "2020 - Dec 2022",
      points: [
        "Proficient in seamlessly translating PSD and Figma designs into meticulously crafted responsive HTML and SCSS code, augmenting interactivity using PHP within the WordPress framework.",
        " Skilled in proficiently deploying dynamic wordpress websites to clients' domains, ensuring flawless functionality and user satisfaction.",
       " Demonstrated expertise in diligently maintaining and updating existing WordPress projects, with a focus on optimizing performance and enhancing overall user experience.",
       " Proven track record of delivering exceptional results through meticulous attention to detail and a commitment to staying abreast of the latest industry trends and best practices.",
       " Adept at collaborating with cross-functional teams to drive successful  project outcomes, coupled with strong communication and problem-solving skills.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software engineer - Frontend",
      company_name: "Inctic labs",
      company_website:"www.inctic.io",
      icon: inctic,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed responsive web applications using JavaScript, HTML5, CSS3 and SCSS.",
         "Developed and maintained UI designs with Figma tools",
          "Proficient in JavaScript and Jquery for enhancing frontend functionalities.",
         " Utilized Git for version control and collaborated within development teams.",
         " Implemented responsive design principles and Material UI and Semantics HTML for visually appealing interfaces.",
        "  Experienced in using blade files in Laravel development.",
         " Adapted quickly to emerging technologies and systems.",
        "  Demonstrated an independent mindset to drive project goals forward.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Emp team job portal",
      description:
        "EMP Team is a UAE-based company that provides professional employer organization (PEO) services, helping businesses manage HR, payroll, and employee benefits. They specialize in simplifying administrative tasks, ensuring compliance with local labor laws, and offering tailored solutions for workforce management across the Middle East region",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
        {
          name: "Jquery/JS",
          color: "green-text-gradient",
        },
      ],
      image: empteam,
      source_code_link: "https://empteam.ae/",
    },
    {
      name: "Bp smriti hospital",
      description:
        "B.P. Smriti  Hospital is a 100 beded multi-speciality hospital located at Shree Kanti Marg, Tilingtar, beside Basundhara Police Station, Kathmandu Metroplitan City-3.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
        {
          name: "Jquery/JS",
          color: "green-text-gradient",
        },
      ],
      image: bpsmriti,
      source_code_link: "https://bpsmritihospital.com.np/",
    },
    {
      name: "Water asia international",
      description:
        "The website for Water Asia International is designed for an international non-governmental organization. The website may also include resources, reports, and contact information to engage with stakeholders and the community.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: waterasia,
      source_code_link: "https://waterasiainternational.com.np/",
    },
    {
      name: "The brewing house",
      description:
        "The Brewing House website, built on WordPress with WooCommerce, SCSS, HTML5, and jQuery, is an e-commerce platform for coffee and barista products. It features a modern, user-friendly design with responsive navigation for an optimal shopping experience across all devices.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
        {
          name: "Woocommerce",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: brewingHouse,
      source_code_link: "https://thebrewinghouse.com/",
    },
    {
      name: "Businesspro",
      description:
        "BizPro's website is a descriptive platform for their business management system, featuring a clean, professional design with intuitive navigation.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bizpro,
      source_code_link: "http://bizpro.com.np/",
    },
   
    {
      name: "Balthali resort",
      description:
        "Balthali's website is a tourism platform showcasing the serene Balthali village resort, highlighting its natural beauty, accommodations, and activities, with a focus on providing an immersive visitor experience.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "Wordpress",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: balthali,
      source_code_link: "https://www.balthali.com/",
    },
    {
      name: "Aptos warcade",
      description:
        "Aptos Warcade is a blockchain-based gaming platform where players can compete in games and earn cryptocurrency rewards.",
      tags: [
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "React js",
          color: "green-text-gradient",
        },
        {
          name: "Node js",
          color: "blue-text-gradient",
        },
      ],
      image: aptioswarcade,
      source_code_link: "https://aptoswarcade.com/",
    },
    
  ];
  
  const themesDesign = [
    {
      name: "Food and Restaurant",
      image: restaurant,      

    },
    {
      name: "News portal",
      image: news,      

    },
    {
      name: "Hospital or clinic",
      image: hospital,      

    },
    {
      name: "E-learning platform dashboard",
      image: dashboard,      

    },
    {
      name: "E-commerce platform for dresses",
      image: ecommerce,      

    },
    {
      name: "E-commerce for furnitures",
      image: chairstation,      

    },
    {
      name: "Company website",
      image: ingo,      

    },
    {
      name: "Properties buy and sale",
      image: property,      

    }
  ]
  export { services, socialLinks, technologies, experiences, testimonials, contactDetails, projects, myImage,themesDesign };