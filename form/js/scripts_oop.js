(function () {
    function Validator(form) {
        this.form = form;
        this.emailField = form.querySelector("input[name='email'");
        this.nameField = form.querySelector("input[name='name'");
        this.message = form.querySelector("textarea[name='message'");

        this.form.addEventListener("submit",this.validate.bind(this),false);


    }
    Validator.prototype.displayErrors = function(errors, form) {
        var p = this.form.querySelector(".form-errors");
        if(!p) {
            p = document.createElement("p");
        }
        p.className = "form-errors";
        p.innerHTML = this.errors.join("<br>");

        this.form.insertBefore(p, this.form.children[0])
    }

    Validator.prototype.isEmail = function(text){
        return text.indexOf("@") !== -1;
    };
    Validator.prototype.isNotEmpty = function(text){
        return text !== "";
    };

    Validator.prototype.validate = function (e) {
        e.preventDefault();

        this.errors = [];

        if(!this.isEmail(this.emailField.value)){
            this.errors.push("Podaj poprawny adres e-mail");
            this.emailField.classList.add("invalid");
        } else {
            this.emailField.classList.remove("invalid");
        }
        if(!this.isNotEmpty(this.nameField.value)){
            this.errors.push("Podaj imię");
            this.nameField.classList.add("invalid");
        } else {
            this.nameField.classList.remove("invalid");
        }
        if(this.errors.length){
            this.displayErrors();
        } else {
            this.form.submit();
        }
    }

    var form1 = new Validator(document.getElementById("form"));
    var form2 = new Validator(document.getElementById("form2"));
})();