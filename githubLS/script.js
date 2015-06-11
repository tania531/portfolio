// Code goes here
// $(document).ready(function(){
  
// });
var userNames = [];
$("button").on('click', function(){
  var userName = $("#userName").val();
  userNames.push(userName);
  localStorage["githubusers"] = JSON.stringify(userNames);
  var LSusers = JSON.parse(localStorage["githubusers"]);
  
  console.log("LSusers: ", LSusers);//what is being handled 
  var url = "https://api.github.com/users/" + userName; // endpoint gives info
  $.get(url, function(data){
    console.log(data.avatar_url);
    var img = $("<img>", {src: data.avatar_url});
    $("body").append(img);
  });
  
});