// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready


//var validationflag='';
var validationflag;

var form = document.getElementById('form1');
//var name1 = document.getElementById('name');
var nameValue1= document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');


    
      
function checkInputs() {
	// trim to remove the whitespaces
	var nameValue = nameValue1.value.trim();
    console.log(nameValue);
	var emailValue = email.value.trim();
	var passwordValue = password.value.trim();
	//const password2Value = password2.value.trim();
	
	if(nameValue === '') {
        //console.log("Inside username");
        var errormsg = document.getElementById("error_msg");
		errormsg.innerHTML = "Username field is missing";
        //$(errormsg.html("Username field needs filling");
        validationflag = false;
	} else {
		//setSuccessFor(name1);
        validationflag = true;
	}
	
	if(emailValue === '') {
        console.log("Inside email blank");
		var errormsg = document.getElementById("error_msg");
		errormsg.innerHTML = "Username field is missing";
        
        // $("#error_msg").html("Email field needs filling");
        validationflag = false;
                console.log(validationflag);
	} else if (!isEmail(emailValue)) {
        console.log(email);
        console.log(emailValue);
        console.log("Inside email not email");
		;$("#error_msg").html("Email format is wrong");
        validationflag = false;
        console.log(validationflag);
	} else {
		//setSuccessFor(email);
        validationflag = true;
	}
	
	if(passwordValue === '') {
        
        console.log("Inside passwrd");
        $("#error_msg").html("Password field needs filling");
		//setErrorFor(password, 'Password cannot be blank');
        validationflag = false;
	} else {
        //console.log(password);
		//setSuccessFor(password);
        validationflag = true;
	}


}

function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var span = formControl.querySelector('span');
	formControl.className = 'form-control error';
	span.innerText = message;
}

function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

$("#sub").click(function () {
    alert("Have entered near checkinputs")
    checkInputs();



console.log("Hello");
console.log(validationflag);






if(validationflag == true){



document.addEventListener('deviceready', onDeviceReady, false);
console.log("Hi, outside");
function onDeviceReady() {   



    // PushNotification.createChannel(
    //     () => {
    //       console.log('success');
    //      // alert("channel success");
    //     },
    //     () => {
    //       console.log('error');
    //       //alert("channel error");
    //     },
    //     {
    //       id: 'testchannel1',
    //       description: 'My first test channel',
    //       importance: 3,
    //       vibration: true,
    //       sound: "channelsound1"
    //     }
    //   );

    //   var push = PushNotification.init({
    //     android: {senderID: "452116626466", "forceShow": "true", "alert":"true", iconColor: "#007bff", icon: "mdpi", "sound": "true", "vibrate": "true"},
    //     ios: {alert: "true", badge: "true", sound: "true"}, windows: {}
    // });
    // push.on('registration', function (data)
    // {
    //     console.log(data);
    //     console.log(data.registrationId);
    //     //alert(data.registrationId);
    //    });

    //   PushNotification.hasPermission(data => {
    //     if (data.isEnabled) {
    //       console.log('isEnabled');
    //       alert("enabled");
    //     }
    //     else{
    //         alert("not enabled");
    //     }
    //   });
    console.log("Hi, inside");
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    
    //checkconnection
    function checkConnection() {
        var networkState = navigator.connection.type;
        
        setTimeout(function(){
            networkState = navigator.connection.type;
            //alert('networkState = '+networkState);
        
            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';
            var connecttype=states[networkState];
            localStorage.setItem("connecttype", connecttype);
            //alert('Connection type: ' + states[networkState]);
        }, 500);
    }

    checkConnection();

    // current GPS coordinates

     
    function onSuccess(position) {
    
                    
      var latitude=position.coords.latitude;
      var longitude=position.coords.longitude;                              
      var deviceId = device.uuid;   




      
          var connecttype = window.localStorage.getItem("connecttype");
          console.log(connecttype);
          console.log(latitude);
          console.log(longitude);  
          console.log(deviceId);
          
         
                      
                      var name = $("#name").val();
                      var email = $("#email").val();
                      
                      var password = $("#password").val();
                      var prevorg = $("#company").val();
                      var department = $("#department").val();
                      var org_email = $("#org_email").val();
                      var hremail = $("#hremail").val();
                      var hodemail = $("#hodemail").val();
                      var empexp = $("#empexp").val();
                      var imagepath = $('#msg').text();

                      // if($.trim(username).length >0 & $.trim(name).length & $.trim(password).length>0) {
                      if($.trim(name).length >0){
                          $.ajax({
                              method:"POST",
                              url: "http://192.168.0.101/cordovatask2/Auth/register",   
                              data:{name:name, email:email, password:password, prevorg:prevorg, department:department, org_email:org_email, hremail:hremail, hodemail:hodemail, empexp:empexp, imagepath:imagepath},
                              cache:false,
                              success:function(data) {
                                  
                                  if(data){
            //                           $.ajax({
            //                               url: "http://test.aniruddhagps.com/CodeIgniterTest/index.php/testing_notification/Soumik_notification_master",
            //                                   method: "post",
            //                                   success: function (result) {
            //                                       console.log(result);
            //                                   // alert(result);
            //                               },
            //                               error: function () {
            //                                   console.log('error');
            //                               }

            //                           });


                                    swal({
                                    title: 'Success',
                                    text: "Registered Successfully",
                                    icon: 'success',
                                    confirmButtonColor: '#3085d6',
                                    confirmButtonText: 'OK'
                                    }).then(function(isConfirm) {
                                    if (isConfirm) {
                                        location.reload();
                                    }
                                });
                
               }else{
                  swal({
                    title: "Warning",
                    text: "Registration failed",
                    icon: "warning",
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                }).then(function(isConfirm) {
                  if (isConfirm) {
                      // window.location.href='login.html';
                      location.reload();
                  }
              });
            } //above else closes
        }
       

        
    });

}           
                  
                  else {
                      swal({
                          title: "Warning",
                          text: "Please Fill required field",
                          icon: "warning",
                          confirmButtonColor: '#3085d6',
                          confirmButtonText: 'OK'
                      }).then(function(isConfirm) {
                          if (isConfirm) {
                  // window.location.href='login.html';
                  location.reload();
              }
          });
                  }
        
       
      
      
      
}

      function onError(error) {
              alert('code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n');
          }
          $("#sub").click(function(){
          navigator.geolocation.getCurrentPosition(onSuccess, onError);
          });
        
           
         
} //onDevice Ready closes     


        let app = {
            init: function(){
                document.getElementById('btnclick').addEventListener('click', app.takephoto);
            },
            takephoto: function(){
                let options = {
                    quality: 80,
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    mediaType: Camera.MediaType.PICTURE,
                    encodingType: Camera.EncodingType.JPEG,
                    cameraDirection: Camera.Direction.BACK,
                    targetWidth: 300,
                    targetHeight: 400
                };
                
                navigator.camera.getPicture(app.success, app.fail, options);
            },
            success: function(imgURI){
                document.getElementById('msg').textContent = imgURI;
            
                document.getElementById('photo').src = imgURI;                                   
                
            },
            fail: function(msg){
                document.getElementById('msg').textContent = msg;
            }
        };
        document.addEventListener('deviceready', app.init);     

     
    
            
          
            //upload
            var win = function (r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            var fail = function (error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }

            //checking image
            function checkimage(){
                    var imgURI=$('#msg').text()            
                    console.log(imgURI);                    
        
                    onuploading(imgURI);
            }
                
            function onuploading(imgURI){
                console.log(imgURI);
                var options = new FileUploadOptions();
                options.fileKey = "file";
                options.fileName = imgURI.substr(imgURI.lastIndexOf('/') + 1);
                options.mimeType = "text/plain";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imgURI, encodeURI("http://192.168.0.101/cordovatask2/Auth/uploading"), win, fail, options);
    
            }
    

     
        }

    });