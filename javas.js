<!-- //javascript code here// -->
    function light(value)
        {
        var pic;
            if(value == 0) 
            {
                pic="of.png";
            }
            else
            {
                pic="on.png";
            }
            document.getElementById('bulb').src=pic;
        }
 