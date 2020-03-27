function warning(text, label) {
    var warning = $("<p class='warning'></p>")
    warning.text(text);
    $(`#${label}`).append(warning);
    submit = false;
}

function reset(){
    var warningList = document.getElementsByClassName("warning")
    while (warningList.length > 0) {
        warningList[0].remove();
    }
    var submit = true;
    var password1 = $("#Password").val();
    var password2 = $("#Confirm-Password").val();
    if (password1.length < 8) {
        warning("Password must be more than 8 characters long!", "Passwordlabel");
    }
    else if (password1 != password2) {
        warning("Password do not match!", "Passwordlabel");
    }
    
    if (submit){
        const data = {
            password: password1
        }
        $.post({
            url: "/reset",
            data: data,
            success: function(data,status,xhr){
                $("#Register").remove();
                var container = $("<p id='success'></p>");
                var link = $(`<a class="Login" href="/"></a>`);;
                link.text("here");
                container.text("Your password has been changed! Click");
                container.append(link);
                container.append(" to login!");
                $(".right").append(container);
            },
            error: function(data,status,xhr){
                var warning = $("<p class='warning'></p>")
                warning.text("The server is experiencing some issues right now, please try again later");
                $(`.right`).append(warning);
            }
        })
    }
}
