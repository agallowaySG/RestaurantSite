


function checkForm() {
    'use strict';
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var phone = document.getElementById("phoneInput").value;
    var reason = document.getElementById("reason").value;
    var addinfo = document.getElementById("addInfo").value;
    var days = document.getElementsByName("days");
    var daysChecked = false;
    var e;
    var warning="";

    for (e=0;e<days.length;e++) {
        if (days[e].checked==true) {
           daysChecked=true;
         }
     }

	if (name.length<=0)
		{
		   warning += "Please provide your Name. \n";
		}

	if (email.length<=0 && phone.length<=0)
		{
		   warning += "Please provide either Email or Phone. \n";
		}
	if (reason==4 && addinfo.length<=0)
		{
		   warning += "Please provide Additional Information for Other request. \n";
		}
	if (!daysChecked)
		{
		   warning += "Please select the Best days to contact you. \n";
		}
      
       
	 if (warning.length>0) {
		alert(warning);
        }
    
}
