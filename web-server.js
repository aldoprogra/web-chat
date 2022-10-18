const webSocketServer =require('ws').Server;
const WSS = new webSocketServer({port:9999}); //create server

//listener
WSS.on('connection', (ws) =>{ //ws is the client

    ws.on('message' , (message) => {  //ws.on listen the client
        
    



        ciao = message.toString()
        console.log(ciao);
        if (ciao == 'close'){
            ws.close();
        }
        else{
        //We get the data, just print to every clients
        WSS.clients.forEach((client) => {
            client.send(ciao);
        })}
    });
    
    console.log('We are connected');
}
);