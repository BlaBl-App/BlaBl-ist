console.log("loaded")



fetch('../servers.json')
    .then((response) => response)
    .then((json) => console.log(json));