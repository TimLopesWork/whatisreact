// Initializing the globlal event listener in the whole Site
document.addEventListener("DOMContentLoaded", () =>{
    // Declearing homepath
    const home = "/whatisreact/index.html"; // https://timlopeswork.github.io/whatisreact/
    // Getting the dynamic path from url
    const thepath = window.location.pathname;
    console.log(thpath);
    const root = document.getElementById('root');
    // Simulation a react component HomePage
    const HomePage =()=>`<h1>hello World!</h1><a href='http://localhost/whatIsReact/about.html'>>About</a>`;
    // Simulation a react component AboutPage
    const AboutPage =()=>`<h1>About</h1><a href='http://127.0.0.1:5500/whatIsReact/index.html'>Home</a>`;
    // Simulation a react main exit point
    const Index =()=>{
         const isHome = thepath === home ? root.innerHTML=HomePage() : root.innerHTML=AboutPage();
    }; Index();
})();
