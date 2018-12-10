
function weather(){
    var abc = document.getElementById("inputcity").value;

    var key = `http://api.apixu.com/v1/current.json?key=3f153d961ef54786b1455449180412&q=`;
    
    var url = key + abc;
$.getJSON(url, function(data) {
       
        console.log(data);
    
    var city = data.location.name;
    var weather = data.current.condition.text;
    var temp = Math.floor(data.current.temp_c);
    var icon = data.current.condition.icon;
    
    $(".icon").attr("src",icon);
    $(".temp").replaceWith(temp);
    $(".city").replaceWith(city);
    $(".weather").replaceWith(weather);
    
    if(temp<20)
        {
            $(".maincontainer").css("background-image", "url('cold.jpg')");
        }
    else
        {
            $(".maincontainer").css("background-image", "url('warm.jpg')");
        }
    

    
    }
          );
}