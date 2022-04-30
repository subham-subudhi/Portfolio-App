import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
      livedemo: 'https://mehulk05.github.io/MyShop/#/',
      githurl: 'https://github.com/subham-subudhi/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/subham-subudhi/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/z26.png',
      tech: 'React, Node, MongoDB, Express'
    },


    {
      id: 3,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/subham-subudhi/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/subham-subudhi/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },


    {
      id: 5,
      title: 'Integrate Medium Blogs on your React App',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/subham-subudhi/Medium-Blog-On-React-App',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/z4.png',
      tech: 'React JS'
    },



    {
      id: 6,
      title: 'News App using ReactJS (Parsing XML to JSON)',
      desc: '',
      livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
      githurl: 'https://github.com/subham-subudhi/NewsApp-using-React',
      mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
      imgUrl: 'assets/images/z24.png',
      tech: 'React JS, XMl to JSON'
    },



    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-Book/',
      githurl: 'https://github.com/subham-subudhi/Blog-Book',
      mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: 'https://mehulk05.github.io/COVOID-19/',
      githurl: 'https://github.com/subham-subudhi/COVOID-19',
      mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Weather App with React',
      desc: '',
      livedemo: 'https://mehulk05.github.io/React-Weather/',
      githurl: 'https://github.com/subham-subudhi/React-Weather-App',
      mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/subham-subudhi/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/subham-subudhi/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      tech: 'Angular8, Java ,Hibernate'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/subham-subudhi/Personal-Portfolio-Angular-Updated',
      mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/subham-subudhi/My-Personal-Portfolio',
      mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
      imgUrl: 'assets/images/z12.png',
      tech: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/subham-subudhi',
      mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
      imgUrl: 'assets/images/z13.png',
      tech: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/subham-subudhi/Matrimonial-Website.git',
      mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = `Software Developer with 1.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, and UI with Responsive Designs .
  Have good understanding of Python, Core Java, Bootstrap, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1REXITwR2ixVneOPmWLNA7Zt0F_SAKQkP/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '70%'
    },
    {
      'id': '2',
      'skill': 'CORE JAVA',
      'progress': '85%'
    },
    {
      'id': '3',
      'skill': 'SQL, MYSQL',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'REST Webservices',
      'progress': '80%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2016 - 2020',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Technology',
      'info': `Veer Surendra Sai University Of Technology, Burla is Formerly UCE, in Odisha
      Completed B.Tech in Mechanical Engineering with 9.56 CGPA  
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'VEER SURENDRA SAI UNIVERSITY OF TECHNOLOGY, BURLA'
    },
    {
      'id': '2',
      'from_to_year': '2014 - 2016',
      'education': 'Higher Secondary',
      'stream': 'Science',
      'institution': 'KHALLIKOTE JUNIOR COLLEGE, BERHAMPUR',
      'info': `There was also a good base on physics, mathematics and chemistry.
Completed my high school with 80.33%.`
    },
    {
      'id': '3',
      'from_to_year': '2013 - 2014',
      'education': 'Secondary  School',
      'stream': 'Maths , English , Science, Social Science, Litrature and Languages',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 92.66%.`
    }
  ];
  exprienceData: any = [
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB . 
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website . 
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application . 
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation. 
  // `
  //   },

    {
      id: 1,
      company: 'Cognizant Technology Solutions Pvt India Ltd.',
      location: 'Kolkata',
      timeline: 'SEP-2020 to MAR-2022',
      role: 'Programmer Analyst',
      work: `Technologies : Angular , Java, Spring Boot ,SQL, REST Webservices . 
  
  Project 1 : 
  • Full Stack Developer with Hands-on in Design & Development of SpringBoot based Microservices to automate business logic, data transformations, and transactions.
  • Implemented Enhanced Search for Finance application using ELK Stack
  • Build Transactional UI system in Angular 8 to show timely, consistent, accurate automated Subscription Revenue data and reports
  • Automated API invocations using Apache Airflow workflow management platform
  • Enabling & Deploying applications in AWS Cloud using EKS, Kubernetes, and Dockers`
    },

    {
      id: 2,
      company: 'Amdocs Development Centre India LLP.',
      location: 'Pune',
      timeline: 'MAR-2022 to Present',
      role: 'Software Developer',
      work: `Technologies :  Amdocs Mediation, Java, Spring Boot ,SQL . 
  
  Project 1 : 
  // • Software Developer with Hands-on in Design & Development of SpringBoot based Microservices to automate business logic, data transformations, and transactions.
  // • Implemented Enhanced Search for Finance application using ELK Stack
  // • Build Transactional UI system in Angular 8 to show timely, consistent, accurate automated Subscription Revenue data and reports
  // • Automated API invocations using Apache Airflow workflow management platform
  // • Enabling & Deploying applications in AWS Cloud using EKS, Kubernetes, and Dockers`
    },


  ]
  contactus(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'contact', data);
  }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
