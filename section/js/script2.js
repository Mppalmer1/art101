// $(document).click(function(e){
//        $('<input />')
//        .css({
//            position: "center",
//            left: e.pageX+"px",
//            top: e.pageY+"px"
//        })
//        .focus()
//        .appendTo("body")
//    });




// jQuery
// $("input[type='text_box']").keyup(function(){
//
//     if ($(this).val() !== ''){
//         $(this).css('color', '#ff0000')
//     } else {
//         $(this).css('color', '#000000')
//     }
//
// });


var original_text = $("#original_text").text();
console.log("original_text");

function matchingFunction(){
  var text_box = $("#text_box").val();
  if (text_box.length>original_text.length){
     $("#text_box").css('color','red')}
  var substing_var = original_text.substring(0, text_box.length);




  //console.log(text_box);
  console.log(substing_var);

  if (text_box==substing_var){
    $("#text_box").css('border-color','green');
  } else if (text_box==substing_var){
    //blue
      $("#text_box").css('border-color','blue');
    }
    else{
    //red
      $("#text_box").css('border-color','red');

    //green
  }
}

$("#text_box").keyup(matchingFunction)

//keyup
