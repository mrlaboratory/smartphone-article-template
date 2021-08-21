// alert("worked");

var g = $(".mrlsmartphonetable input");
for (var i = 0, len = g.length; i < len; i++)
{
    (function(index){
        g[i].onchange = function(){
         var llv =    $('.mrlsmartphonetable input:eq('+index+')').val();
         localStorage.setItem(('articleform'+index),llv);    
        }    
    })(i);
}

for(var i = 0, len = g.length; i < len; i++){
    var oov =window.localStorage.getItem(('articleform'+i))?window.localStorage.getItem(('articleform'+i)):"";
    $('.mrlsmartphonetable input:eq('+i+')').val(oov);
}

// $(".mrlsmartphonetable input").on("change",function(){
//     alert("ok");
// })

var sphonename = $(".mrlsmartphonetable input:eq(0)").val();
$(".mrsmarfixed button:eq(0)").on("click",function(){ 
    var smartdata="";
    for (var i = 0, len = g.length; i < len; i++)
    {
        smartdata=smartdata+"<tr><td>"+$(".mrlsmartphonetable h6:eq("+i+")").text()+"</td><td>"+$(".mrlsmartphonetable input:eq("+i+")").val()+"</td></tr></br>";        
    }
    
    smartdata="<table class='mrlaboratorytable'><thead>"+sphonename+"</thead><caption>"+sphonename+"</caption>"+sphonename+smartdata+"</table>";
    
    alert(smartdata);
})


   