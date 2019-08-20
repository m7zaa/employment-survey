$(document).ready(function(){
  $(".form-group").submit(function(){
  event.preventDefault();
$("input:checkbox[name=job]:checked").each(function(){
  var jobSearch = $(this).val();
  $("#job-response").append("<li>" + jobSearch + "</li>" + "<br>");
});
$("input:checkbox[name=skills]:checked").each(function(){
  var jobSkill = $(this).val();
  $("#skill-response").append("<li>" + jobSkill + "</li>" + "<br>" );

});
$("#job-response, #skill-response").show();
$(".form-group, .JOB, .SKI, #submit").hide();
});
});
