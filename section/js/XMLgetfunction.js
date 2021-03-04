function getAjax(){
$.ajax({
  url:"data/dataXML.xml",
  type:"GET",
  dataType:"xml",
  success: successFun,
  error:errorFun,
  complete: function (xhr, staus){
    console.log("request is complete");
  }

});
}
function successFun(result){
  console.log(result);
  $("#ajax_text").html(result.getElementsByTagName("note")[0]);
}
function errorFun(xhr, status, strErr){
  console.log("error");
}
$("#click_ajax").click(getAjax);
