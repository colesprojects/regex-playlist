// RegEx Variables
var reg = /[a-z]/gi;

/* Another way to create a reg ex variable id through the RegExp object
    it takes two parameter:
    first - RexEx Expression
    second - string of RegEx flags
*/
var reg2 = new RegExp(/[a-z]/, "gi");

// RegEx Variables for our Form:

const inputs = document.querySelectorAll('input');

const pattern = {
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    telephone: /^\d{11}$/,
    slug: /^[a-z\d-]{8,20}$/,
    /* Email RegEx Format
    1. letters, numbers, dots, hyphens, and/or underscores (email name) => ([a-z\d\.-_]+)
    2. letters, numbers, and/or hyphens (domain) => @([a-z\d-]+)
    3. any letters (extension) => \.([a-z]{2,12})
    4. optional - any letters (another extension) => (\.[a-z]{2,12})?
    */
   email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/
};

// Validation Function

function validate(field, regex) {
    // console.log(regex.test(field.value));
    if (regex.test(field.value))  {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        validate(e.target, pattern[e.target.attributes.name.value]);
    });
});