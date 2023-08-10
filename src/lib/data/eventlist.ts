import edXlogo from "$lib/images/edxlogo.png"
import htmlcsslogo from "$lib/images/htmlcsslogo.png"
import portfolio1 from "$lib/images/portfolio1.png"
import jslogo from "$lib/images/JS.svg.png"
import dice from "$lib/images/dice.png"
import ttt from "$lib/images/TTT.png"
import speedreader from "$lib/images/speedreader2.png"
import password from "$lib/images/password.png"
import jsquiz from "$lib/images/jsquiz.png"
import scheduler from "$lib/images/scheduler.png"
import weather from "$lib/images/weatherapp.png"
import moviemash from "$lib/images/moviemash.png"
import pong from "$lib/images/pong.jpg"
import employeetracker from "$lib/images/employeetracker.png"
import teamgenerator from "$lib/images/teamgenerator.png"
import servercrawl from "$lib/images/servercrawl.png"
import ecommerce from "$lib/images/ecommerce.png"
import techblog from "$lib/images/techblog.png"
import connectfour from "$lib/images/C4.png"
import socialapi from "$lib/images/socialapi.png"
import reactts from "$lib/images/reactts.png"
import rpgsheet from "$lib/images/rpgsheet.png"
import shopify from "$lib/images/hydrogen.svg"
import json from "$lib/images/json.png"
import csv from "$lib/images/csv.png"
import reactportfolio from "$lib/images/reactportfolio.jpg"
import giftlist from "$lib/images/gifthub.webp"
import chatroom from "$lib/images/voidchat2.png"
import slime from "$lib/images/slimehack.webp"
import socialfull from "$lib/images/socialmediademo.png"
import trailblazer from "$lib/images/trailblazer.webp"
import python from "$lib/images/python.png"
import csharp from "$lib/images/csharp.png"
import graduation from "$lib/images/graduation.png"
import tablemaker from "$lib/images/tablemaker.jpg"
import blogtemplate from "$lib/images/blogtemplate.jpg"
import businesstemplate from "$lib/images/businesstemplate.jpg"
import php from "$lib/images/php.png"
import proxichat from "$lib/images/proxichat5.webp"
import svelte from "$lib/images/svelte.png"

export type Event = {
    id: number,
    name: string,
    short: string,
    img: string,
    link: string
    deploy: string
}

export const eventlist: Event[] = [
    { id: 0, name: "Started EdX MSU Full Flex Bootcamp", short: "November 2022 I started my coding journey at the edX MSU fullstack bootcamp. It was there where I got my first introduction to coding and where I fell in love with it.", img: edXlogo, link: "https://www.edx.org/", deploy: "" },
    { id: 1, name: "HTML & CSS", short: "I quickly picked up both HTML and CSS, using it to build simple websites. Learning HTML was a breeze, but CSS was very hard to wrap my head around at first.", img: htmlcsslogo, link: "", deploy: "" },
    { id: 2, name: "First Portfolio", short: "With my foundations laid, I built out my first portfolio as part of a class assignment. I really learned how to utilize various CSS layouts and mastered the flex box.", img: portfolio1, link: "https://github.com/scicluna/Scicluna-Professional-Portfolio", deploy: "" },
    { id: 3, name: "Introduction to Javascript", short: "Soon we moved on to learning Javascript, and that's where I became convinced that coding was for me. It felt like endless possibilities were at my fingertips and I quickly got to work on side-projects to give me an excuse to code more.", img: jslogo, link: "", deploy: "" },
    { id: 4, name: "Dice Roller v1", short: "My first serious attempt at coding my own project was with a simple dice roller. The goal was to type in a phrase like '2d6' and have the program roll two six-sided dice. It was this project where I really learned about javascript's string and array methods and it was an excellent starting point for my coding journey.", img: dice, link: "https://github.com/scicluna/dice-roller2", deploy: "" },
    { id: 5, name: "Tic Tac Toe", short: "I decided to build a game using javascript, html, and css - and what game is simpler than tic-tac-toe? This project was a great challenge in algorithmic coding and took a lot of creativity to build with the tools that I had till that point been exposed to. Try it out at the deploy link below.", img: ttt, link: "https://github.com/scicluna/tic-tac-toe2", deploy: "https://scicluna.github.io/tic-tac-toe2/" },
    { id: 6, name: "Speed Reader", short: "A simple project that takes pasted paragraphs of text, and loops over it in an interval while displaying each word on the screen. This was a very cool introduction to setInterval, and I had alot of fun with this one. Beware though, I also synced it up to really loud music for the user's enjoyment.", img: speedreader, link: "https://github.com/scicluna/speedreader", deploy: "https://scicluna.github.io/speedreader/" },
    { id: 7, name: "Dice Roller v3", short: "After learning about object oriented programming, I decided to give my dice-roller a well deserved makeover. I built this out entirely using OOP and this really helped cement that coding pattern in my repitoir. Ultimately, this turned out to be alot more useful and expansive than my original attempt.", img: dice, link: "https://github.com/scicluna/dice-rollerv3", deploy: "https://scicluna.github.io/dice-rollerv3/" },
    { id: 8, name: "Password Generator", short: "", img: password, link: "https://github.com/scicluna/password-generator", deploy: "https://scicluna.github.io/password-generator/" },
    { id: 9, name: "Javascript Quiz", short: "", img: jsquiz, link: "https://github.com/scicluna/js-quiz", deploy: "https://scicluna.github.io/js-quiz/" },
    { id: 10, name: "Scheduler", short: "", img: scheduler, link: "https://github.com/scicluna/scheduler", deploy: "https://scicluna.github.io/scheduler/" },
    { id: 11, name: "Weather App", short: "", img: weather, link: "https://github.com/scicluna/weather-app", deploy: "scicluna.github.io/weather-app/" },
    { id: 12, name: "Movie Mash", short: "", img: moviemash, link: "https://github.com/scicluna/movie-mash", deploy: "scicluna.github.io/movie-mash/" },
    { id: 13, name: "Pong", short: "", img: pong, link: "https://github.com/scicluna/pong", deploy: "https://scicluna.github.io/pong/" },
    { id: 14, name: "Team Generator", short: "", img: teamgenerator, link: "https://github.com/scicluna/team-generator", deploy: "" },
    { id: 15, name: "Employee Tracker", short: "", img: employeetracker, link: "https://github.com/scicluna/employee-tracker", deploy: "" },
    { id: 16, name: "Servercrawl", short: "", img: servercrawl, link: "https://github.com/scicluna/servercrawl", deploy: "" },
    { id: 17, name: "Ecommerce Backend", short: "", img: ecommerce, link: "https://github.com/scicluna/ecommerce", deploy: "" },
    { id: 18, name: "Tech Deck", short: "", img: techblog, link: "https://github.com/scicluna/techblog", deploy: "" },
    { id: 19, name: "Connect Four", short: "", img: connectfour, link: "https://github.com/scicluna/connect-four", deploy: "https://scicluna.github.io/connect-four/" },
    { id: 20, name: "Dice Roller v4", short: "https://github.com/scicluna/dice-rollerv4", img: dice, link: "", deploy: "scicluna.github.io/dice-rollerv4/" },
    { id: 22, name: "Social Media API", short: "", img: socialapi, link: "https://github.com/scicluna/socialapi", deploy: "" },
    { id: 23, name: "React/Typescript", short: "", img: reactts, link: "", deploy: "" },
    { id: 24, name: "RPG Sheet", short: "", img: rpgsheet, link: "https://github.com/scicluna/rpgv2", deploy: "scicluna.github.io/rpgv2/" },
    { id: 25, name: "Shopify", short: "", img: shopify, link: "https://github.com/scicluna/shopify-testing", deploy: "" },
    { id: 26, name: "React Portfolio", short: "", img: reactportfolio, link: "https://github.com/scicluna/portfolio", deploy: "" },
    { id: 27, name: "Giftlist", short: "", img: giftlist, link: "https://github.com/scicluna/giftlist", deploy: "" },
    { id: 28, name: "Chatroom Demo", short: "", img: chatroom, link: "https://github.com/scicluna/chatroomdemo", deploy: "https://voidchat.herokuapp.com/" },
    { id: 29, name: "Slimehack", short: "", img: slime, link: "https://github.com/scicluna/Slimehack", deploy: "" },
    { id: 30, name: "Social Full Stack Demo", short: "", img: socialfull, link: "https://github.com/scicluna/socialfullstack", deploy: "https://social-media-demonstration.herokuapp.com/" },
    { id: 31, name: "Trailblazer", short: "", img: trailblazer, link: "https://github.com/scicluna/trailblazer", deploy: "nps-trailblazer.herokuapp.com/" },
    { id: 32, name: "Graduation", short: "", img: graduation, link: "https://drive.google.com/file/d/1wdNJcJ-oGErPFokL4e3-xmmR6xeB9Jov/view?usp=sharing", deploy: "" },
    { id: 33, name: "Python", short: "", img: python, link: "", deploy: "" },
    { id: 34, name: "JSON Ripper", short: "", img: json, link: "https://github.com/scicluna/jsonripper", deploy: "" },
    { id: 35, name: "CSV Ripper", short: "", img: csv, link: "https://github.com/scicluna/csvripper", deploy: "" },
    { id: 36, name: "cSharp", short: "", img: csharp, link: "", deploy: "" },
    { id: 37, name: "Tablemaker", short: "", img: tablemaker, link: "https://github.com/scicluna/tablemaker", deploy: "https://tablemaker.vercel.app/" },
    { id: 38, name: "Blog Template", short: "", img: blogtemplate, link: "https://github.com/scicluna/blogtemplate", deploy: "" },
    { id: 39, name: "Business Template", short: "", img: businesstemplate, link: "https://github.com/scicluna/businesstemplate", deploy: "" },
    { id: 40, name: "PHP", short: "", img: php, link: "", deploy: "" },
    { id: 41, name: "Proxichat", short: "", img: proxichat, link: "https://github.com/scicluna/proxichat", deploy: "https://proxichat.vercel.app/" },
    { id: 42, name: "Svelte Portfolio", short: "", img: svelte, link: "https://github.com/scicluna/svelteportfolio", deploy: "" },
]