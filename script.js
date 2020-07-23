//This is used to select the li and add a event Click by which we can add a strike through
$("ul").on("click","li",function()
{
    $(this).toggleClass("decor");
});
//This is used to delete the item when we click on it
$("ul").on("click","span",function(event) {
        //This selects the parent element that is the li associated with the X button
        $(this).parent().fadeOut(500,function(){
        $(this).remove();});
        //This "this" is equivalent to ($(this).parent);
        event.stopPropagation();
});
$("input[type='text']").keypress(function(event){ 
    if(event.which === 13)
    {
        var value=$(this).val()
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+value+"</li>");
    }
});

$("#plus").on("click",function(){
    $("input").fadeToggle();
});
