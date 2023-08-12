import proxichat from "$lib/images/proxichat5.webp"
import business from "$lib/images/businesstemplate.jpg"
import trailblazer from "$lib/images/trailblazer.webp"
import tablemaker from "$lib/images/tablemaker.jpg"
import socialfullstack from "$lib/images/socialmediademo.png"
import chatroom from "$lib/images/voidchat2.png"

export type Project = {
    img: string
    app: string
    git: string
    id: number
}

export const projects: Project[] = [
    { img: proxichat, app: "https://proxichat.vercel.app/", git: "https://github.com/scicluna/proxichat", id: 1 },
    { img: trailblazer, app: "https://nps-trailblazer.herokuapp.com/", git: "https://github.com/scicluna/trailblazer", id: 2 },
    { img: tablemaker, app: "https://tablemaker.vercel.app/", git: "https://github.com/scicluna/tablemaker", id: 3 },
    { img: chatroom, app: "https://voidchat.herokuapp.com/", git: "https://github.com/scicluna/chatroomdemo", id: 4 }
]