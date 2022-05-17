$(document).ready(
    function() {

        $.ajax({
            type: 'GET',
            url: 'http://jsonplaceholder.typicode.com/users',
            success:function(data){
                console.log(data);

                $.each(
                    data,
                    function(i,item){
                        //console.log(iten.title);
                        $('#resultado').append(
                            '<li><a href="resultado.html?opcao='+item.id+'">'+item.titler+'</a/></li>'

                        )
                    }
                )

            },
            error:function(data){
            }
        }
        )
        

    }
    )