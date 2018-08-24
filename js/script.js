function closePopup(event) {
	$(event.currentTarget).parent().hide();
}

 function PopUpShow(){

    $(".dropdown-menu-content").show();

}
function PopUpHide(){

    $(".dropdown-menu-content").hide();

}

$(document).ready(function(){    

    PopUpHide();



    $(".dropdown-menu").click(function(event) {

        event.stopPropagation();

        PopUpShow();

    });

   

    $(".wrapper").click(function(event) {

        if ($(event.target).parents('.dropdown-menu-content').length === 0) {

            PopUpHide();

        }

    });

});


 $.validator.addMethod("valueNotEquals", function(value, element, arg){
  return arg !== value;
 }, "Value must not equal arg.");
($(".currency-rate").validate())
$(document).ready(function(){
           var validator = $(".currency-rate").validate({
             rules:{
             	'phone-number':{
             		required: true,
             	},
                email:{
                  required: true,
                  email: true,
                },
                country:{
                	required:true,
                },
                city:{
                	required:true,
                },
                'street-address':{
                	required:true,
                },
                'zip-code':{
                	required:true,
                	number:true,
                },
                birthday:{
                	required:true,
                	date:true,
                },
                'gender-select':{
                	valueNotEquals: "select-item1",
                },
                'bank-branch-select':{
                	valueNotEquals: "select-item1",
                },
                'idtype-select':{
                	valueNotEquals: "select-item1",
                },
                'idnumber-select':{
                	valueNotEquals: "select-item1",
                },
                'birth-place':{
                	required:true,
                },
                password:{
                  required: true,
                },
                'current-password':{
                  required: true,
                },
                'new-password':{
                  required: true,
                },
                'confirm-password':{
                  required: true,
                  equalTo: "#new-password",
                },
                'first-name':{
                  required: true,
                },
                'last-name':{
                  required: true,
                },
                'new-document':{
                  required: true,
                },
                'add-branch':{
                  required: true,
                },
                'add-phone':{
                  required: true,
                },
                'value-currency-rate':{
                  required: true,
                },
             },
             messages:{
             	'phone-number':{
             		required: "Error description",
             	}, 
               	email:{
                 	required: "Error description",
                 	email: "Email error",
             	},
             	country:{
             		required: "Error description",
             	},
             	city:{
             		required: "Error description",
             	},
             	'street-address':{
             		required: "Error description",
             	},
             	'zip-code':{
             		required: "Error description",
             		number: "ZIP code error",
             	},
             	birthday:{
             		required: "Error description",
             		date: "Date error",
             	},
             	'gender-select':{
                	 valueNotEquals: "Select one option",
                },
                'bank-branch-select':{
                	 valueNotEquals: "Select one option",
                },
                'idtype-select':{
                	 valueNotEquals: "Select one option",
                },
                'idnumber-select':{
                	 valueNotEquals: "Select one option",
                },
                'birth-place':{
             		required: "Error description",
             	},
               	password:{
               		required: "Error description",
               	},
               	'current-password':{
                  required: "Error description",
                },
                'new-password':{
                  required: "Error description",
                },
                'confirm-password':{
                  required: "Error description",
                  equalTo: "Passwords are not the same",
                },
                'first-name':{
                  required: "Error description",
                },
                'last-name':{
                  required: "Error description",
                },
                'new-document':{
                  required: "Error description",
                },
                'add-branch':{
                  required: "Error description",
                },
                'add-phone':{
                  required: "Error description",
                },
                'value-currency-rate':{
                  required: "Error description",
                },
             }
          });
   	$('.cancel-icon').on('click', function () {
   		$(".currency-rate").validate().resetForm();  // clear out the validation errors
	});
});
