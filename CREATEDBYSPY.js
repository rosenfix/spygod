
var titleText = ["Иллюстратор хуйни в стиме", "За эту визитку скинул всего 32 рубля блять.", "Шева дай денег", "Сениор стим бекграунд девелопер"];
var x = 0;

$("#biotuck").click(function () {
    x++;
    $("#biotuck").html(titleText[x%titleText.length]);
});



tracks = {
    'The Deli - 5:32pm': 'a/1.mp3',
    'Sarcastic Sounds - Loud': 'a/2.mp3',
    'halberd - long ago': 'a/3.mp3',
    'Tomppabeats - Monday Loop': 'a/4.mp3',
    'Johan Sebastian Bach - Cello Suite': 'a/5.mp3'
}


var lis = ''
var l = 0
for (i in tracks){
    l++;
    lis+= "<li class='aud' title='Нажми чтобы запустить/остановить трек.'> <i class='fas fa-play'></i>"+i+"<audio id='"+ l +"'><source src='" + tracks[i] + "' type='audio/mpeg'></audio><a href='"+ tracks[i] +"'><i class='fas fa-download download-icn'></i></a></li>"
}


$("#trcks").html(lis);



$(".aud").click(function (){
    var dd = $(this).children('audio').attr('id');
    var i = $(this).children('i')
    spydio = document.getElementById(dd);
    if (spydio.paused){
        spydio.play()
        i.removeClass("fa-play")
        i.addClass("fa-pause")
        $(this).addClass("playing")
    }
    else{
        spydio.pause()
        i.removeClass("fa-pause")
        i.addClass("fa-play")
        $(this).removeClass("playing")
    }
});



