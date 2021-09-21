

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() { 
    function onSuccess(position) {

// $(#submitactivity).click(function(){    
    var first_half_task = $('#firsthalf').val();
    var second_half_task = $('#secondhalf').val();
    if($.trim( first_half_task).length >0 & $.trim(second_half_task).length >0) {
            $.ajax({
                    type:'POST',  //Request type
                    url: "http://192.168.0.101/cordovatask2/Auth/tasks",   
                    data: {first_half_task:first_half_task, second_half_task:second_half_task},
                    cache:false,
                    success:function(data) {
                        //if(data){
                            swal({
                           title: '',
                           text: "Task registered, Day has begun!",
                           icon: 'success',
                           confirmButtonColor: '#3085d6',
                           confirmButtonText: 'OK'
                            }).then(function(isConfirm) {
                                if (isConfirm) {
                                    window.location.href='index_again.html';
                                }
                            });
                       // }
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
    }
// });


        function onError(error) {
            alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        }
        $("#submitactivity").click(function(){
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
            });
}
