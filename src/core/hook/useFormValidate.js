import { useState } from "react";

let patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
let patternURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
let patternPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
let patternVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/


export default function useFormValidate(initialValue, validate) {
    let [form, setForm] = useState(initialValue)

    function inputChange(event) {
        // console.log(event.target.value)
        setForm({
            ...form,
            [event.target.getAttribute('name')]: event.target.value
        })

    }
    let [error, setError] = useState({})

    function submit() {
        document.querySelectorAll('.error-input').forEach(e => e.classList.remove('error-input'))
        let { rule, message } = validate;


        let errorObject = {}

        for (let i in rule) {
            let r = rule[i];

            if (r.required) {
                if (!form[i]) {
                    errorObject[i] = message?.[i]?.required || 'Trường này không được để trống'
                    continue
                }
            }

            if (r.pattern) {

                let pattern = r.pattern
                if (pattern === 'email') pattern = patternEmail
                if (pattern === 'phone') pattern = patternPhone
                if (pattern === 'url') pattern = patternURL
                if (pattern === 'visa') pattern = patternVisa

                if (!pattern.test(form[i])) {

                    errorObject[i] = message?.[i]?.pattern || 'Trường này không đúng định dạng yêu cầu'
                }
            }


            if (r.min && form[i]?.length < r.min) {
                errorObject[i] = message?.[i]?.min || `Trường này phải dài hơn ${r.min} kí tự`
            }

            if (r.max && form[i]?.length > r.max) {
                errorObject[i] = message?.[i]?.max || `Trường này không được dài hơn ${r.max} kí tự`
            }

            if (r.match && form[r.match]) {
                if (form[r.match] !== form[i]) {
                    errorObject[i] =
                        message?.[i]?.match || `Vui lòng điền giống ${r.match}`;
                }
            }

        }

        for (let i in errorObject) {
            let input = document.querySelector(`[name="${i}"]`);
            if (input) {
                input.classList.add('error-input')
            }
        }
        setError(errorObject);
        return errorObject
    }


    return {
        form,
        inputChange,
        error,
        submit
    }
}


