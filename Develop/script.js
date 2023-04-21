  // This will make sure the function doesn't load until the document has loaded
$(document).ready(function () {

  //Displays the current time on the header
  
  var currentHour = dayjs().hour();
  
  function getTime() {
    var currentDay = dayjs().format('dddd MMMM D YYYY');
    var currentTime = dayjs();
    $('#currentDay').text('Today is ' + currentDay);
    $('#currentHour').text(currentTime.format('HH:mm:ss a'));
  } 
  setInterval(getTime, 1000);

  // This will adjust the colors of each row depending on whether it's the current time, if it's passed, or if it hasn't happened yet
  $('.time-block').each(function() {
    var timeDay = $(this).attr('id');
    if (timeDay == currentHour) {
      $(this).removeClass('past future');
      $(this).addClass('present');
    } else if (timeDay < currentHour) {
      $(this).removeClass('future present');
      $(this).addClass('past');
    } else if (timeDay > currentHour) {
      $(this).removeClass('past present')
      $(this).addClass('future');
    }

    // This function will save the text entry to local storage when the save button is clicked for the correct time
  
    $('.saveBtn').on('click', function() {
      var key = $(this).parent().attr('id');
      var value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
    
    // This function will place the data that is saved in Local Storage into the corresponding text field
    $('.description').each(function() {
      $(this).val(localStorage.getItem($(this).parent().attr('id')))
    })
  });
});
