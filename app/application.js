// Buttons

// function downloadCv()
// {
//      window.open("files/cvAntonioBaldessari.pdf","_blank");

// }

function repoEncriptador()
{
     window.open("https://github.com/tonybalde/one-encriptador","_blank");
}

function demoEncriptador()
{
     window.open("https://tonybalde.github.io/one-encriptador/","_blank");
}

function repoAhorcado()
{
     window.open("https://github.com/tonybalde/one-juego-ahorcado","_blank");
}

function demoAhorcado()
{
     window.open("https://tonybalde.github.io/one-juego-ahorcado/ ","_blank");
}

function repoPorfolio()
{
     window.open("https://github.com/tonybalde/tonybalde.github.io","_blank");
}

function demoPorfolio()
{
     window.open("https://tonybalde.github.io","_blank");
}

function repoeCommerce()
{
     window.open("https://github.com/tonybalde/ecommerce","_blank");
}

function demoeCommerce()
{
     window.open("https://tonybalde.github.io/ecommerce","_blank");
}

// Languages - translations

var localization = {
     "es":
     [
         {id:"headtitle", text:"Porfolio Personal de Antonio Ernesto Baldessari"}, 
         {id:"home", text:"Inicio"},
         {id:"aboutme", text:"Sobre Mí"},
         {id:"myskills", text:"Skills"},
         {id:"myhobbies", text:"Hobbies"},
         {id:"myprojects", text:"Proyectos"},
         {id:"contactme", text:"Contacto"},
         {id:"Hello", text:"Hola!"},
         {id:"MyName", text:"Me llamo Antonio Ernesto Baldessari y soy Desarrollador Front-End."},
         {id:"download__cv", text:"Descargar CV"},
         {id:"About__Me", text:"Sobre Mí"},
         {id:"Paragraph__About__Me", text:"Soy Desarrollador Front-End, con conocimientos en HTML5, CSS3, JavaScript, Git y Github. En búsqueda de trabajo como Front-End Developer."},
         {id:"movies", text:"Ver Películas y Series"},
         {id:"music", text:"Escuchar Música"},
         {id:"running", text:"Salir a Correr"},
         {id:"guitar", text:"Tocar Guitarra"},
         {id:"games", text:"Jugar Videojuegos"},
         {id:"books", text:"Leer Libros"},
         {id:"Projects", text:"Proyectos"},
         {id:"Project__One", text:"Encriptador de Texto"},
         {id:"Project__Two", text:"Juego del Ahorcado"},
         {id:"Project__Three", text:"Pagina Web Porfolio"},
         {id:"Project__Four", text:"Pagina Web eCommerce"},
         {id:"Contact__Me", text:"Contactame"},
         {id:"Contact__Me___Paragraph", text:"¿Querés contactarme? Completá el siguiente formulario y me pondré en contacto lo antes posible."},
         {id:"developed__by", text:"Desarrollado por Antonio E. Baldessari © 2022"}


     ],
     "en": [
         {id:"headtitle", text:"Antonio Ernesto Baldessari's Personal Porfolio"}, 
         {id:"home", text:"Home"},
         {id:"aboutme", text:"About Me"},
         {id:"myskills", text:"Skills"},
         {id:"myhobbies", text:"Hobbies"},
         {id:"myprojects", text:"Projects"},
         {id:"contactme", text:"Contact"},
         {id:"Hello", text:"Hello!"},
         {id:"MyName", text:"My name is Antonio Ernesto Baldessari and I'm a Front-End Developer."},
         {id:"download__cv", text:"Download Resume"},
         {id:"About__Me", text:"About Me"},
         {id:"Paragraph__About__Me", text:"I'm a Front-End Developer, with knowledge in HTML5, CSS3, JavaScript, Git and Github. Looking for a Front-End Developer position."},
         {id:"movies", text:"Watch Movies and TV Shows"},
         {id:"music", text:"Listen to Music"},
         {id:"running", text:"Running"},
         {id:"guitar", text:"Play Guitar"},
         {id:"games", text:"Play Videogames"},
         {id:"books", text:"Read Books"},
         {id:"Projects", text:"Projects"},
         {id:"Project__One", text:"Text Encripter"},
         {id:"Project__Two", text:"Hangman Game"},
         {id:"Project__Three", text:"Porfolio Webpage"},
         {id:"Project__Four", text:"eCommerce Webpage"},
         {id:"Contact__Me", text:"Contact Me"},
         {id:"Contact__Me___Paragraph", text:"Do you want to contact me? Complete the following form and I will contact you as soon as possible."},
         {id:"developed__by", text:"Developed by Antonio E. Baldessari © 2022"}


     ] 
   }
   
// Functions 

function downloadCv() {
     
     if (document.documentElement.lang === "en") {
          window.open("files/AntonioBaldessariResume.pdf","_blank");
        } else if (document.documentElement.lang === "es") {
          window.open("files/cvAntonioBaldessari.pdf","_blank");
        }
}


function toggleLanguage(s)
   {
       var lang = s.checked?"en": "es"
       for(var i = 0; i<localization[lang].length;i++){
       var a = localization[lang][i];
         var dom = document.getElementById(a.id)
         if(dom.text){ 
           dom.text= a.text;
           document.documentElement.setAttribute('lang', 'es');
         }
         else if(dom.textContent){
           dom.textContent= a.text;
           document.documentElement.setAttribute('lang', 'en');
         }
       }
     
   }

