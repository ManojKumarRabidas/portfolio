/* document.getElementById("technical-blog-tab-menu").onclick((e)=>{
   document.getElementById("technical-blog-tab-menu").add 
}) */
$(document).ready(function() {
    $("#technical-blog").show()
    $("#technical-blog-tab-menu").addClass("active-menu")
    $("#case-study").hide()
    $("#others").hide()
});
$("#technical-blog-tab-menu").click(function(){
    $("#technical-blog").show()
    $("#technical-blog-tab-menu").addClass("active-menu")
    $("#case-study").hide()
    $("#case-study-tab-menu").removeClass("active-menu")
    $("#others").hide()
    $("#other-tab-menu").removeClass("active-menu")
})
$("#case-study-tab-menu").click(function(){
    $("#technical-blog").hide()
    $("#technical-blog-tab-menu").removeClass("active-menu")
    $("#case-study").show()
    $("#case-study-tab-menu").addClass("active-menu")
    $("#others").hide()
    $("#other-tab-menu").removeClass("active-menu")
})
$("#other-tab-menu").click(function(){
    $("#technical-blog").hide()
    $("#technical-blog-tab-menu").removeClass("active-menu")
    $("#case-study").hide()
    $("#case-study-tab-menu").removeClass("active-menu")
    $("#others").show()
    $("#other-tab-menu").addClass("active-menu")
})
$(".sidebar-icon").click(function(){
    var sidebar = document.querySelector(".sidebar");
    if(sidebar.style.width=="0vw"){
        sidebar.style.width="60vw";
        }
        else{
            sidebar.style.width="0vw";
        }
})