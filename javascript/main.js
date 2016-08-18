$(document).ready(function(){
  var button = $('button#taskadd');
  var input = $('input#taskadd');
  var items = $('ul.listitems');

// Adding function so as not to repat function being used multiple times
  function addToDo(){
    var newTask = $('<li class= "item"></li>');
    newTask.html(input.val());
    items.append(newTask);
    input.val('');
    input.attr('placeholder','Enter New Task Here');
  }

// Listener for when an a task is entered and submitted via the submit button
  button.on('click', function(event){
    addToDo();
  })

//Listener to remove placholder value of input form on mouseenter
  input.on('mouseenter', function(event){
    $(event.target).attr('placeholder','');
  })

//Listener for When user finishes typing in input form and presses enter to submit form instead of submit button
  input.on('keyup',function(event){
    if (event.which === 13){
      addToDo();
    }
  })

// Listener to remove item from task list when click event occurs on list elements
  items.on('click', function(event){
  // Why does target work for this,but not eventTarget?
  // Is eventTarget for the parent element and target is (this)?
    $(event.target).css('textDecoration','line-through');
    setTimeout(function(){
      $(event.target).remove();
    },1000);
  })
}
)
