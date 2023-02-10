# RPGland

Barem de notare proiect: 

- :ballot_box_with_check: Sa aiba mai multe rute  2p <br>
 In total sunt 5 rute: home, projects, create, login si signup.<br>
Pagina de projects va avea atribuit un id pentru fiecare RPG creat din pagina Create. <br>
[App.js](src/App.js).
- :ballot_box_with_check: Sa se foloseasca componente reutilizabile 2p <br>
 useCollection in [Dashboard.js](src/pages/dashboard/Dashboard.js), [Create.js](src/pages/create/Create.js)   <br>
 Avatar in [ProjectComments.js](src/pages/project/ProjectComments.js), [ProjectSummary.js](src/pages/project/ProjectSummary.js) <br>
- :ballot_box_with_check: Sa se comunice intre componente 2p<br>
 Se poate naviga din pagina principala [Dashboard](src/pages/dashboard/Dashboard.js)cu un click pe orice RPG existent.
- :ballot_box_with_check: Rute publice si private 1p<br>
 Unui user nelogat ii este permis sa vada doar continutul formularelor de login si signup.<br>
 Unui user logat ii este permis sa vada toate celelalte pagini, mai putin login si sign up pentru ca este deja conectat.<br>
 Permisiunea de a sterge un RPG ii va fi acordata doar userului ce a creat RPG ul, ceilalti useri nu vor putea vedea nici butonul de Delete.
- :ballot_box_with_check: Sa fie cel putin o pagina cu un form ( login/register) 2p<br>
 Pagini cu formular sunt pagina de [Login](src/pages/login/Login.js), [Sign up](src/pages/signup/Signup.js) si [Create](src/pages/create/Create.js)<br>
- :ballot_box_with_check: Firebase sau orice alt mediu de backend 1p<br>
 Mediul de backend ales este Firebase. <br>
 [Config](src/firebase/config.js)
- :ballot_box_with_check: Pt react: folosierea unui state manager ( redux, mobx ... ) 1p
 State manager ul ales este Hooks.
