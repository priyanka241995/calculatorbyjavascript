let Answer=document.getElementById("Answer");
let Btns=document.getElementsByClassName("btn");
for(let i of Btns)
{
   i.addEventListener("click",()=>{
    let BtnsText=i.innerHTML;
    Answer.innerHTML+=BtnsText;
    if(BtnsText=="c")
    {
      Answer.innerHTML=""
    }
    
    
    else if(BtnsText=="=")
    {
        let result=eval(Answer.innerHTML);
        Answer.innerHTML=result;
        }
        else{
            Answer.innerHTML+=BtnsText;
        }



   })
}