# RPGland
[Demo](https://youtu.be/Qysj-B-ww00)
<br>
Log in:<br>
Username: Ezarel@wizards.com <br>
Password: 1234567<br>
Barem de notare proiect: 

- :ballot_box_with_check: Sa aiba mai multe rute  2p <br>
 In total sunt 5 rute: home, projects, create, login si signup.<br>
Pagina de projects va avea atribuit un id pentru fiecare RPG creat din pagina Create. <br>
[App.js](src/App.js).
<br>
 ![image](https://user-images.githubusercontent.com/79642095/218222515-dee24ca6-d952-409b-a3d6-1a57fc23ea0b.png)
 
- :ballot_box_with_check: Sa se foloseasca componente reutilizabile 2p <br>
 useCollection in [Dashboard.js](src/pages/dashboard/Dashboard.js), [Create.js](src/pages/create/Create.js)   <br>
 Avatar in [ProjectComments.js](src/pages/project/ProjectComments.js), [ProjectSummary.js](src/pages/project/ProjectSummary.js) <br>
 ![image](https://user-images.githubusercontent.com/79642095/218222636-6236928e-380d-433b-9593-76ec0db647f5.png)

 <br>
 
- :ballot_box_with_check: Sa se comunice intre componente 2p<br>
 Se poate naviga din pagina principala [Dashboard](src/pages/dashboard/Dashboard.js)cu un click pe orice RPG existent.
 <br>
 <br>
 
- :ballot_box_with_check: Rute publice si private 1p<br>
 Unui user nelogat ii este permis sa vada doar continutul formularelor de login si signup.<br>
 Unui user logat ii este permis sa vada toate celelalte pagini, mai putin login si sign up pentru ca este deja conectat.<br>
 Permisiunea de a sterge un RPG ii va fi acordata doar userului ce a creat RPG ul, ceilalti useri nu vor putea vedea nici butonul de Delete.
 <br>
 <br>
 
- :ballot_box_with_check: Sa fie cel putin o pagina cu un form ( login/register) 2p<br>
 Pagini cu formular sunt pagina de [Login](src/pages/login/Login.js), [Sign up](src/pages/signup/Signup.js) si [Create](src/pages/create/Create.js)<br>
![image](https://user-images.githubusercontent.com/79642095/218218858-0a463e3c-3971-4d08-9ec7-2095b44818f6.png) <br>
 ![image](https://user-images.githubusercontent.com/79642095/218218758-20114448-1915-4825-9102-332ef8be03bd.png)
![image](https://user-images.githubusercontent.com/79642095/218222581-910012b4-80da-48e5-a37f-9633aa59c078.png)


 <br>
 
- :ballot_box_with_check: Firebase sau orice alt mediu de backend 1p<br>
 Mediul de backend ales este Firebase. <br>
 ![11](https://user-images.githubusercontent.com/79642095/218218021-56f52d45-36fd-42e4-a87c-bf9939102180.png)
<br>
 [Config](src/firebase/config.js)
 <br>
 <br>
 
- :ballot_box_with_check: Pt react: folosierea unui state manager ( redux, mobx ... ) 1p <br>
 State manager ul ales este Hooks.
