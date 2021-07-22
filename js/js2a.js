jQuery(document).ready(function(){

	jQuery('.front .region-content-middlle1 .block').addClass('services-container');

	jQuery('.front .region-content-middlle1 .block:first-child').addClass('services-container-first');

	jQuery('.front .region-content-middlle1 .block:last-child').addClass('services-container-last');

	//contact block

	jQuery('#block-block-13').addClass('content contactus-txt');

	jQuery('#block-block-14').addClass('address');

	jQuery('#block-block-15').addClass('wrap-contact-form');

	/////////menu change

	//jQuery('.front .menuabout').attr("href","#section5");

	jQuery('.front .menuabout').attr("href","index-2.html#sec5");

	
	jQuery('.front .menucap').attr("href","index-2.html#sec2");
	
	jQuery('.front .menuservice').attr("href","/index.htmlsec4");

	jQuery('.front .menuhelp').attr("href","index-2.html#rfid");

	jQuery('.front .menucontact').attr("href","index-2.html#conta");

	

	//search form validation

	jQuery('#serchbtn').click(function(){

		var search = jQuery('#search').val().trim();

		var charLength = search.length;

		var type = jQuery('#quicksearch_type').val();

		if(type == 'nsn' && !jQuery.isNumeric(search)){ 

			alert('Part Numbers must contain only number');

			jQuery('#search').focus();

			return false; 

		}

		

		if(type == 'part_num' && charLength < 4){

			alert('Part Numbers must contain at least 4 characters.');

			jQuery('#search').focus();

			return false; 

		}

		if(type == 'nsn' && charLength != 13){

			alert('NSN searches should contain 13 digit numbers.');

			jQuery('#search').focus();

			return false; 

		} 

		

	});

	

	

	

	//alert(jQuery("body").scrollTop());

		jQuery(window).scroll(function () {

			 if (jQuery(this).scrollTop() > 70) { //alert(jQuery(this).scrollTop());

					jQuery('.wrap-logo-menu').addClass('f-nav');

					jQuery('.wrap-logo-menu').addClass('f-nav');//.wrap('<div style="background: #FFF;" id="wrpele"></div>');

					//jQuery('.wrap-logo-menu').wrap('<div style="background: #FFF;"></div>');

					jQuery('.scrollmenu').show();

					jQuery('.menuoriginal').hide();

					if(jQuery( "body" ).hasClass( "logged-in" )){

						jQuery('.scrollmenu').css("top","10px");

					}

			}else{

				jQuery('.wrap-logo-menu').removeClass('f-nav');

				jQuery('.scrollmenu').hide();

				jQuery('.menuoriginal').show();

				

			}

		});	

	//contact form

		jQuery('#contactSubmit').click(function(){

		if(jQuery('#first-name').val() == ''){

			alert('Please enter first name');

			jQuery('#first-name').focus();

			return false;

		}

		var emailID = jQuery('#email').val();

	   atpos = emailID.indexOf("@");

	   dotpos = emailID.lastIndexOf(".");

	   if (atpos < 1 || ( dotpos - atpos < 2 )) 

	   {

		   alert("Please enter correct email ID")

		   jQuery('#email').focus();

		   return false;

	   }

	   if(jQuery('#tel').val() == ''){

		  alert('Please enter contact number');

			jQuery('#tel').focus();

			return false; 

	   }

	   	/* if(!jQuery.isNumeric(jQuery('#tel').val())){

		  alert('Please enter valid number');

			jQuery('#tel').focus();

			return false; 

	   } */

	   if(jQuery('#textarea').val() == ''){

		  alert('Please enter message body');

			jQuery('#textarea').focus();

			return false; 

	   }

	   //post data or send email

	    var url = Drupal.settings.basePath +'contactprocess';

		var fname = jQuery('#first-name').val();

		var lname = jQuery('#last-name').val();

		var email = jQuery('#email').val();

		var phone = jQuery('#tel').val();

		var msg = jQuery('#textarea').val();

		//alert(url);

		 jQuery.ajax({

			type: 'POST',

			url: url,

			data: { name: fname+' '+lname, email:email, phone: phone, msg: msg,  type: "send" },

			 beforeSend: function() {

				// setting a timeout

				//$(placeholder).addClass('loading');

				jQuery('#contactSubmit').replaceWith('<div id="sending">Sending..</div>');

				

			},/* */ 

			success: function(data) {

			jQuery('#sending').replaceWith('<div id="sent">Message sent successfully.</div>');

			},

			/*  error: function(xhr) { // if error occured

				alert("Error occured.please try again");

				$(placeholder).append(xhr.statusText + xhr.responseText);

				$(placeholder).removeClass('loading');

			},

			complete: function() {

				i--;

				if (i <= 0) {

					$(placeholder).removeClass('loading');

				}

			},

			dataType: 'html' */

		}); 

		

	});//end submit click

});;
