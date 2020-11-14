(function() {

    function displayErrors(errors, form) {
        var p = form.querySelector(".form-errors");
        if(!p) {
            p = document.createElement("p");
        }
        p.className = "form-errors";
        p.innerHTML = errors.join("<br>");

        form.insertBefore(p, form.children[0])
    }

    function isEmail(text) {
        return text.indexOf("@") !== -1
    }
    function isNotEmpty(text) {
        return text !== ""
    }


    var form = document.getElementById("form")
        emailField = form.querySelector("input[name='email'"),
        nameField = form.querySelector("input[name='name'"),
        message = form.querySelector("textarea[name='message'");

    // form.onsubmit = function() {
    //     alert("test");
    //     console.log('submit - test')
    // }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        var errors = [];

        if(!isEmail(emailField.value)){
            errors.push("Podaj poprawny adres e-mail");
            emailField.classList.add("invalid");
        } else {
            emailField.classList.remove("invalid");
        }
        if(!isNotEmpty(nameField.value)){
            errors.push("Podaj imię");
            nameField.classList.add("invalid");
        } else {
            nameField.classList.remove("invalid");
        }
        if(errors.length){
            displayErrors(errors, form);
        } else {
            form.submit();
        }



    }, false);



})();