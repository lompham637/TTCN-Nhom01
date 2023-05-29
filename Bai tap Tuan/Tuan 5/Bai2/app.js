//Hàm thực hiện Validation
function Validator(options) {
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement =
                inputElement.parentElement.querySelector("form-message");
            console.log(errorElement);
            if (inputElement) {
                inputElement.onblur = function () {
                    var errorMessage = rule.test(inputElement.value);

                    if (errorMessage) {
                        errorElement.innerText = errorMessage;
                    }
                    else {
                        errorElement.innerText = '';
                    }
                };
            }
        });
    }
}

//Định nghĩa rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : "Vui lòng nhập trường này!";
        },
    };
};
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function () {
            return value ? undefined : "Vui lòng nhập trường này!";
        },
    };
};
