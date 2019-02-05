var completed, notCompleted;
init();

//toggles completed hikes
document.querySelector('.done').addEventListener('click', function() {
  // if not completed hikes are active/displayed when completed is clicked...
  if (notCompleted.classList = 'active') {
  // ... remove inactive of completed ...
  for (var i = 0; i < completed.length; i ++)
  completed[i].classList.remove('inactive');
  // ... and add inactive to not completed to allow only completed hikes to be displayed
  for (var i = 0; i < notCompleted.length; i ++)
  notCompleted[i].classList.add('inactive');
}
 else {
   return;
 }
});

//toggles incompleted hikes
document.querySelector('.not-done').addEventListener('click', function() {
  // if completed hikes are active/displayed when not completed is clicked...
  if (completed.classList = 'active'){
    // ... remove inactive of not completed ...
    for (var i = 0; i < notCompleted.length; i ++)
    notCompleted[i].classList.remove('inactive');
    // ... and add inactive to completed to allow only not completed hikes to be displayed
    for (var i = 0; i < completed.length; i ++)
    completed[i].classList.add('inactive');
  }
  else{
    return;
 }
});

// displays all hikes again
document.querySelector('.total').addEventListener('click', init);

function init() {

// variables defined
notCompleted = document.getElementsByClassName('todo');
completed = document.getElementsByClassName('finish');

// bring back block status for completed hikes on "all" click
for (var i = 0; i < notCompleted.length; i ++)
notCompleted[i].classList.remove('inactive');

// bring back block status for incompleted hikes on "all" click
for (var i = 0; i < completed.length; i ++)
completed[i].classList.remove('inactive');
}
