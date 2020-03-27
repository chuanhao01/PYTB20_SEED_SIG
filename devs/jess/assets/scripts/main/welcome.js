const saltRounds = 12;


function warning(text, label) {
    var warning = $("<p class='warning'></p>")
    warning.text(text);
    $(`#${label}`).append(warning);
    submit = false;
}


function formMaker(arr) {
    var everything = new Array();
    arr.forEach(x => {
        var group = $("<div class='form-group form-item'></div>");
        var labelContainer = $(`<div id='${x}label'></div>`);
        var label = $(`<label for="${x}"></label>`).text(x);

        var inputContainer = $("<div class='input'></div>");
        if (x.toLowerCase().indexOf("password") != -1) {
            var input = $(`<input id="${x.replace(" ", "-")}" type='password' name="${x}">`);
        }
        else {
            var input = $(`<input id="${x.replace(" ", "-")}" type='text' name="${x}">`);
        }
        labelContainer.append(label);
        inputContainer.append(input);
        group.append(labelContainer);
        group.append(inputContainer);
        everything.push(group);
    });
    return everything
}


function links(link, content, linkText, register, login) {
    var paragraph = $("<p></p>");
    if (login) {
        var link = $(`<a class="Register" href="${link}" onclick='formtemplate("Register",["Email"],"Login")'></a>`);
    }
    else if (register) {
            var link = $(`<a class="Login" href="${link}" onclick='formtemplate("Login",["Email"],"Register")'></a>`);
        
    }

    link.text(linkText);
    paragraph.text(content);
    paragraph.append(link);
    return paragraph;
}

function formtemplate(purpose, input, removal) {
    try {
        $(`#${removal}`).remove();
    } catch (error) {
    }
    var form = $(`<form id="${purpose}" class="mx-auto"></form>`);
    var group = formMaker(input);
    if (purpose == "Login") {
        var register = links("/#", "Dont have an account?", "Register here!", false, true);
        var button = $(`<input type="button" class="btn btn-primary" onclick="login()" value="${purpose}!">`);
        group.forEach(x => {
            form.append(x);
        });
        form.append(button);
        form.append(register);
    }
    else if (purpose == "Register") {
        var login = links("/#", "Have a account already?", "Login here!", true, false);
        var button = $(`<input type="button" class="btn btn-primary" onclick="register()" value="${purpose}!">`);
        group.forEach(x => {
            form.append(x);
        });
        form.append(button);
        form.append(login);
    }
    else {
        var login = links("/#", "", "Return", true, false);
        var button = $(`<input type="button" class="btn btn-primary" onclick="forget()" value="Submit!">`);
        group.forEach(x => {
            form.append(x);
        });
        form.append(button);
        form.append(login);
    }
    $(".right").append(form);
}


function register() {
    function checkEmail(email) {
        var test = RegExp("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")
        return test.test(email);
    }
    var warningList = document.getElementsByClassName("warning")
    while (warningList.length > 0) {
        warningList[0].remove();
    }
    var email = $("#Email").val();
    var submit = true;
    if (!checkEmail(email)) {
        warning("Please enter a valid email!", "Emaillabel");
        submit = false
    }
    if (submit) {
        data = {
            email: email,
        }
        $.post({
            url: "/register",
            data: data,
            success: function (data, status, xhr) {
                console.log("hello")
                $("#Register").remove();
                var container = $("<p id='success'></p>");
                container.text("Your account has been created! A confirmation email will be sent to the email you provided to log in! ");
                $(".right").append(container);

            },
            error: function (data, status, xhr) {
                function warning(text, label) {
                    var warning = $("<p class='warning'></p>")
                    warning.text(text);
                    $(`#${label}`).append(warning);
                    submit = false;
                }
                console.log(data.responseText)
                if (data.responseText == "Email exists!") {
                    warning("Email is already being used by another account!", "Emaillabel");
                }
                else {
                    var warning = $("<p class='warning'></p>")
                    warning.text("The server is experiencing some issues right now, please try again later");
                    $(`.right`).append(warning);
                }
            }
        });
    }
}

function login() {
    function checkEmail(email) {
        var test = RegExp("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")
        return test.test(email);
    }
    var warningList = document.getElementsByClassName("warning")
    while (warningList.length > 0) {
        warningList[0].remove();
    }
    var email = $("#Email").val();
    if (!checkEmail(email)) {
        warning("Please enter a valid email!", "Emaillabel");
    }
    else {
        data = {
            email: email,
        }
        $.post({
            url: "/login",
            data: data,
            success: function (data, status, xhr) {
                console.log("hello")
                $("#Login").remove();
                var container = $("<p id='success'></p>");
                container.text("A confirmation email will be sent to the email you provided to log in! ");
                $(".right").append(container);
            },
            error: function (data, status, xhr) {
                var warning = $("<p class='warning'></p>")
                warning.text("Email does not exist!");
                $(`.right`).append(warning);
            }
        });
    }

}
$(document).ready(function () {
    formtemplate("Login", ["Email"], "Register");

})