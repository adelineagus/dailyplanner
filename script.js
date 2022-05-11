var currentdayEl= $('#currentDay');
var savebuttonEl=$('.saveBtn');
var todoList=[];


var current= moment();
var today=current.format('dddd, MMM Do');
currentdayEl.text(today);


for(var i=8;i<18;i++){
    if(current.format('HH')>i){
        $("[data-hr=" + i + "]").children('textarea').addClass('past');
    }else if(current.format('HH')==i){
        $("[data-hr=" + i + "]").children('textarea').addClass('present');
    }else{
        $("[data-hr=" + i + "]").children('textarea').addClass('future');
    }
}


savebuttonEl.on('click',function(){
    var hourData= parseInt($(this).parent().attr('data-hr'));
    var textData= ($(this).parent().children('textarea')).val();
    console.log(textData);
    todoList[hourData]= textData;

    localStorage.setItem("todolist", JSON.stringify(todoList));
})

function loadTodo(){
    todoList=JSON.parse(localStorage.getItem("todolist"));
    for (var i=8;i<18;i++){;
        $("[data-hr=" + i + "]").children('textarea').val(todoList[i]);
    }   
}

if(localStorage.getItem("todolist")){
    loadTodo();
} 
