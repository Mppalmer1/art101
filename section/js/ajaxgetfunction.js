function getajaxdata(){
$.ajax({
  url:"data/data.txt",
  type: "GET",
  datatype: "text",
  success: successFun,
  error: errorFun,
  complete: function(xhr,status){
    console.log("The request has been done.");

  }
})
}
function successFun(result){
  console.log(result)
  //$('#ajax_text').append(result); or
  $('#ajax_text').html(result);
}

function errorFun(xhr,status,strErr){
  console.log("error"+strErr);
}
$('#ajax_get').click(getajaxdata)


//http://127.0.0.1:3000/sectionD/ This is a live server to show what is running Ajax doesn't run offline
