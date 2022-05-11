let string = "";
let buttons = document.querySelectorAll('.button');
let screen_width = screen.width;
let screen_height = screen.height;
document.querySelector('.screen-width').innerHTML ="Width is : "+screen_width + "px";
document.querySelector('.screen-height').innerHTML ="Height is : "+screen_height + "px";
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '=')
        {
            if(string == "")
            {
                document.querySelector('input').value = "Enter proper input!";    
            }
            else
            {
                let len =string.length;
                if(string[len-1] == 0 || string[len-1] == 1 || string[len-1] == 2 || string[len-1] == 3 || string[len-1] == 4 || string[len-1] == 5 || string[len-1] == 6 || string[len-1] == 7 || string[len-1] == 8 || string[len-1] == 9 || string[len-1] == ')')
                {
                    string = eval(string);
                    document.querySelector('input').value = string;
                }
                else
                {
                    document.querySelector('input').value = "Give proper input!";
                }
                
            }
        }
        else if(e.target.innerHTML == 'C')
        {
            string= "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DEL')
        {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else
        {
            console.log(e.target)
            string += e.target.innerHTML;
            string = string.replace(/X/g, "*");
            document.querySelector('input').value = string;
        }
    })
})
