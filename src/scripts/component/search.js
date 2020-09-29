$("#search")
    .css({
        margin: "1em",
        borderRadius:"4em",
        padding:".4em 1em",
        backgroundColor:"white",
        alignContent:"center",
        overflow:"hidden",
        display:"none"
    })
    .html(
        `<form action="http://google.com/search" target="_blank">
            <input type='text' name="q" placeholder='Google...'>
            <button type='submit'>
                <i class="fas fa-search"></i>
            </button>
        </form>`
    )
    .hover(
        function(){
            $(this).css({
                boxShadow:"0 0 1em .1em white"
            })
        }, function(){
            $(this).css({
                boxShadow:"none"
            })
        }
    )

$("#search input[type=text]")
    .css({
        fontSize:"1em",
        border: "none",
    })

$("#search button")
    .css({
        backgroundColor:"white",
        border:"none",
        fontSize: "1em",
        padding: "0"
    })
