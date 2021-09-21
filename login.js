$(document).ready(function(){

    function onSuccess(position) {

        var latitude=position.coords.latitude;
        var longitude=position.coords.longitude;
        //var deviceId=device.uuid;
        var username = $('#username').val();
        var password = $('#password').val();
        console.log(latitude);
        console.log(longitude);
        //console.log(deviceId);

        if($.trim(username).length >0 & $.trim(password).length >0) {
            $.ajax({
                    type:'POST',  //Request type
                    url: "http://192.168.0.101/cordovatask2/Auth/login",   
                    data: {username:username,password:password,latitude:latitude,longitude:longitude},
                    cache:false,
                    success:function(data) {
                        console.log(data);
                        if(data==1){

                        //  $.ajax({

                        //    url: "http://test.aniruddhagps.com/CodeIgniterTest/index.php/testing_notification/Soumik_notification_master/loginsuccess",
                        //    method: "post",
                        //    success: function (result) {
                        //        console.log(result);
                        //            // alert(result);
                        //        },
                        //        error: function () {
                        //            console.log('error');
                        //        }

                        //    });

                         swal({
                           title: 'Success',
                           text: "Login Successful",
                           icon: 'success',
                           confirmButtonColor: '#3085d6',
                           confirmButtonText: 'OK'
                       }).then(function(isConfirm) {
                           if (isConfirm) {
                               window.location.href='dashboard.html';
                           }
                       });
                   }else{

                    //  $.ajax({

                    //    url: "http://test.aniruddhagps.com/CodeIgniterTest/index.php/testing_notification/Soumik_notification_master/loginfailed",
                    //    method: "post",
                    //    success: function (result) {
                    //        console.log(result);
                    //                // alert(result);
                    //            },
                    //            error: function () {
                    //                console.log('error');
                    //            }

                    //        });

                     swal({
                      title: "Warning",
                      text: "Login failed",
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
      });
        } 
        else {
           swal({
              title: "Warning",
              text: "Please Fill required field",
              icon: "warning",
              confirmButtonColor: "#3085d6",
              confirmButtonText: 'OK'
          }).then(function(isConfirm) {
            if (isConfirm) {
             // window.location.href='login.html';
             location.reload();
         }
     });
      }

  } ;

  function onError(error) {
      alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
  }

  $('#submit').click(function(){

      navigator.geolocation.getCurrentPosition(onSuccess,onError);
  });
});

