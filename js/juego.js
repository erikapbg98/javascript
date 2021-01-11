var indiceRandom = 0;
var op = [];
var nivel = 1;
$(document).ready(function(){

$("#Elemento").droppable({
    drop: function(event, ui){
        $(this).addClass("ui-state-highlight").find("h2").html("Dropped!");
        $(this).css('background-color', 'green');

    },
    over: function(event, ui){
        $(this).css ('bacground-color', 'gray');

    },
    out: function(event, uit){
        $(this).css ('bacground-color', 'darkgray'); 
    }
});
$.getJSON('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json',
function(data){
    var cuantos = data.elements.length;
    indiceRandom =Math.floor(Math.random()* cuantos);
    $("#Elemento").find('h2').text(data.elements[indiceRandom].name);
    for(var i=0; i<3; i++){
        var n =Math.floor(Math.random()* cuantos)
        op.push(n);
    }
    op.push(indiceRandom);
    op.sort(()=> Math.random()- 0.5);
    op.forEach(n => {
        $("#Opciones").find('ul').append('<li class = "drag"><h2>'+ data.elements[n].symbol +'</h2></li>');
    });
   $(".drag").draggable({
       revert: "invalid",
       refreshPosition: true,
       drag: function(event, ui){
           $(this).css('opacity','0.5');
       },
       stop:function(event,ui){
           $(this).css('opacity', '1');

       }
       }) ;
});
$("#btnIniciar").click(function(){
    if($("#txtNombre").val()==""){
        $("#txtNombre").css('border', '1px solid red');
        $(".alerta").fadeIn(400);
    }else{
        $("#login").animate({
            'left':"-550px"
        }, 200, function(){
            $("#login").fadeOut(1000);
        });
    }
    
});
});