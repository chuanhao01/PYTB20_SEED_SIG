function description() {
    var des = $("#Describe").val();
    data = {
        description: des
    };
    $.post({
        url: "/edit",
        data: data,
        success: (data, status, xhr) => {
            var container = $("<p id='success'></p>");
            container.text("Success!");
            $("#Description").append(container);
        },
        error: (data, status, xhr) => {
            var warning = $("<p class='warning'></p>")
            warning.text("The server is experiencing some issues right now, please try again later");
            $(`#Description`).append(warning);
        }
    })
}

function password() {
    var warningList = document.getElementsByClassName("warning")
    while (warningList.length > 0) {
        warningList[0].remove();
    }
    var password0 = $("#Old-Password").val();
    var password1 = $("#Password").val();
    var password2 = $("#Confirm-Password").val();
    if (password1 != password2){
        var warning = $("<p class='warning'></p>")
        warning.text("Password do not match!");
        $(`#Passwordlabel`).append(warning);
    }
    else{
        $.post({
            url: "/changepassword",
            data: {password:password0,newPassword:password1},
            success: (data,status,xhr)=>{
                var container = $("<p id='success'></p>");
                container.text("Success!");
                $("#password").append(container);
            },
            error: (data, status, xhr) => {
                if(data.responseText == "Server error"){
                    var warning = $("<p class='warning'></p>")
                    warning.text("The server is experiencing some issues right now, please try again later");
                    $(`#password`).append(warning);
                }
                else if (data.responseText == "Wrong password"){
                    var warning = $("<p class='warning'></p>")
                    warning.text("Old password is incorrect!");
                    $(`#password`).append(warning);
                }

            }
        })
    }


}