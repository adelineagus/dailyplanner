var currentdayEl= $('#currentDay');
var savebuttonEl=$('.saveBtn');
var todoList=[];


var current= moment();
var today=current.format('dddd, MMM Do');
currentdayEl.text(today);

//when refreshing page, or starting script, check whether local storage contains data
    //if yes, run loadTodo function
if(localStorage.getItem("todolist")){
    loadTodo();
} 

//based on current hour, decide whether time for each blocks has happened, is happening, or still hasn't happened
    //adding class of past/present/future depending on the determination --> will determine color of blocks
    //variable i is representing each time that is assigned to the blocks
for(var i=8;i<18;i++){
    if(current.format('HH')>i){
        $("[data-hr=" + i + "]").children('textarea').addClass('past');
    }else if(current.format('HH')==i){
        $("[data-hr=" + i + "]").children('textarea').addClass('present');
    }else{
        $("[data-hr=" + i + "]").children('textarea').addClass('future');
    }
}

//when save button is clicked, save events that are entered by user on localstorage
savebuttonEl.on('click',function(){
    var hourData= parseInt($(this).parent().attr('data-hr'));
    var textData= ($(this).parent().children('textarea')).val();
    todoList[hourData]= textData;

    localStorage.setItem("todolist", JSON.stringify(todoList));
})


//get data from local storage and present it on timeblocks.
function loadTodo(){
    todoList=JSON.parse(localStorage.getItem("todolist"));
    for (var i=8;i<18;i++){;
        $("[data-hr=" + i + "]").children('textarea').val(todoList[i]);
    }   
}


