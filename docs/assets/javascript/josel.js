

// Load header and footer after page has loaded
$(function(){
    $(".landing-section").load("/components/navigation.html");
    $(".footer").load("/components/footer.html");
    // document.getElementsByClassName("current-year").innerHTML = new Date().getFullYear();
}); 