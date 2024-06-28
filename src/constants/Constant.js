import {Job,Message,Coin} from "../components/svg/Headersvg"
import figma from "../assets/figma.svg"
import illus from "../assets/illustrator.svg"
import xd from "../assets/xd.svg"
import deletesvg from "../assets/delete.svg"
import editsvg from "../assets/edit.svg"
import applicantsvg from "../assets/applicant.svg"
import MAtchessvg from "../assets/match.svg"
import messagesvg from "../assets/message2.svg"
import viewssvg from "../assets/view.svg"
export const Navtab = [
    {
      id: "0",
      title: "Jobs",
      svg: Job,
      url: "#features",
    },
    {
      id: "1",
      title: "Messages",
      svg: Message,
      url: "#pricing",
    },
    {
      id: "2",
      title: "Payments",
      svg: Coin,
      url: "#how-to-use",
    },]

    export const Tabslider= [
      {
        title: "Job preview",
      },
      {
        title: "Applicants",
      },
      {
        title: "Match",
      },
      {
        title: "Message",
      },
    ]

 export const RequiredSkills =[
      {
        title : "Figma",
        img : figma,
      },
      {
        title : "Adobe Illustrator",
        img : illus,
      },
      {
        title : "Adobe xd",
        img : xd,
      },
    ]

    export const aboutthejob = [{
      p : "Handle the UI/UX research design"
    },
  
    {
      p : "Work on researching on latest web applications designs & trends"
    },
    {
      p : "Work on conceptualizing and visualizing"
    },
    {
      p : "Work on creating graphics content and other graphic related works"
    },
  ]
  export const benefits = [
  {
    p : "Health insurance"
  },
  {
    p : "Provident Fund"
  },
]
export const schedule = [
  {
    p: "Day shift"
  }
]

export const supplementalpaytype = [
  {
    p: "Performance bonus"
  },
  {
    p: "Yearly bonus"
  }
]

export const companyDetail = [
  {
    title : "Company size",
    p : "1k - 2k Employees"
  },
  {
    title : "Type",
    p : "Private"
  },
  {
    title : "Sector",
    p : "Information Technology, Infrastructure"
  },
  {
    title : "Funding",
    p : "Bootstrapped"
  },
  {
    title : "Founded In",
    p : "2019"
  },
  

  {
    title : "Founded By",
    p : "Scott Farquhar, Mike Cannon-Brookes"
  },

]

export const crudbuttons = [{
     svg : deletesvg,
     title : "Delete job"
},
{
   svg : editsvg,
     title : "Edit job"
},
]

export const crudbarelements =[
  {
    name : "Applicants",
    svg : applicantsvg,
    value : "400"
  },
  {
    name : "Matches",
    svg : MAtchessvg,
    value : "100"
  },
  {
    name : "Messages",
    svg : messagesvg,
    value : "147"
  },
  {
    name : "Views",
    svg : viewssvg,
    value : "800"
  },
]