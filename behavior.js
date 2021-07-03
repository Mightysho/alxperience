document.addEventListener("DOMContentLoaded", function(event) {
    alert('Hello! Mightysho welcome you..!');
    alert('Update is currently going on the website, kindly check back later. Thanks! _ Micheal Shokunbi');
//     alert('Kindly click on the small image on my profile.. See the magic.. Click again.. Ignore PopUp after done.. It will keep coming.');
});
document.addEventListener("DOMContentLoaded", function(event) {

var thumbnailElement = document.getElementById("smart_thumbnail");
thumbnailElement.addEventListener("click", function() {
if (thumbnailElement.className == "") {
        thumbnailElement.className = "small";
}else {
        thumbnailElement.className = "";
    }
  });
});
