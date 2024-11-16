Form Validations

What is "FORM" in HTML
->The HTML Forms can be used to collect the data from the user
->The HTML form element can be used to create HTML forms. It is a "CONTAINER" that can contain different types of Input elements like Text Fields, Checkboxes, etc
->In Form has "type - submit" wheneven we click a button or press Enter key while editing any input field in the form, the submit event will be triggered.
->The preventDefault() method prevents the occurrence of default action. onSubmit event on FORM Container
->A Form Event is an event that can occur within a form.
->Some of the form events are:
                              blur
                              focus
                              change
                              submit, etc.



Topics i clearly understood
(1.)setFormData((prev)=>{...prev,[name]:value})
Mistake
The problem is the incorrect usage of curly braces {}. In JavaScript:

Curly braces {} in an arrow function body indicate a block of code, not an object literal.
When using { ...prev, [name]: value } directly, JavaScript needs you to wrap it in parentheses to treat it as an object literal.
Correct Syntax:
setFormData((prev) => ({ ...prev, [name]: value }));