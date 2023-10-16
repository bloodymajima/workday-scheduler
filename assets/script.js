

$(document).ready(function () {

const saveBtn = ".saveBtn";

$(saveBtn).on('click', function () {
   let input = $(this).siblings('textarea').val();
      localStorage.setItem('inputvalue', input);
      console.log(input);
  });

  $(function checkTime() {
    const dayJsObject = dayjs();
    console.log(dayJsObject.format());
  
    const date = dayJsObject.format('dddd, MMMM D');
    const currentTime = dayJsObject.format('h:mm A');

    console.log(date);
    console.log(currentTime);

    $('#currentDay').text(dayJsObject.format('dddd, MMMM D'));

    if (dayjs().hour(9).isBefore(dayjs())){
      $('#hour-9').addClass('past')
    } else if (dayjs().hour(9).isSame(dayjs())) {
      $('#hour-9').addClass('present')
    } else if (dayjs().hour(9).isAfter(dayjs())) {
      $('#hour-9').addClass('future')
    }
  
    if (dayjs().hour(10).isBefore(dayjs())){
      $('#hour-10').addClass('past')
    } else if (dayjs().hour(10).isSame(dayjs())) {
      $('#hour-10').addClass('present')
    } else if (dayjs().hour(10).isAfter(dayjs())) {
      $('#hour-10').addClass('future')
    }
  
    if (dayjs().hour(11).isBefore(dayjs())){
      $('#hour-11').addClass('past')
    } else if (dayjs().hour(11).isSame(dayjs())) {
      $('#hour-11').addClass('present')
    } else if (dayjs().hour(11).isAfter(dayjs())) {
      $('#hour-11').addClass('future')
    }
  
    if (dayjs().hour(12).isBefore(dayjs())){
      $('#hour-12').addClass('past')
    } else if (dayjs().hour(12).isSame(dayjs())) {
      $('#hour-12').addClass('present')
    } else if (dayjs().hour(12).isAfter(dayjs())) {
      $('#hour-12').addClass('future')
    }
  
    if (dayjs().hour(13).isBefore(dayjs())){
      $('#hour-1').addClass('past')
    } else if (dayjs().hour(13).isSame(dayjs())) {
      $('#hour-1').addClass('present')
    } else if (dayjs().hour(13).isAfter(dayjs())) {
      $('#hour-1').addClass('future')
    }
  
    if (dayjs().hour(14).isBefore(dayjs())){
      $('#hour-2').addClass('past')
    } else if (dayjs().hour(14).isSame(dayjs())) {
      $('#hour-2').addClass('present')
    } else if (dayjs().hour(14).isAfter(dayjs())) {
      $('#hour-2').addClass('future')
    }
  
    if (dayjs().hour(15).isBefore(dayjs())){
      $('#hour-3').addClass('past')
    } else if (dayjs().hour(15).isSame(dayjs())) {
      $('#hour-3').addClass('present')
    } else if (dayjs().hour(15).isAfter(dayjs())) {
      $('#hour-3').addClass('future')
    }
  
    if (dayjs().hour(16).isBefore(dayjs())){
      $('#hour-4').addClass('past')
    } else if (dayjs().hour(16).isSame(dayjs())) {
      $('#hour-4').addClass('present')
    } else if (dayjs().hour(16).isAfter(dayjs())) {
      $('#hour-4').addClass('future')
    }
  
    if (dayjs().hour(17).isBefore(dayjs())){
      $('#hour-5').addClass('past')
    } else if (dayjs().hour(17).isSame(dayjs())) {
      $('#hour-5').addClass('present')
    } else if (dayjs().hour(17).isAfter(dayjs())) {
      $('#hour-5').addClass('future')
    }

  });

});
  