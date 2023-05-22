
// Validator input

function Validator(options){

    var selectorRules = {}

    // hàm validate để kiểm tra người dùng nhập hay chưa
    function validate(inputElement, errorElement, errorMessage, rule){

        //  Lấy ra các rule của selector
        var rules = selectorRules[rule.selector];
        for(var i = 0; i < rules.length; i++){
            errorMessage = rules[i](inputElement.value)
            if(errorMessage) break;
        }

        if(errorMessage){
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid')
        }

        else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }
    }

    // Lấy element của form
    var formElement = $(options.form)
    
    if(formElement){
        formElement.onsubmit = function(e){
            e.preventDefault();
            // Lặp qua từng rule và validate
            options.rules.forEach(function(rule){
            
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
            var errorMessage = rule.test(inputElement.value);
            validate(inputElement, errorElement, errorMessage, rule);
            })
        }

        options.rules.forEach(function(rule){
            //Lưu lại các rule cho mỗi input

            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test)
            }
            else{
                selectorRules[rule.selector] = [rule.test]
            }



            
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
            if(inputElement){
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function() {
                    // value: inputElement.value
                    // test function: rule.test
                    var errorMessage = rule.test(inputElement.value);
                    validate(inputElement, errorElement, errorMessage, rule) 
                }

                //Xử lý mỗi khi người dùng nhập
                inputElement.oninput = function(){
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid')
                }
            }
        })
    }
}

//  Định nghĩa các rules
//  Khi có lỗi trả ra message lỗi
//  Khi không có lỗi trả về undefined
Validator.isRequired = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : message || 'Vui lòng nhập lại';
        }
    }
}

Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            return regex.test(value) ? undefined : 'Trường này phải là email'
        }
    }
}

Validator.minLength= function(selector, min){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : `Vui lòng nhập tối thiếu ${min} ký tự`;
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}

