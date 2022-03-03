var count = 3;
var countElement = document.querySelector(".likeCount");



function addLike(){
    count++;
    countElement.innerText= count+" like(s)";
  
}