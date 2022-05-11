
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
    var hourData= $(this).parent().attr('data-hr');
    var textData= ($(this).parent().children('textarea')).val();
    todoList[hourData]= textData;

    localStorage.setItem("todos", JSON.stringify(todoList));
    console.log(todoList);
})

function loadTodo(){
    todoList=JSON.parse(localStorage.getItem("todos"));
    for (var i=8;i<18;i++){;
        $("[data-hr=" + i + "]").children('textarea').val(todoList[i]);
    }   
}


loadTodo();