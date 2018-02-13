$(document).ready(function(){
$("#subButton").click(function(){
  $("#gifs").empty();
  var query = $("#inputText").val();
  var myUrl = "https://api.giphy.com/v1/gifs/search?api_key=Ez4KFjWJPIh3WYbXFaTeNMiGZPKXU7x6&q=" + query + "&limit=25&offset=0&rating=G&lang=en";
  $.ajax({
    method: "GET",
    url: myUrl
  }).done(function(result){
    for(var i = 0; i < 20; i++){
    $("#gifs").append("<img src=" + result.data[i].images.downsized_medium.url + "></img>");
  };
  })

})
})
