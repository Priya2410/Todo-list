$("li").click(function()
{
    $(this).toggleClass("decor");
});

$("span").click(function(event) {
        // event.preventDefault();
        $(this).parent().fadeOut(500,function(){
        $(this).remove();});
        event.stopPropagation();
});
