/* document.getElementById("technical-blog-tab-menu").onclick((e)=>{
   document.getElementById("technical-blog-tab-menu").add 
}) */
$(document).ready(function() {
    $("#technical-blog-tab-menu").addClass("active-menu")
    $("#technical-blog").show()
    $("#case-study").hide()
    $("#others").hide()

    $("#collage-project-tab-menu").addClass("active-menu")
    $("#collage-project").show()
    $("#hackathon-project").hide()
    $("#office-project").hide()
    $("#non-academic-project").hide()
    $("#other-project").hide()
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

function handelProject(type){
    $("#non-academic-project-tab-menu").removeClass("active-menu")
    $("#collage-project-tab-menu").removeClass("active-menu")
    $("#hackathon-project-tab-menu").removeClass("active-menu")
    $("#office-project-tab-menu").removeClass("active-menu")
    $("#other-project-tab-menu").removeClass("active-menu")
    $("#non-academic-project").hide()
    $("#collage-project").hide()
    $("#hackathon-project").hide()
    $("#office-project").hide()
    $("#other-project").hide()
    if(type == "non-academic-project"){
        $("#non-academic-project-tab-menu").addClass("active-menu")
        $("#non-academic-project").show()
    }else if(type == "collage-project"){
        $("#collage-project-tab-menu").addClass("active-menu")
        $("#collage-project").show()
    }else if(type == "hackathon-project"){
        $("#hackathon-project-tab-menu").addClass("active-menu")
        $("#hackathon-project").show()
    }else if(type == "office-project"){
        $("#office-project-tab-menu").addClass("active-menu")
        $("#office-project").show()
    }else if(type == "other-project"){
        $("#other-project-tab-menu").addClass("active-menu")
        $("#other-project").show()
    }
}