
//client connects to server
const WS = new WebSocket('ws://localhost:9999');

//clients access to button and menage client console
// How to pull on our server the data?
// We pull putting ws in the server an event handle
// ws.on('connection) , (ws) => {
    //

WS.onmessage = (payload) =>{ //payload is the whole package 
                            // we need just the data
    
    display(payload.data.toString());

}

WS.onopen = ()=>{
    
    console.log('CONNECTION IS OPEN');
};

WS.onclose = ()=>{
    display('CONNECTED TO SERVER');
};

function display(message){
    let h1 = document.createElement('h1');
    h1.innerText = message;
    document.querySelector('div.messages').appendChild(h1)
}

document.forms[0].onsubmit = () =>{
    console.log(document.getElementById('message'));
    let forms = document.getElementById('message');
    console.log(forms.value);
    WS.send(forms.value);
}
