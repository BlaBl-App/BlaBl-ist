const templateServer = document.querySelector("template#server")
const serverList = document.querySelector("#server-list")


fetch('https://raw.githubusercontent.com/BlaBl-App/BlaBl-ist/main/servers.json')
    .then((response) => response.json())
    .then((json) => {
        serverList.innerHTML =""
        for (const server of json.servers){
            let newServer = templateServer.content.cloneNode(true);
            console.log("new ser",newServer)
            console.log("new ser",newServer.innerHTML)
            newServer.querySelector(".name").innerHTML = server.name;
            newServer.querySelector(".ip").innerHTML = server.ip;
            serverList.appendChild(newServer)
        }
        console.log(json)});
