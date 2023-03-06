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
            testServer(server.ip, newServer.querySelector("#indicator"));
            serverList.appendChild(newServer);
            
        }
        console.log(json)});


function testServer(url, indicator){
    console.log("url",url)
    fetch(url+"/api")
    .then((response) => console.log("server test",response))//response.json())
    .catch((error) => {
        indicator.classList.add("down");
        indicator.classList.remove("up");
    })

}
