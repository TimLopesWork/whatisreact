 // Declearing homepath
 const home = "https://timlopeswork.github.io/whatisreact/"; 
 // Getting the dynamic path from url
 const thepath = window.location.href;
 console.log(thepath);
 const root = document.getElementById('root');
 // Simulation a react component HomePage
 const HomePage =()=>`<h1>hello World!</h1><p> I am HomePage</p><p>This is a Demo to show how reactJs works under the woods</p><a href='https://timlopeswork.github.io/whatisreact/about.html'>>About</a>`;
 // Simulation a react component AboutPage
 const AboutPage =()=>`<h1>About</h1><a href='https://timlopeswork.github.io/whatisreact/'>Home</a>`;
 // Simulation a react main exit point
 const Index =()=>{
      if(thepath !== home || thepath !== home+"index.html"){
       root.innerHTML=AboutPage();
      }else{
       ? root.innerHTML=HomePage();
      }
 }; Index();
