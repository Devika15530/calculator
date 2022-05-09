let string=" ";

/* queryselectorall will select all the buttons with class buttons */
let buttons=document.querySelectorAll('.buttons');


console.log(buttons)
/*Itterating through array of buttons  and adding click event listener to every button */
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        /*eval will eval the expression
        after eval we are addding value to input text box */
        if(e.target.innerHTML == '=')
        {
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'C')
        {
            string=" ";
            document.querySelector('input').value=" ";
        }
        else
        {
            console.log(e.target)
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})

