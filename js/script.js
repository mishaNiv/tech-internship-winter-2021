function edit() {
    let myIcon = document.getElementById("icon");
    let myList = document.getElementById("activitiesList");
    if (myList.contentEditable == "false") {
        icon.src = "images/doneIcon.png";
        icon.alt = "Save";
        myList.contentEditable = "true";
    } else {
        icon.src = "images/editIcon.png";
        icon.alt = "Edit";
        myList.contentEditable = "false";
    }
}