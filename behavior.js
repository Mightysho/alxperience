document.addEventListener("DOMContentLoaded", function(event) {
    alert('Hello! Mightysho welcome you..!');
});
document.getElementById("smart_thumbnail");
var thumbnailElement = document.getElementById("smart_thumbnail");
thumbnailElement.addEventListener("click", function() {
    alert("Mightysho saw you click!")
});
if (thumbnailElement.className = "small") {
    thumbnailElement.addEventListener("click", function() {
        thumbnailElement.className = "";
    });
}
else {
    thumbnailElement.addEventListener("click", function() {
        thumbnailElement.className = "small";
    });
}
});
