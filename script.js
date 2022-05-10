
var currentdayEl= $('#currentDay');
var colorcodeEl= $('.colorcode');
var savebuttonEl=$('#savebutton');
var textEl="";
var toDos=[];


var current= moment();
var today=current.format('dddd, MMM Do');
currentdayEl.text(today);


if(current.format('HH')>9){
    console.log(current.hour());
    colorcodeEl.css("background","red")
}else{
    colorcodeEl.css("background","green")
}


savebuttonEl.on('click',function(){
    textEl= $('#text').val();
    localStorage.setItem("todos", JSON.stringify(textEl));
})

function loadTodo(){
    toDos=JSON.parse(localStorage.getItem("todos"));
    $('#text').val(toDos);
}


loadTodo();