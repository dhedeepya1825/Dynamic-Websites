let textareamsg = document.getElementById('message');
let btn = document.getElementById("saveButton");
btn.onclick = function() {
    let textInput = textareamsg.value;
    localStorage.setItem('textInput', textInput);

};
let localStorageInput = localStorage.getItem('textInput');
if (localStorageInput === null) {
    textareamsg.value = " ";

} else {
    textareamsg.value = localStorageInput;
}