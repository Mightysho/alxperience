document.addEventListener("DOMContentLoaded", function(event) {
    alert('Hello! Mightysho welcome you..!');
    alert('Update is currently going on the website. Thanks!');
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

// <div class="nav-user-info">
//                                     <h5 class="mb-0 text-white nav-user-name">Micheal Shokunbi </h5>
//                                     <span class="status"></span><span class="ml-2">Available</span>
//                                 </div>

//       <script language="JavaScript">
// var myDate = new Date();
  
  
// /* hour is before noon */
// if ( myDate.getHours() < 12 ) 
// {
//     document.write("Good Morning!");
// }
// else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
// if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
// {
//     document.write("Good Afternoon!");
// }
// else  /* the hour is after 5pm, so it is between 6pm and midnight */
// if ( myDate.getHours() > 17 && myDate.getHours() <= 24 )
// {
//     document.write("Good Evening!");
// }
// else  /* the hour is not between 0 and 24, so something is wrong */
// {
//     document.write("I'm not sure what time it is!");
// }
//   </script>
