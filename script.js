var acc = document.getElementsByClassName("pop");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}





$(document).ready(function(){
	
	$("#third").click(function(){
		$.ajax({
			url: "https://reqres.in/api/users",
			type: "POST",
			data: {
				  list: $("#first").val(),
				  desc: $("#second").val()
				  
			},
			success: function(response){
				console.log(response);
		    $("#button1").html(response.list); 
			$("#display").html(response.desc);  
			
		
		
	}
	
	
});	
});	
});	