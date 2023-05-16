import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';


export const SampleData = {
    "profile": {
        "name": "Baribor Paago",
        "title": "Frontend Software Developer",
        "bio": "I am detail-oriented Frontend Software Devloper building user interfaces of web applications using React and other tools",
        "location": "Your location",
        "email": "Your email address",
        "phone": "Your phone number",
        "image": "/assets/hero1.svg",
      },
      
    "header": [
        {
            "contentType": "Socials",
            "content": [
                {
                    "name": "Twitter",
                    "icon": FaTwitter,
                    "link": "https://twitter.com/yourhandle"
                    },
                    {
                    "name": "LinkedIn",
                    "icon": FaLinkedin,
                    "link": "https://www.linkedin.com/in/yourprofile"
                    },
                    {
                    "name": "GitHub",
                    "icon": FaGithub,
                    "link": "https://github.com/yourhandle"
                    }
            ]
        },

        {
            "contentType": "Articles",
            "content":[
                {
                    "title": "Article Title 1",
                    "link": "https://example.com/article1"
                    },
                    {
                    "title": "Article Title 2",
                    "link": "https://example.com/article2"
                    },
                    {
                    "title": "Article Title 3",
                    "link": "https://example.com/article3"
                    }
            ]
        }
        
        ],

        
        

        
      

      
        
      
};

export default SampleData;