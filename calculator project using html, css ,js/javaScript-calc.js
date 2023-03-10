function btn_click(val)
{
    document.getElementById("input_screen").value +=val;
}
function clear_scrn(clr)
{
    document.getElementById("input_screen").value=clr;
}
function equalClick()
{
    var text = document.getElementById("input_screen").value
    var result=eval(text)
    document.getElementById("input_screen").value=result
}