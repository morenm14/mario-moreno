//Array to store messages
var messages =[];

//Message Type lookup object.(enum)
var messageType = {
    out: "out-message",
    in: "in-message",
    unknown: "unknown-message"
}

//see data
var data =[
    {
        type: messageType.out,
        user: "Mario",
        message: "Hey, Hello there!",
    },
    {
        type: messageType.in,
        user: "Diana",
        message: "Hey, Hello there Mario!",
    },
    {
        type: messageType.out,
        user: "Mario",
        message: "How are you?",
    }
];

//constructor function
function Message(type, user, message)
{
    this.type = type;
    this.user = user;
    this.message = message;
}

//Function to create return element supplied message
function createMessageElement(message)
{
    //create text element for the message
    var messageText = document.createTextNode(message.user + ": " + message.message);
    //create the element to add the message text
    var messageEl = document.createElement("div");
    messageEl.appendChild(messageText);

    messageEl.className = message.type;
    return messageEl;
}

//button click event handler to add a new message
function addMessageHandler(event)
{
    var user, type;
    var messageInput = document.getElementById("message-input");
    var messageContainerEl = document.getElementById("message-container");

    switch (event.target.id)
    {
        case "send-button":
            user = "Mario";
            type = messageType.out;
            break;

            case "reply-button":
            user = "Diana";
            type = messageType.in;
            break;

            default:
                user = "unknown";
                type = messageType.unknown;
    }

    if(messageInput.value != " ")
    {
        var message = new Message (type, user, messageInput.value );
        messages.push(message);

        var el = createMessageElement(message);

        messageContainerEl.appendChild(el);
        messageInput.value = "";
    }
}


function loadSeedData()
    {
        for (var i = 0; i < data.length; i++) 
        {
            var item = data[i];
            var message = new Message(item.type, item.user, item.message);
            messages.push(message);
        }

        //load view with pre-loaded messages
        var messageContainerEl = document.getElementById("message-container");
        for (var i = 0; i < messages.length; i++) 
        {
            var message = messages[i];
            var el = createMessageElement(message);
            messageContainerEl.appendChild(el);
        }
    }

 function init ()
    {
        document.getElementById("send-button").onclick = addMessageHandler;
        document.getElementById("reply-button").onclick = addMessageHandler;
        loadSeedData();
    }

    init();