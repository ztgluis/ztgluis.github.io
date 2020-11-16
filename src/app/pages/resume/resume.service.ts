import { Injectable } from '@angular/core';
import { concat, Observable, of } from 'rxjs';
import { toArray } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ResumeService {
    projects = {
        title: 'Projects',
        contents: [
            {
                title: 'Food Truck Finder',
                subtitle: 'https://ztgluis.github.io/food-truck-challenge',
                bulletpoints: [
                    `This project is a coding challenge with the objective to help anyone in San Francisco find the five closest food trucks to them`
                ]
            },
            {
                title: 'Angular Starter with Bootstrap + Material Design',
                subtitle:
                    'https://ztgluis.github.io/angular-bootstrap-material-starter',
                bulletpoints: [
                    `This project is an Angular starter pack with a robust set of configurations and features integrating Angular Material and Bootstrap to enable quick scaffolding of the project`
                ]
            }
        ]
    };

    workExperience = {
        title: 'Work Experience',
        contents: [
            {
                title: 'Twitter',
                subtitle: 'Engineering Manager',
                startDate: 'November 2020',
                endDate: 'Present',
                bulletpoints: []
            },
            {
                title: 'Capital One',
                subtitle: 'Manager, Software Engineering',
                startDate: 'July 2019',
                endDate: 'November 2020',
                bulletpoints: [
                    `People Manager for a software engineering team of 5 developers`,
                    `Individual Contributor leading the decomposition of monolithic application into micro-service architecture, automated the CI/CD processes and management of AWS resources`,
                    `Partner with Product Owner, external teams and stakeholders to prioritize and schedule feature releases`
                ]
            },
            {
                title: 'Capital One',
                subtitle: 'Principal Software Engineer',
                startDate: 'June 2017',
                endDate: 'July 2019',
                bulletpoints: [
                    `Front-end rewrite for two mission-critical internal Cyber platforms using Angular, TypeScript, CSS3, HTML5, RxJS, D3 and created a custom style system using Material, Bootstrap, D3 and PrimeNG`,
                    `Defined standards and conventions for Unit Testing with Jasmine, Karma and Jest`,
                    `Development of Express, NodeJS, MongoDB REST API's and integrate with vendor tools`,
                    `Development of Microservices using Docker, Kotlin, Scala, Spark and Python`,
                    `Management and deployment of AWS resources for Computing, Storage, Load Balancing, etc`,
                    `Drive collaboration with customers and stakeholders to prioritize feature requests`,
                    `Certified Secure Software Engineer`,
                    `Complete rewrite and redesign of two high-visibility Cyber platforms used enterprise wide`,
                    `Technical Lead and mentor for developers across 3 dev teams`
                ]
            },
            {
                title: 'Apptricity Corporation',
                subtitle: 'Front End Developer',
                startDate: 'May 2016',
                endDate: 'June 2017',
                bulletpoints: [
                    `Development of the UI/UX for the company's latest suite of web application using: HTML5, AngularJS, SASS and Bootstrap`,
                    `Responsive Mobile design and Cross-Browser compatibility`,
                    `Use of third-party libraries such as UI-Router, UI-Bootstrap, drag-and-drop, etc`,
                    `Worked with an Agile team using Atlassian products: JIRA, Confluence, BitBucket, SourceTree`,
                    `Leading and mentoring of junior team members`
                ]
            },
            {
                title: 'Ziosk',
                subtitle: 'UI/UX Engineer',
                startDate: 'December 2013',
                endDate: 'May 2016',
                bulletpoints: [
                    `Develop and design User Interface Layouts and application skins tailored to each client supporting the Ziosk Tablet main features such as Pay-at-the-table, menu ordering, email club and game launcher`,
                    `Partnered with clients to build Customer Experience Surveys at their specifications`,
                    `Collaborated with Marketing for sourcing digital assets and QA team for validations and deployments`,
                    `Closely worked with developers of internal applications to provide feedback and suggest improvements`,
                    `Developed the User Experience for all the company's clients and ensured timely deliveries`,
                    `Implemented a CMS-driven mechanism to dynamically source new content without redeploying binaries`
                ]
            },
            {
                title: 'Grupo Revuelta',
                subtitle: 'Webmaster',
                startDate: 'September 2011',
                endDate: 'Nov 2013',
                bulletpoints: [
                    `Design and develop the websites of the Group's companies using HTML, CSS, JavaScript, jQuery and XSLT`,
                    `www.revuelta.com.mx (Umbraco CMS with VB .NET)`,
                    `www.rawelt.com.mx (NopCommerce CMS with VB .NET)`,
                    `www.ganaderiarevuelta.com.mx (Umbraco CMS with VB .NET)`,
                    `Management of Email Marketing, Google AdWords, SEO and Social Media strategies for all brands`,
                    `Graphic design, Photography, Video editing and Photoshop for media content generation of all sites`,
                    `Firmware development to enable custom functionality in electronic weighing scale indicators to control traffic lights, positioning sensors, RFID antennas, etc`,
                    `Development of a desktop application to interface with weighing scales via serial port using VB .NET`,
                    `Defined and implemented marketing campaigns and analytic metrics doubling online sales within a year`,
                    `Developed an internal web application for categorizing and managing a large collection of digital assets`
                ]
            },
            {
                title: 'Cia Comercial Cimaco',
                subtitle: 'Webmaster',
                startDate: 'September 2009',
                endDate: 'September 2011',
                bulletpoints: [
                    `Team Manager of 3 photographers and 2 graphic designers`,
                    `Develop the company's websites with HTML, CSS, JavaScript and JQuery and a COBOL backend:`,
                    `www.cimaco.com.mx (main eCommerce site)`,
                    `www.plazacuatrocaminos.com.mx (Mall directory)`,
                    `www.mayca.mx (Brand/product website)`,
                    `Design and development of the web application for in-store kiosks`,
                    `Management of Email Marketing, Google AdWords, SEO and Social Media campaigns`,
                    `Web design, photography and Photoshop of website themes, banners, promotions, email campaigns`,
                    `Implemented marketing campaigns and online chat increased online sales by 50% with 6 months`,
                    `Reduced site's load times by less than half and by optimizing code to adhere to web standards`
                ]
            },
            {
                title: 'Universidad Autonoma de la Laguna',
                subtitle: 'Tech Support Engineer',
                startDate: 'September 2007',
                endDate: 'September 2009',
                bulletpoints: [
                    `Managed Microsoft Active Directory and Microsoft Exchange Server user accounts for all students`,
                    `Maintained and troubleshooted hardware and software for over 150 PCs and Macs for students use`,
                    `Created a desktop application to check-in students to public workstations and provide usage metrics`,
                    `Created a point-of-sale desktop application to record sales of office supplies and printing services`,
                    `Part time teacher for Microsoft Office classes to freshman students`
                ]
            }
        ]
    };

    education = {
        title: 'Education',
        contents: [
            {
                title: 'Universidad Autonoma de la Laguna',
                subtitle: 'Bachelor of Science, Computer Systems Engineering',
                startDate: 'August 2003',
                endDate: 'December 2007'
            }
        ]
    };

    skills = {
        title: 'Skills',
        contents: [
            'Typescript',
            'JavaScript',
            'Angular',
            'SASS',
            'HTML',
            'Bootstrap',
            'MongoDB',
            'Material Design',
            'Amazon Web Services (AWS)',
            'Node.js',
            'Express',
            `REST API's`,
            'Technical Leadership',
            'People Manager',
            'Docker',
            'CI/CD',
            'Unit Testing',
            'Responsive Web Design',
            'User Interface Design',
            'Test Driven Development'
        ]
    };

    constructor() {}

    getSections(): Observable<any> {
        return concat(
            of(this.skills),
            of(this.projects),
            of(this.workExperience),
            of(this.education)
        ).pipe(toArray());
    }
}
