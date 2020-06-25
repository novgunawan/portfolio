//OPEN HAMBURGER MENU
    function openMenu()
    {
        var nav = document.getElementById('menubar');
        nav.classList.toggle('active');
        
        var nav = document.getElementById('menuShow');
        nav.classList.toggle('active');     
    }

        $(document).ready(function(){
            $(".kelasButton").click(function(){
               var name = $(this).attr("data-filter");
                if(name == "all"){
                    $(".filter").show("2000");
                }

                else{
                    $(".filter").not("."+name).hide("2000");
                    $(".filter").filter("."+name).show("2000");
                }
            });
            //Highlight Button
            $(".filterButton a").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
            })
            
        })


    
        