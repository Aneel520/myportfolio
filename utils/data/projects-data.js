import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Nxt Watch Web App',
        description: "Created the Nxt Watch app, a YouTube alternative allowing users to log in, browse video categories such as Trending and Gaming, view saved videos, and search for specific content with a customizable theme. ● Designed interactive pages, including Login, Home, Trending, Gaming, and Saved videos, using React components, state management, and lists. ● Implemented a secure login system with username/password input, followed by API calls and JWT token handling for persistent login states. ● Utilised React Router components (Route, Switch, Link) to establish distinct routes for various pages, enforcing authentication through protected routes.",
        tools: ["React JS", "JavaScript", "CSS", "Bootstrap", "Routing", "REST API Calls", "Local Storage", "JWT Token", "Authorization", "Authentication."],
        role: 'Frontend Developer',
        code: '',
        demo: 'https://nxtwatchbyaneel.ccbp.tech/login',
        image: crefin,
        credentials:"username:rahul password:rahul@2021"
    },
    {
        id: 2,
        name: 'Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)',
        description: 'Created a modern e-commerce experience with a design inspired by Amazon and Flipkart. ● Implemented pages for Login, Products, and Product details with React Router, React components, and form inputs. ● Secured user data with JWT tokens, REST API calls, and local storage.',
        tools: ["React JS", "JavaScript", "CSS", "Bootstrap", "Routing", "REST API Calls", "Local Storage", "JWT Token", "Authorization", "Authentication."],
        role: 'Frontend Developer',
        code: '',
        demo: 'https://nxtrendzbyaneel.ccbp.tech/login',
        image: travel,
        credentials:"username:rahul password:rahul@2021"
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },