

$(function () {

  
  $('.saveBtn').on('click',saveItem)

  function saveItem(event) {
    console.log(event);
    console.log(this);
  var text= ($(this).prev().val());
  var time= ($(this).parent().attr('id'));
  localStorage.setItem(time, text);
  }
// saves text to local storage
  
  
  $('#hour-1 .description').val(localStorage.getItem('hour-1'));
  $('#hour-2 .description').val(localStorage.getItem('hour-2'));
  $('#hour-3 .description').val(localStorage.getItem('hour-3'));
  $('#hour-4 .description').val(localStorage.getItem('hour-4'));
  $('#hour-5 .description').val(localStorage.getItem('hour-5'));
  $('#hour-6 .description').val(localStorage.getItem('hour-6'));
  $('#hour-7 .description').val(localStorage.getItem('hour-7'));
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));
  $('#hour-19 .description').val(localStorage.getItem('hour-19'));
  $('#hour-20 .description').val(localStorage.getItem('hour-20'));
  $('#hour-21 .description').val(localStorage.getItem('hour-21'));
  $('#hour-22 .description').val(localStorage.getItem('hour-22'));
  $('#hour-23 .description').val(localStorage.getItem('hour-23'));
  $('#hour-24 .description').val(localStorage.getItem('hour-24'));
  // retrieves text from local storage

  $('.time-block').each(function (){
    var now = dayjs().hour();
    var scheduleHour = parseInt($(this).attr('id').split('-')[1]);
    console.log(scheduleHour);
    if(now < scheduleHour){
      $(this).addClass('past');
    } else if (now === scheduleHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  })
  // color codes the blocks based of what time it is
  
  var today = dayjs().format('dddd, MMMM D');
  $('#currentDay').text(today);
//  dispays today's date
});
