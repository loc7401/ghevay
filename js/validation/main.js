function Validator(options) {

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }
    var selectorRules = {}

    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        var errorMessage

        rules = selectorRules[rule.selector]

        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'))
                    break
                default:
                    errorMessage = rules[i](inputElement.value)
            }

            if (errorMessage)
                break
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }
        return !errorMessage
    }

    var formElement = document.querySelector(options.form)
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault()

            var isFormValid = true
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }
            })

            var enableInputs = formElement.querySelectorAll('[name]')
            var formValues = Array.from(enableInputs).reduce(function (values, input) {
                switch (input.type) {
                    case 'radio':
                    case 'checkbox':
                        values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                        break
                    default:
                        values[input.name] = [input.value]
                }

                return values
            }, {})
            console.log(formValues)

            if (isFormValid) {
                if (typeof options.onsubmit === 'function') {

                }
            }
        }

        options.rules.forEach(function (rule) {

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }


            var inputElements = formElement.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach(function (inputElement) {
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector('.form-message')
                    errorElement.innerText = ''
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }
            })

        })

    }
}

Validator.isRequired = function (selector) {
    return {
        selector,
        test: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector,
        test: function (value) {
            var check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return check.test(value) ? undefined : 'Email không hợp lệ'
        }
    }
}

Validator.minLength = function (selector, min) {
    return {
        selector,
        test: function (value) {
            return value.length >= min ? undefined : `Nhập tối thiểu ${min} kí tự`
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue) {
    return {
        selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : `Giá trị nhập vào không chính xác`
        }
    }
}