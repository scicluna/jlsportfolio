import { p as proxichat, t as trailblazer, a as tablemaker, c as chatroom } from "../../../chunks/proxichat5.js";
const aidm = "/svelteportfolio/_app/immutable/assets/aidmimage.12f4a45d.png";
const collabboard = "/svelteportfolio/_app/immutable/assets/collabboard.373903e8.jpg";
const projects = [
  { name: "Collab Board", img: collabboard, app: "https://collabboard.vercel.app/", git: "https://github.com/scicluna/collabboard", id: 6 },
  { name: "AiDM", img: aidm, app: "Not Deployed", git: "https://github.com/scicluna/tslangchain", id: 5 },
  { name: "Proxichat", img: proxichat, app: "https://proxichat.vercel.app/", git: "https://github.com/scicluna/proxichat", id: 1 },
  { name: "Trailblazer", img: trailblazer, app: "https://nps-trailblazer.herokuapp.com/", git: "https://github.com/scicluna/trailblazer", id: 2 },
  { name: "Tablemaker", img: tablemaker, app: "https://tablemaker.vercel.app/", git: "https://github.com/scicluna/tablemaker", id: 3 },
  { name: "Voidchat", img: chatroom, app: "https://voidchat.herokuapp.com/", git: "https://github.com/scicluna/chatroomdemo", id: 4 }
];
const load = () => {
  return {
    projects
  };
};
export {
  load
};
