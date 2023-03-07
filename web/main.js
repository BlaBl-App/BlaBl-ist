const templateServer = document.querySelector("template#server")
const serverList = document.querySelector("#server-list")


fetch('https://raw.githubusercontent.com/BlaBl-App/BlaBl-ist/main/servers.json')
    .then((response) => response.json())
    .then((json) => {
        serverList.innerHTML =""
        for (const server of json.servers){
            let newServer = templateServer.content.cloneNode(true);
            newServer.querySelector(".name").innerHTML = server.name;
            newServer.querySelector(".ip").innerHTML = server.ip;
            newServer.querySelector("div").id = server.name;
            
            serverList.appendChild(newServer);
            testServer(server.ip, server.name);
            
            
        }
        console.log(json)});


function testServer(url, id){
    console.log(`#${id} #indicator`)
    let indicator = document.querySelector(`#${id} #indicator`)

    console.log("url",url+"/api", indicator)
    fetch("https://"+url+"/api")
    .then((response) => {
        console.log("server test",response, response.ok);
        indicator.classList.add("up");
        
    })

    

}


