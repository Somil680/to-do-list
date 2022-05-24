const newNameInput = document.querySelector('#newName');
const list = document.querySelector('.namelist');
let array = [];




document.body.addEventListener('keypress' , (runcommand) => {
    if(runcommand.key == 'Enter'){
        let name = newNameInput.value;
        let newone = name.replace(/ /g , "");
        newNameInput.value = ''; 
        if(newone.length > 0) {
        let listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(name));
        list.appendChild(listItem);
        listItem.draggable  = 'true';
        array.push(name);
        listItem.classList.add("finallist");
    for(let i= 0 ; i < array.length ; i++){
        listItem.id = ("finallist"+i);
                
        const finallist = document.querySelectorAll('.finallist');
        const newlist = document.getElementsByClassName('nameList')
               
    finallist.forEach(finallist => {

    finallist.addEventListener('dragstart' , (e)=>{
    e.dataTransfer.setData("text", e.target.id);
    setTimeout(() => { e.target.className = 'hide'}, 0)
})
    finallist.addEventListener('dragend' , (e)=>{
    e.target.className = 'finallist';
})
    for (const nameList of newlist){
    nameList.addEventListener('dragover' ,(e)=>{
        e.preventDefault()
})
nameList.addEventListener('dragenter' , (e)=>{
    e.preventDefault()
})
nameList.addEventListener('dragleave' , ()=>{
})
nameList.addEventListener('drop' , (e)=>{
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
})
}})}
}}});    

const btn = document.querySelector('#btn');
btn.addEventListener('click' , deletedata);

function deletedata(){
    var div = this.parentElement
    div.sytle.display = `none`;
}
















