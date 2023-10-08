import{c as Pe,t as Re,a as Ce,p as He}from"../chunks/proxichat5.7c8364ee.js";import{s as A,w as Z,n as q,h as ae,u as oe,i as se,j as ne,r as je,f as ze,b as ue,q as De,m as Y,o as Se,a as Je}from"../chunks/scheduler.63e23178.js";import{S as O,i as G,g as y,m as Q,s as x,h as _,j,n as W,f as b,c as E,E as ee,k as l,a as R,y as g,z as J,F as Ae,G as Oe,d as z,t as D,D as Ge,A as le,r as V,B as re,u as F,v as N,o as te,C as X,w as U,p as Me,b as xe,H as Be,I as qe,e as pe,J as Ve}from"../chunks/index.383ef100.js";import{b as Fe}from"../chunks/paths.3fea75a0.js";import{e as me,u as Ne,o as Ue}from"../chunks/each.26cc0e45.js";import{d as fe,e as K,g as ge,q as Qe,f as ve}from"../chunks/index.3192b696.js";const Ee=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,We="/svelteportfolio/_app/immutable/assets/msu.6f816598.png",Ye="/svelteportfolio/_app/immutable/assets/edxlogo.a4515a64.png",Xe="/svelteportfolio/_app/immutable/assets/htmlcsslogo.d571731c.png",Ke="/svelteportfolio/_app/immutable/assets/portfolio1.cbdcbe44.png",Ze="/svelteportfolio/_app/immutable/assets/JS.svg.9205a00a.png",ce="/svelteportfolio/_app/immutable/assets/dice.cb46b1d0.png",$e="/svelteportfolio/_app/immutable/assets/TTT.42859272.png",et="/svelteportfolio/_app/immutable/assets/speedreader2.d0a60922.png",tt="/svelteportfolio/_app/immutable/assets/password2.a15ae9e7.png",it="/svelteportfolio/_app/immutable/assets/jsquiz.7219e56b.png",at="/svelteportfolio/_app/immutable/assets/scheduler.04883262.png",ot="/svelteportfolio/_app/immutable/assets/weatherapp.a9ff5e44.png",st="/svelteportfolio/_app/immutable/assets/moviemash.5c8a4f59.png",nt="/svelteportfolio/_app/immutable/assets/pong.6b1e4aed.jpg",lt="/svelteportfolio/_app/immutable/assets/employeetracker.e1d2335e.png",rt="/svelteportfolio/_app/immutable/assets/teamgenerator.7b1c6f38.png",ct="/svelteportfolio/_app/immutable/assets/servercrawl.179d6ff0.png",dt="/svelteportfolio/_app/immutable/assets/ecommerce.36512504.png",ut="/svelteportfolio/_app/immutable/assets/techblog.f1f35aca.png",ht="/svelteportfolio/_app/immutable/assets/C4.5dae5317.png",pt="/svelteportfolio/_app/immutable/assets/socialapi.4aae6cba.png",mt="/svelteportfolio/_app/immutable/assets/reactts.3d739577.png",ft="/svelteportfolio/_app/immutable/assets/rpgsheet.8acca003.png",gt="/svelteportfolio/_app/immutable/assets/hydrogen.a25dc750.svg",vt="/svelteportfolio/_app/immutable/assets/json.000ef923.png",bt="/svelteportfolio/_app/immutable/assets/csv.097ca35c.png",wt="/svelteportfolio/_app/immutable/assets/reactportfolio.c4c92579.jpg",yt="/svelteportfolio/_app/immutable/assets/gifthub.70a1d7c1.webp",_t="/svelteportfolio/_app/immutable/assets/slimehack.6fcb52e0.webp",kt="/svelteportfolio/_app/immutable/assets/socialmediademo.8a14b88e.png",It="/svelteportfolio/_app/immutable/assets/python.08e79ad9.png",Tt="/svelteportfolio/_app/immutable/assets/csharp.5402f86b.png",jt="/svelteportfolio/_app/immutable/assets/graduation.90fc447e.png",St="/svelteportfolio/_app/immutable/assets/businesstemplate.d2470c3c.jpg",Mt="/svelteportfolio/_app/immutable/assets/php.da4aff76.png",xt="/svelteportfolio/_app/immutable/assets/svelte.aa0a3f25.png",Et=[{id:-1,name:"Bachelor's Degree at MSU",short:"I started my educational journey by getting a degree at Michigan State University. I learned many things there, and my education there has proven invaluable.",img:We,link:"https://www.msu.edu/",deploy:""},{id:0,name:"Edx MSU Bootcamp",short:"In November 2022, I began my coding journey at the edX MSU fullstack bootcamp. This is where I first encountered coding and instantly fell in love with it.",img:Ye,link:"https://www.edx.org/",deploy:""},{id:1,name:"HTML & CSS",short:"I swiftly learned HTML and CSS, utilizing them to craft simple websites. Grasping HTML was straightforward, but CSS initially posed challenges.",img:Xe,link:"",deploy:""},{id:2,name:"First Portfolio",short:"Having laid my foundations, I constructed my first portfolio as a class project. Through this, I became adept at using various CSS layouts and mastered flexbox.",img:Ke,link:"https://github.com/scicluna/Scicluna-Professional-Portfolio",deploy:""},{id:3,name:"Javascript",short:"Our transition to Javascript solidified my passion for coding. With seemingly endless possibilities, I embarked on side-projects to grow as a developer.",img:Ze,link:"",deploy:""},{id:4,name:"Dice Roller v1",short:"My initial side project was a basic dice roller. By inputting a phrase like '2d6', the program would simulate rolling two six-sided dice. This project deepened my understanding of JavaScript's string and array methods.",img:ce,link:"https://github.com/scicluna/dice-roller2",deploy:""},{id:5,name:"Tic Tac Toe",short:"I constructed a tic-tac-toe game using JavaScript, HTML, and CSS. This undertaking provided an enriching experience in algorithmic coding. Check it out at the deploy link.",img:$e,link:"https://github.com/scicluna/tic-tac-toe2",deploy:"https://scicluna.github.io/tic-tac-toe2/"},{id:6,name:"Speed Reader",short:"A project where pasted text is cycled through at set intervals, displaying each word. It was an engaging introduction to setInterval. As a quirky addition, I synced the word timing with extremely loud music.",img:et,link:"https://github.com/scicluna/speedreader",deploy:"https://scicluna.github.io/speedreader/"},{id:7,name:"Dice Roller v3",short:"Post-learning about object-oriented programming, I revamped my dice-roller. Completely built using OOP, it solidified my understanding of this coding pattern, proving more expansive than my initial version.",img:ce,link:"https://github.com/scicluna/dice-rollerv3",deploy:"https://scicluna.github.io/dice-rollerv3/"},{id:8,name:"Password Generator",short:"I developed a password generator that prompts users with questions to create a password. While functional, it humorously demonstrated the pitfalls of excessively prompting users in a web app via window alerts.",img:tt,link:"https://github.com/scicluna/password-generator",deploy:"https://scicluna.github.io/password-generator/"},{id:9,name:"Javascript Quiz",short:"This project required advanced DOM manipulation to simulate a single-page application feel. It wasn't a true SPA, but I employed numerous transitions and techniques in vanilla JavaScript. Additionally, it pushed me to further my JavaScript knowledge.",img:it,link:"https://github.com/scicluna/js-quiz",deploy:"https://scicluna.github.io/js-quiz/"},{id:10,name:"Scheduler",short:"The scheduler app introduced me to jQuery, showcasing its pros and cons compared to more modern programming patterns. It also leveraged an external library, dayjs, for date handling and made me familiar with integrating external packages.",img:at,link:"https://github.com/scicluna/scheduler",deploy:"https://scicluna.github.io/scheduler/"},{id:11,name:"Weather App",short:"To familiarize myself with external APIs, I crafted a weather app using openweatherAPI. It provides forecasts for the next seven days for both day and night. I also integrated a darkmode/lightmode layout here as a bonus added touch.",img:ot,link:"https://github.com/scicluna/weather-app",deploy:"scicluna.github.io/weather-app/"},{id:12,name:"Movie Mash",short:"This group project marked my major initiation into collaborative git usage. My classmates and I crafted a website leveraging APIs like OMBD, Youtube, and Wikipedia. The effective search function hinges significantly on backend logic.",img:st,link:"https://github.com/scicluna/movie-mash",deploy:"scicluna.github.io/movie-mash/"},{id:13,name:"Pong",short:"I built this game to understand dynamic animations in vanilla JavaScript. It involved crafting a basic physics engine and simulating a pong game. The project enhanced my skills in positional JavaScript features.",img:nt,link:"https://github.com/scicluna/pong",deploy:"https://scicluna.github.io/pong/"},{id:14,name:"Team Generator",short:"My introduction to nodeJS came with this project. It primarily employs the Inquirer package, dynamically generating HTML based on user input. Enhanced CSS techniques and font-awesome icons contribute to the impressive UI of the resultant static HTML.",img:rt,link:"https://github.com/scicluna/team-generator",deploy:""},{id:15,name:"Employee Tracker",short:"My journey into SQL commenced with this employee tracker backend. This CLI, built for a fictional company, is equipped with full CRUD capabilities. It marked my introduction to databases and the use of environmental files.",img:lt,link:"https://github.com/scicluna/employee-tracker",deploy:""},{id:16,name:"Servercrawl",short:"Leveraging my newfound backend experience, I developed a game driven by a custom-built REST API. The API managed 'monsters', 'treasure', and 'rooms', while the front-end crafted an engaging RPG. This was my first venture into animations and promises, which I now find invaluable.",img:ct,link:"https://github.com/scicluna/servercrawl",deploy:""},{id:17,name:"Ecommerce Backend",short:"I built an SQL project that utilizes NodeJS and Express to facilitate a hypothetical ecommerce store. It entailed devising SQL schemas and models while carefully seeding the database. This project greatly deepened my understanding of SQL.",img:dt,link:"https://github.com/scicluna/ecommerce",deploy:""},{id:18,name:"Tech Deck",short:"Tech Deck marked my foray into authentication and relational databasing. It’s a tech-themed blog that features an express server, allowing users to create and respond to posts. The platform facilitates user sign-in/log-in via SQL queries with holistic validation.",img:ut,link:"https://github.com/scicluna/techblog",deploy:""},{id:19,name:"Connect Four",short:"My introduction to first-class functions and recursion was through this challenge. Calculating wins in Connect Four was intricate due to the multiple directions that a win could occur in. I opted for recursive algorithms over hard-coding, refining my developer skills.",img:ht,link:"https://github.com/scicluna/connect-four",deploy:"https://scicluna.github.io/connect-four/"},{id:20,name:"Dice Roller v4",short:"Three months into my developer journey, I revisited the dice roller concept. My improved skills in string and array manipulation enabled a superior program with more features, developed using functional programming. I still use it for online dice rolls.",img:ce,link:"https://github.com/scicluna/dice-rollerv4",deploy:"https://scicluna.github.io/dice-rollerv4/"},{id:22,name:"Social Media API",short:"Crafting a relational database for a social media app was challenging. This was my first run-in with no-SQL databases with MongoDB and the Mongoose ORM. I had some initial difficulty getting used to MongoDB coming from just having learned SQL. However, I found Mongo apt for smaller projects with less intricate relationships.",img:pt,link:"https://github.com/scicluna/socialapi",deploy:""},{id:23,name:"React/Typescript",short:"I undertook a self-imposed challenge by learning React and Typescript independently ahead of our curriculum. It was demanding initially, but now, I consider both React and Typescript indispensable tools in my arsenal.",img:mt,link:"",deploy:""},{id:24,name:"RPG Sheet",short:"My first side project with React and Typescript involved a series of forms on a captivating scrolling gallery. It deepened my understanding of React and emphasized the importance of type safety. It's currently a useful tool for DND 5e for first level characters.",img:ft,link:"https://github.com/scicluna/rpgv2",deploy:"scicluna.github.io/rpgv2/"},{id:25,name:"Shopify",short:"I delved into Shopify's Hydrogen platform using React and Typescript after a family discussion. The complexity of even their sample repositories was eye-opening, revealing the intricacies of a full-stack website. This exposure proved beneficial for my subsequent intricate projects.",img:gt,link:"https://github.com/scicluna/shopify-testing",deploy:""},{id:26,name:"React Portfolio",short:"I decided to revamp my portfolio with React, resulting in an aesthetically pleasing and performant site. This minimalist design effectively utilized React and remained my primary website for several months.",img:wt,link:"https://github.com/scicluna/portfolio",deploy:""},{id:27,name:"Giftlist",short:"This was our second group project in bootcamp and we used the MVC model to build a full-stack website with express and handlebars. This was another valuable experience where I learned to work together with my peers to build a wonderful website. It uses complex relational databasing alongside user authentication and external API usage. Essentially, it allows users to build a gift-list and then gives them Amazon reccomendations related to whatever items they type in.",img:yt,link:"https://github.com/scicluna/giftlist",deploy:""},{id:28,name:"Chatroom Demo",short:"At this juncture in my development journey, I felt highly confident in my capabilities. Using an express server and websockets, I created a real-time chat application, integrating Google/GitHub OAuth and MongoDB for chat archiving. I'm immensely proud of this accomplishment.",img:Pe,link:"https://github.com/scicluna/chatroomdemo",deploy:"https://voidchat.herokuapp.com/"},{id:29,name:"Slimehack",short:"I stumbled upon PhaserJS and decided to create a game with it. The project, predominantly based on object-oriented programming, demanded artistic skills for sprite and enemy design. This endeavor reinforced my confidence, proving I could quickly adapt to and utilize unfamiliar technology.",img:_t,link:"https://github.com/scicluna/Slimehack",deploy:""},{id:30,name:"Social Full Stack",short:"Remember the social media backend I developed earlier? I sought to enhance it by introducing a client-side using React and Tailwind. The project now includes a dark mode, user authentication, nested commenting capabilities, and an intelligent search functionality for specific comment threads based on content or user data.",img:kt,link:"https://github.com/scicluna/socialfullstack",deploy:"https://social-media-demonstration.herokuapp.com/"},{id:31,name:"Trailblazer",short:"Our third and final group project in the bootcamp. This one was a blast to work on and created a website that we as a group could really be proud of. It takes all of our skills from React to Express to GraphQL to MongoDB and creates a full-stack website focused on national parks. It allows users to leave ratings on parks and heavily leverages the NPI (national parks index) external API to populate a mapbox map and fill our website with generative content. My team was very talented and I believe that the results speak for themselves.",img:Re,link:"https://github.com/scicluna/trailblazer",deploy:"nps-trailblazer.herokuapp.com/"},{id:32,name:"Graduation",short:"Six months into my developer's journey, bootcamp came to an end. But that would be far from the last time that I would code, and I would continue to code every single day in an effort to expand my capabilities as a developer and learn new technologies.",img:jt,link:"https://drive.google.com/file/d/1wdNJcJ-oGErPFokL4e3-xmmR6xeB9Jov/view?usp=sharing",deploy:""},{id:33,name:"Python",short:"One of the first things I did outside of bootcamp was look into Python - a language that I had wanted to learn for some time. I took a twelve hour long course online and really mastered the basics of Python. To this day, it remains one of my go-tos for CLIs and I reach for it more often than I would reach for nodejs for such projects.",img:It,link:"",deploy:""},{id:34,name:"JSON Ripper",short:"A simple CLI program that would take a complex series of inputs and output formatted JSON objects for use in a World of Warcraft simulation program. A bit nerdy, but I learned alot about file writing and interfaces using typescript through this project.",img:vt,link:"https://github.com/scicluna/jsonripper",deploy:""},{id:35,name:"CSV Ripper",short:"This CLI program takes rows of text and jams them into a CSV file. This program turned out to be incredibly useful for converting the various notepad documents on my computer into CSV form allowing me to sort and organize my data using Microsoft Excel. Such a simple, but useful, project really showed me how coding can make our lives easier.",img:bt,link:"https://github.com/scicluna/csvripper",deploy:""},{id:36,name:"cSharp",short:"After noticing the plethora of cSharp opportunities in the job market, I took some time off to explore yet another language. cSharp turned out to be very fascinating, but still holds a niche spot in my repitoir. I would love to spend more time on it and really learn how to develop in it beyond just understanding its simple syntax and type system.",img:Tt,link:"",deploy:""},{id:37,name:"Tablemaker",short:"Table maker was an application that I built for a friend with one question in mind - how do i turn a pdf filled with tables into something usable? This project had two major parts. One was the python script that I developed that would rip out all of the text from the pdf and delimit them based on the start of a table, and the other was a nextJS application that built out a front-end for displaying the tables and rolling on the tables. Overall this was an incredibly useful project, and one that users can adapt to any table-set that they desire.",img:Ce,link:"https://github.com/scicluna/tablemaker",deploy:"https://tablemaker.vercel.app/"},{id:38,name:"Business Template",short:"In an effort to practice my front-end skills I set up a nextJS project to mimic a format of business website that I had seen in a few different places. The result is a beautiful, sleek, and professional template that I can easily apply to anybody who desires a business website.",img:St,link:"https://github.com/scicluna/businesstemplate",deploy:""},{id:39,name:"PHP",short:"Out of curiosity and because opportunities are available for it, I dived into the world of PHP. I found that the syntax was very simple and that everything was very easy to follow. I even built out a todo list and practiced the basics with it. I don't believe that I would ever use it over nextJS or React, but it was interesting none-the-less.",img:Mt,link:"",deploy:""},{id:40,name:"Proxichat",short:"My project for our bootcamp's career day presentation - a chat app that scales with distance. It features Oauth for authentication and uses a polling strategy with optimistic updates to simulate real-time chatting. It was very challenging working with geolocations on the backend and I depended alot on Turf.js for the calculations and geo-boxes. The project also heavily improved my understanding of NextJS and the concept of server-side-rendering. Overall the product looks great and is something that I consider to be a finished project (for now).",img:He,link:"https://github.com/scicluna/proxichat",deploy:"https://proxichat.vercel.app/"},{id:41,name:"Svelte Portfolio",short:"You're looking at it right now! This project was my first attempt to build something using the Svelte framework. I figured that I should know as many front-end frameworks as possible, and I was told that Svelte was pretty cool. Turns out that it is! I'm not sure if I would use it for more complex apps over something like NextJS, though.",img:xt,link:"https://github.com/scicluna/svelteportfolio",deploy:""}],Lt=()=>({events:Et}),ci=Object.freeze(Object.defineProperty({__proto__:null,load:Lt},Symbol.toStringTag,{value:"Module"})),Pt="/svelteportfolio/_app/immutable/assets/Banner5.6.941e4593.webp",Rt="/svelteportfolio/_app/immutable/assets/coollines3.d3ea8552.webm",Ct="/svelteportfolio/_app/immutable/assets/snap2.25387152.webp";function Ht(a){let e,t,o,s,i,n,c,d,r="John Lucas Scicluna",u,p,h;return{c(){e=y("div"),t=y("a"),o=Q("See my Projects!"),s=x(),i=y("img"),c=x(),d=y("h1"),d.textContent=r,u=x(),p=y("video"),this.h()},l(w){e=_(w,"DIV",{class:!0});var k=j(e);t=_(k,"A",{class:!0,href:!0});var M=j(t);o=W(M,"See my Projects!"),M.forEach(b),s=E(k),i=_(k,"IMG",{alt:!0,src:!0,class:!0}),c=E(k),d=_(k,"H1",{class:!0,"data-svelte-h":!0}),ee(d)!=="svelte-1274wuf"&&(d.textContent=r),u=E(k),p=_(k,"VIDEO",{src:!0,poster:!0,class:!0}),j(p).forEach(b),k.forEach(b),this.h()},h(){l(t,"class","absolute bottom-10 right-5 flex justify-center items-center text-white shadow-black shadow-md hover:shadow-lg font-bold text-xl bg-purple-600 hover:bg-purple-800 hover:scale-105 rounded-full z-30 h-20 w-56"),l(t,"href",Fe+"/projects"),l(i,"alt","me!"),Z(i.src,n=Pt)||l(i,"src",n),l(i,"class","z-20 object-cover h-full w-full"),l(d,"class","absolute right-5 text-2xl text-slate-800 font-extrabold z-20"),Z(p.src,h=Rt)||l(p,"src",h),p.muted=!0,l(p,"poster",Ct),p.autoplay=!0,p.loop=!0,l(p,"class","bg-white h-full w-full absolute object-cover"),l(e,"class","sm:h-[100dvh] h-[75dvh] flex justify-center items-end relative bg-transparent z-10")},m(w,k){R(w,e,k),g(e,t),g(t,o),g(e,s),g(e,i),g(e,c),g(e,d),g(e,u),g(e,p)},p:q,i:q,o:q,d(w){w&&b(e)}}}class zt extends O{constructor(e){super(),G(this,e,null,Ht,A,{})}}function Dt(a){let e,t=`<h1 class="font-extralight text-5xl">Who am I?</h1> <p class="sm:text-2xl font-bold sm:leading-loose">I&#39;m an engineer with a solid foundation in web development from my bootcamp
    training, eager to apply my skills in a practical environment. I consider
    myself a visionary - always looking for innovative solutions and constantly
    driven by my thirst for knowledge. My dedication to learning something new
    each day is a core tenet of my work ethic. It&#39;s not just about gaining
    knowledge, but also about understanding how to apply that knowledge
    effectively in real-world scenarios. I&#39;m seeking an opportunity where I can
    further develop these skills and contribute meaningfully to a team. I&#39;m
    confident that given the chance, I can exceed expectations and bring a
    unique perspective to your organization. In me, you&#39;ll find a programmer who
    is dedicated, proactive, and continually striving for excellence. I invite
    you to join me on this journey as I take my first steps into the
    professional world, and I&#39;m confident that together, we can achieve great
    things.</p>`;return{c(){e=y("div"),e.innerHTML=t,this.h()},l(o){e=_(o,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),ee(e)!=="svelte-16ndnjr"&&(e.innerHTML=t),this.h()},h(){l(e,"class","text-justify w-full p-4 bg-indigo-950 text-slate-200"),l(e,"id","about")},m(o,s){R(o,e,s)},p:q,i:q,o:q,d(o){o&&b(e)}}}class Jt extends O{constructor(e){super(),G(this,e,null,Dt,A,{})}}const At=a=>({}),be=a=>({}),Ot=a=>({}),we=a=>({});function Gt(a){let e,t,o,s=`<svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve"><path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
       c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
       c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
       c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
       l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
       c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path></svg>`,i,n,c,d,r,u,p,h,w,k;const M=a[3].header,m=ae(M,a,a[2],we),f=a[3].default,I=ae(f,a,a[2],null),L=a[3].footer,P=ae(L,a,a[2],be);return{c(){e=y("dialog"),t=y("div"),o=y("button"),o.innerHTML=s,i=x(),m&&m.c(),n=x(),c=y("hr"),d=x(),I&&I.c(),r=x(),u=y("hr"),p=x(),P&&P.c(),this.h()},l(v){e=_(v,"DIALOG",{class:!0});var C=j(e);t=_(C,"DIV",{class:!0});var H=j(t);o=_(H,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(o)!=="svelte-1m7v2vx"&&(o.innerHTML=s),i=E(H),m&&m.l(H),n=E(H),c=_(H,"HR",{}),d=E(H),I&&I.l(H),r=E(H),u=_(H,"HR",{}),p=E(H),P&&P.l(H),H.forEach(b),C.forEach(b),this.h()},h(){l(o,"class","absolute top-4 right-4 svelte-gphgbp"),l(t,"class","relative h-1/2 svelte-gphgbp"),l(e,"class","sm:w-1/3 w-[95%] svelte-gphgbp")},m(v,C){R(v,e,C),g(e,t),g(t,o),g(t,i),m&&m.m(t,null),g(t,n),g(t,c),g(t,d),I&&I.m(t,null),g(t,r),g(t,u),g(t,p),P&&P.m(t,null),a[6](e),h=!0,w||(k=[J(o,"click",a[5]),J(t,"click",Ae(a[4])),J(e,"close",a[7]),J(e,"click",Oe(a[8]))],w=!0)},p(v,[C]){m&&m.p&&(!h||C&4)&&oe(m,M,v,v[2],h?ne(M,v[2],C,Ot):se(v[2]),we),I&&I.p&&(!h||C&4)&&oe(I,f,v,v[2],h?ne(f,v[2],C,null):se(v[2]),null),P&&P.p&&(!h||C&4)&&oe(P,L,v,v[2],h?ne(L,v[2],C,At):se(v[2]),be)},i(v){h||(z(m,v),z(I,v),z(P,v),h=!0)},o(v){D(m,v),D(I,v),D(P,v),h=!1},d(v){v&&b(e),m&&m.d(v),I&&I.d(v),P&&P.d(v),a[6](null),w=!1,je(k)}}}function Bt(a,e,t){let{$$slots:o={},$$scope:s}=e,{showModal:i}=e,n;function c(h){ze.call(this,a,h)}const d=()=>n.close();function r(h){ue[h?"unshift":"push"](()=>{n=h,t(1,n)})}const u=()=>t(0,i=!1),p=()=>n.close();return a.$$set=h=>{"showModal"in h&&t(0,i=h.showModal),"$$scope"in h&&t(2,s=h.$$scope)},a.$$.update=()=>{a.$$.dirty&3&&n&&i&&n.showModal()},[i,n,s,o,c,d,r,u,p]}class qt extends O{constructor(e){super(),G(this,e,Bt,Gt,A,{showModal:0})}}function Vt(a){let e,t,o,s,i,n,c,d,r,u=a[1].short+"",p;return{c(){e=y("div"),t=y("div"),o=y("img"),i=x(),n=y("hr"),c=x(),d=y("div"),r=y("p"),p=Q(u),this.h()},l(h){e=_(h,"DIV",{class:!0});var w=j(e);t=_(w,"DIV",{class:!0});var k=j(t);o=_(k,"IMG",{src:!0,alt:!0,class:!0}),k.forEach(b),i=E(w),n=_(w,"HR",{}),c=E(w),d=_(w,"DIV",{class:!0});var M=j(d);r=_(M,"P",{class:!0});var m=j(r);p=W(m,u),m.forEach(b),M.forEach(b),w.forEach(b),this.h()},h(){Z(o.src,s=a[1].img)||l(o,"src",s),l(o,"alt","..."),l(o,"class","object-fill object-center h-72 w-fit"),l(t,"class","flex w-full justify-center"),l(r,"class","text-base text-left mb-2"),l(d,"class","flex"),l(e,"class","flex gap-2 flex-col h-full mt-2")},m(h,w){R(h,e,w),g(e,t),g(t,o),g(e,i),g(e,n),g(e,c),g(e,d),g(d,r),g(r,p)},p(h,w){w&2&&!Z(o.src,s=h[1].img)&&l(o,"src",s),w&2&&u!==(u=h[1].short+"")&&te(p,u)},d(h){h&&b(e)}}}function Ft(a){let e,t=a[1].name+"",o;return{c(){e=y("h2"),o=Q(t),this.h()},l(s){e=_(s,"H2",{slot:!0,class:!0});var i=j(e);o=W(i,t),i.forEach(b),this.h()},h(){l(e,"slot","header"),l(e,"class","sm:text-4xl text-2xl font-extrabold")},m(s,i){R(s,e,i),g(e,o)},p(s,i){i&2&&t!==(t=s[1].name+"")&&te(o,t)},d(s){s&&b(e)}}}function ye(a){let e,t=(a[1].link.includes("github")?"github":a[1].link.split(".")[1])+"",o,s;return{c(){e=y("a"),o=Q(t),this.h()},l(i){e=_(i,"A",{class:!0,href:!0,target:!0});var n=j(e);o=W(n,t),n.forEach(b),this.h()},h(){l(e,"class","text-base text-blue-500 font-bold hover:text-blue-700"),l(e,"href",s=a[1].link),l(e,"target","_blank")},m(i,n){R(i,e,n),g(e,o)},p(i,n){n&2&&t!==(t=(i[1].link.includes("github")?"github":i[1].link.split(".")[1])+"")&&te(o,t),n&2&&s!==(s=i[1].link)&&l(e,"href",s)},d(i){i&&b(e)}}}function _e(a){let e,t,o;return{c(){e=y("a"),t=Q("app"),this.h()},l(s){e=_(s,"A",{class:!0,href:!0,target:!0});var i=j(e);t=W(i,"app"),i.forEach(b),this.h()},h(){l(e,"class","text-base text-blue-500 font-bold hover:text-blue-700"),l(e,"href",o=a[1].deploy),l(e,"target","_blank")},m(s,i){R(s,e,i),g(e,t)},p(s,i){i&2&&o!==(o=s[1].deploy)&&l(e,"href",o)},d(s){s&&b(e)}}}function Nt(a){let e,t,o=a[1].link&&ye(a),s=a[1].deploy&&_e(a);return{c(){e=y("div"),o&&o.c(),t=x(),s&&s.c(),this.h()},l(i){e=_(i,"DIV",{slot:!0,class:!0});var n=j(e);o&&o.l(n),t=E(n),s&&s.l(n),n.forEach(b),this.h()},h(){l(e,"slot","footer"),l(e,"class","flex justify-around items-center h-auto")},m(i,n){R(i,e,n),o&&o.m(e,null),g(e,t),s&&s.m(e,null)},p(i,n){i[1].link?o?o.p(i,n):(o=ye(i),o.c(),o.m(e,t)):o&&(o.d(1),o=null),i[1].deploy?s?s.p(i,n):(s=_e(i),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(i){i&&b(e),o&&o.d(),s&&s.d()}}}function Ut(a){let e,t,o=a[1].name+"",s,i,n,c,d,r,u,p,h,w,k,M,m,f,I,L,P,v,C,H;function Le(T){a[5](T)}let he={$$slots:{footer:[Nt],header:[Ft],default:[Vt]},$$scope:{ctx:a}};return a[0]!==void 0&&(he.showModal=a[0]),L=new qt({props:he}),ue.push(()=>Ge(L,"showModal",Le)),{c(){e=y("button"),t=y("p"),s=Q(o),i=x(),n=le("svg"),c=le("path"),p=le("path"),M=x(),m=y("div"),I=x(),V(L.$$.fragment),this.h()},l(T){e=_(T,"BUTTON",{class:!0});var S=j(e);t=_(S,"P",{class:!0});var B=j(t);s=W(B,o),B.forEach(b),i=E(S),n=re(S,"svg",{id:!0,xmlns:!0,"xmlns:xlink":!0,viewBox:!0,"shape-rendering":!0,"text-rendering":!0,class:!0});var ie=j(n);c=re(ie,"path",{d:!0,transform:!0,fill:!0,stroke:!0,"stroke-width":!0}),j(c).forEach(b),p=re(ie,"path",{d:!0,transform:!0,fill:!0,stroke:!0,"stroke-width":!0}),j(p).forEach(b),ie.forEach(b),M=E(S),m=_(S,"DIV",{class:!0}),j(m).forEach(b),S.forEach(b),I=E(T),F(L.$$.fragment,T),this.h()},h(){l(t,"class","font-bold"),l(c,"d",d=a[3]?"":"M0,-150v300"),l(c,"transform",r=a[2]==="RIGHT"?"translate(500 150)":"translate(0 150)"),l(c,"fill","none"),l(c,"stroke","rgb(44, 169, 188)"),l(c,"stroke-width","15"),l(p,"d",h=a[3]?"":a[2]==="RIGHT"?"M250,0h-500":"M-250,0h500"),l(p,"transform","translate(250 300)"),l(p,"fill","none"),l(p,"stroke","rgb(44, 169, 188)"),l(p,"stroke-width","15"),l(n,"id","eDKaRdhnUZJ1"),l(n,"xmlns","http://www.w3.org/2000/svg"),l(n,"xmlns:xlink","http://www.w3.org/1999/xlink"),l(n,"viewBox","0 0 500 300"),l(n,"shape-rendering","geometricPrecision"),l(n,"text-rendering","geometricPrecision"),l(n,"class",k="absolute top-0 h-[35dvh] "+(a[2]==="RIGHT"?"right-1/2":"left-1/2")+" -z-20 pointer-events-none"),l(m,"class",f="absolute right-0 w-screen h-full -z-50 bg-blue-950 "+(a[2]==="RIGHT"?"translate-x-full":"")),l(e,"class","relative bg-purple-100 hover:bg-purple-300 sm:p-10 p-5 h-full min-w-[20dvw] w-fit flex items-center justify-center hover:cursor-pointer transition-all duration-150 rounded-lg shadow-indigo-950 shadow-md")},m(T,S){R(T,e,S),g(e,t),g(t,s),g(e,i),g(e,n),g(n,c),g(n,p),g(e,M),g(e,m),R(T,I,S),N(L,T,S),v=!0,C||(H=J(e,"click",a[4]),C=!0)},p(T,[S]){a=T,(!v||S&2)&&o!==(o=a[1].name+"")&&te(s,o),(!v||S&8&&d!==(d=a[3]?"":"M0,-150v300"))&&l(c,"d",d),(!v||S&4&&r!==(r=a[2]==="RIGHT"?"translate(500 150)":"translate(0 150)"))&&l(c,"transform",r),(!v||S&12&&h!==(h=a[3]?"":a[2]==="RIGHT"?"M250,0h-500":"M-250,0h500"))&&l(p,"d",h),(!v||S&4&&k!==(k="absolute top-0 h-[35dvh] "+(a[2]==="RIGHT"?"right-1/2":"left-1/2")+" -z-20 pointer-events-none"))&&l(n,"class",k),(!v||S&4&&f!==(f="absolute right-0 w-screen h-full -z-50 bg-blue-950 "+(a[2]==="RIGHT"?"translate-x-full":"")))&&l(m,"class",f);const B={};S&66&&(B.$$scope={dirty:S,ctx:a}),!P&&S&1&&(P=!0,B.showModal=a[0],De(()=>P=!1)),L.$set(B)},i(T){v||(T&&Y(()=>{v&&(u||(u=X(c,K,{duration:1e3,easing:fe,delay:200},!0)),u.run(1))}),T&&Y(()=>{v&&(w||(w=X(p,K,{duration:1e3,easing:ge,delay:1200},!0)),w.run(1))}),z(L.$$.fragment,T),v=!0)},o(T){T&&(u||(u=X(c,K,{duration:1e3,easing:fe,delay:200},!1)),u.run(0)),T&&(w||(w=X(p,K,{duration:1e3,easing:ge,delay:1200},!1)),w.run(0)),D(L.$$.fragment,T),v=!1},d(T){T&&(b(e),b(I)),T&&u&&u.end(),T&&w&&w.end(),U(L,T),C=!1,H()}}}function Qt(a,e,t){let{timeEvent:o}=e,{showModal:s=!1}=e,{direction:i}=e,{last:n}=e;const c=()=>t(0,s=!0);function d(r){s=r,t(0,s)}return a.$$set=r=>{"timeEvent"in r&&t(1,o=r.timeEvent),"showModal"in r&&t(0,s=r.showModal),"direction"in r&&t(2,i=r.direction),"last"in r&&t(3,n=r.last)},[s,o,i,n,c,d]}class Wt extends O{constructor(e){super(),G(this,e,Qt,Ut,A,{timeEvent:1,showModal:0,direction:2,last:3})}}const{window:$}=Ee;function ke(a){let e,t,o,s,i,n,c;return t=new Wt({props:{timeEvent:a[0],direction:a[2],last:a[3]}}),{c(){e=y("div"),V(t.$$.fragment),this.h()},l(d){e=_(d,"DIV",{class:!0,style:!0});var r=j(e);F(t.$$.fragment,r),r.forEach(b),this.h()},h(){l(e,"class",o="md:text-5xl sm:text-3xl text-xl h-full text-center items-center flex transition-opacity relative "+(a[2]==="LEFT"?"justify-start":"justify-end")),l(e,"style",s=a[2]==="LEFT"?`padding-left: ${a[8]}dvw;`:`padding-right: ${a[8]}dvw`)},m(d,r){R(d,e,r),N(t,e,null),c=!0},p(d,r){a=d;const u={};r&1&&(u.timeEvent=a[0]),r&4&&(u.direction=a[2]),r&8&&(u.last=a[3]),t.$set(u),(!c||r&4&&o!==(o="md:text-5xl sm:text-3xl text-xl h-full text-center items-center flex transition-opacity relative "+(a[2]==="LEFT"?"justify-start":"justify-end")))&&l(e,"class",o),(!c||r&260&&s!==(s=a[2]==="LEFT"?`padding-left: ${a[8]}dvw;`:`padding-right: ${a[8]}dvw`))&&l(e,"style",s)},i(d){c||(z(t.$$.fragment,d),d&&Y(()=>{c&&(n&&n.end(1),i=Be(e,ve,{x:a[9],duration:1500,opacity:1,easing:Qe}),i.start())}),c=!0)},o(d){D(t.$$.fragment,d),i&&i.invalidate(),d&&(n=qe(e,ve,{x:a[9],duration:1500,opacity:1})),c=!1},d(d){d&&b(e),U(t),d&&n&&n.end()}}}function Yt(a){let e,t,o,s;Y(a[11]);let i=a[1]+a[6]>=a[5]&&ke(a);return{c(){e=y("div"),i&&i.c(),this.h()},l(n){e=_(n,"DIV",{class:!0});var c=j(e);i&&i.l(c),c.forEach(b),this.h()},h(){l(e,"class","w-full h-[10dvh] relative z-10")},m(n,c){R(n,e,c),i&&i.m(e,null),a[12](e),t=!0,o||(s=[J($,"resize",a[10]),J($,"resize",a[11])],o=!0)},p(n,[c]){n[1]+n[6]>=n[5]?i?(i.p(n,c),c&98&&z(i,1)):(i=ke(n),i.c(),z(i,1),i.m(e,null)):i&&(Me(),D(i,1,1,()=>{i=null}),xe())},i(n){t||(z(i),t=!0)},o(n){D(i),t=!1},d(n){n&&b(e),i&&i.d(),a[12](null),o=!1,je(s)}}}function Xt(a,e,t){let{timeEvent:o}=e,{y:s}=e,{direction:i}=e,{last:n}=e,c,d,r,u,p;const h=i==="LEFT"?-200:200,w=typeof window<"u";Se(()=>{w&&t(5,d=c.getBoundingClientRect().top+window.scrollY)}),Je(()=>{w&&t(5,d=c.getBoundingClientRect().top+window.scrollY)});function k(){t(7,u=window.innerWidth),t(6,r=window.innerHeight)}function M(){t(7,u=$.innerWidth),t(6,r=$.innerHeight)}function m(f){ue[f?"unshift":"push"](()=>{c=f,t(4,c)})}return a.$$set=f=>{"timeEvent"in f&&t(0,o=f.timeEvent),"y"in f&&t(1,s=f.y),"direction"in f&&t(2,i=f.direction),"last"in f&&t(3,n=f.last)},t(8,p=20+Math.random()*8),[o,s,i,n,c,d,r,u,p,h,k,M,m]}class Kt extends O{constructor(e){super(),G(this,e,Xt,Yt,A,{timeEvent:0,y:1,direction:2,last:3})}}const{window:de}=Ee;function Ie(a,e,t){const o=a.slice();return o[4]=e[t],o[6]=t,o}function Te(a,e){let t,o,s;return o=new Kt({props:{timeEvent:e[4],y:e[1],direction:e[6]%2===0?"RIGHT":"LEFT",last:e[6]===e[0].length-1}}),{key:a,first:null,c(){t=pe(),V(o.$$.fragment),this.h()},l(i){t=pe(),F(o.$$.fragment,i),this.h()},h(){this.first=t},m(i,n){R(i,t,n),N(o,i,n),s=!0},p(i,n){e=i;const c={};n&1&&(c.timeEvent=e[4]),n&2&&(c.y=e[1]),n&1&&(c.direction=e[6]%2===0?"RIGHT":"LEFT"),n&1&&(c.last=e[6]===e[0].length-1),o.$set(c)},i(i){s||(z(o.$$.fragment,i),s=!0)},o(i){D(o.$$.fragment,i),s=!1},d(i){i&&b(t),U(o,i)}}}function Zt(a){let e=!1,t=()=>{e=!1},o,s,i,n="TIMELINE",c,d,r=[],u=new Map,p,h,w;Y(a[2]);let k=me(a[0]);const M=m=>m[4].id;for(let m=0;m<k.length;m+=1){let f=Ie(a,k,m),I=M(f);u.set(I,r[m]=Te(I,f))}return{c(){s=y("div"),i=y("h1"),i.textContent=n,c=x(),d=y("div");for(let m=0;m<r.length;m+=1)r[m].c();this.h()},l(m){s=_(m,"DIV",{class:!0,id:!0});var f=j(s);i=_(f,"H1",{class:!0,"data-svelte-h":!0}),ee(i)!=="svelte-sjtqrg"&&(i.textContent=n),c=E(f),d=_(f,"DIV",{class:!0});var I=j(d);for(let L=0;L<r.length;L+=1)r[L].l(I);I.forEach(b),f.forEach(b),this.h()},h(){l(i,"class","md:text-5xl sm:text-4xl text-3xl font-extrabold h-full"),l(d,"class","flex flex-col gap-[20dvh] w-full text-black"),l(s,"class","w-full flex flex-col gap-10 p-4 bg-blue-950 text-slate-200 overflow-hidden pb-40"),l(s,"id","timeline")},m(m,f){R(m,s,f),g(s,i),g(s,c),g(s,d);for(let I=0;I<r.length;I+=1)r[I]&&r[I].m(d,null);p=!0,h||(w=J(de,"scroll",()=>{e=!0,clearTimeout(o),o=setTimeout(t,100),a[2]()}),h=!0)},p(m,[f]){f&2&&!e&&(e=!0,clearTimeout(o),scrollTo(de.pageXOffset,m[1]),o=setTimeout(t,100)),f&3&&(k=me(m[0]),Me(),r=Ne(r,f,M,1,m,k,u,d,Ue,Te,null,Ie),xe())},i(m){if(!p){for(let f=0;f<k.length;f+=1)z(r[f]);p=!0}},o(m){for(let f=0;f<r.length;f+=1)D(r[f]);p=!1},d(m){m&&b(s);for(let f=0;f<r.length;f+=1)r[f].d();h=!1,w()}}}function $t(a,e,t){let{events:o}=e,s;Se(()=>{});function i(){t(1,s=de.pageYOffset)}return a.$$set=n=>{"events"in n&&t(0,o=n.events)},[o,s,i]}class ei extends O{constructor(e){super(),G(this,e,$t,Zt,A,{events:0})}}function ti(a){let e,t,o,s,i,n,c,d,r;return s=new zt({}),n=new Jt({}),d=new ei({props:{events:a[0].events}}),{c(){e=y("meta"),t=x(),o=y("main"),V(s.$$.fragment),i=x(),V(n.$$.fragment),c=x(),V(d.$$.fragment),this.h()},l(u){const p=Ve("svelte-h046sn",document.head);e=_(p,"META",{name:!0,content:!0}),p.forEach(b),t=E(u),o=_(u,"MAIN",{});var h=j(o);F(s.$$.fragment,h),i=E(h),F(n.$$.fragment,h),c=E(h),F(d.$$.fragment,h),h.forEach(b),this.h()},h(){document.title="John Lucas Scicluna Portfolio",l(e,"name","description"),l(e,"content","John Scicluna Portfolio")},m(u,p){g(document.head,e),R(u,t,p),R(u,o,p),N(s,o,null),g(o,i),N(n,o,null),g(o,c),N(d,o,null),r=!0},p(u,[p]){const h={};p&1&&(h.events=u[0].events),d.$set(h)},i(u){r||(z(s.$$.fragment,u),z(n.$$.fragment,u),z(d.$$.fragment,u),r=!0)},o(u){D(s.$$.fragment,u),D(n.$$.fragment,u),D(d.$$.fragment,u),r=!1},d(u){u&&(b(t),b(o)),b(e),U(s),U(n),U(d)}}}function ii(a,e,t){let{data:o}=e;return a.$$set=s=>{"data"in s&&t(0,o=s.data)},[o]}class di extends O{constructor(e){super(),G(this,e,ii,ti,A,{data:0})}}export{di as component,ci as universal};