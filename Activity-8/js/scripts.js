function get (element)
{
    return document.getElementById(element);
}

function openModal()
{
    var modal = get("modal-dialog");
    var backdrop = get("modal-backdrop");

    modal.classList.add("visible");
    backdrop.classList.add("visible");
}

function closeModal()
{
    var title = get ("edit-title-text");
    var text = get ("edit-content-text");
    var modal = get("modal-dialog");
    var backdrop = get ("modal-backdrop");
    var titleMessage = get("edit-title-message");
    var contentMessage = get ("edit-content-message");

    //clear text
    title.value = "";
    text.value = "";

    //hide modal
    modal.classList.remove("visible");
    backdrop.classList.remove("visible");
    titleMessage.classList.remove("visible");
    contentMessage.classList.remove("visible");
    

}

function saveContent()
{
    var title = get ("edit-title-text");
    var text = get ("edit-content-text");
    var content = get("display-content");
    var titleMessage = get("edit-title-message");
    var contentText = get("edit-content-message");

    if(!title.value){
        titleMessage.textContent ="Please supply a title";
        titleMessage.classList.add("visible");
        return;
    }else {
        titleMessage.classList.remove("visible");
    }

    if(!text.value)
    {
        
        contentText.textContent = "Enter a message";
        contentText.classList.add("visible");
        return;
    }else{
        contentText.classList.remove("visible");
    }

    //create content elements
    var newTitle = document.createElement("h2");
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement("p");
    var newContentText = document.createTextNode(text.value);



    //add elements

    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

//event handlers
window.addEventListener("load", function(){
    var newButton = get("new-button");
    var cancelButton = get("cancel-button");
    var saveButton = get("save-button");

    newButton.addEventListener("click", openModal);
    cancelButton.addEventListener("click", closeModal);
    saveButton.addEventListener("click", saveContent);

});

