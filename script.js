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
  smartdata=smartdata+"<tr><td>"+$(".mrlsmartphonetable h6:eq("+i+")").text()+"</td><td>"+$(".mrlsmartphonetable input:eq("+i+")").val()+"</td></tr>";        
    }
    
    smartdata="<table class='mrlaboratorytable'><caption>"+sphonename+"</caption><thead><tr><th>Name : </th><th>"+sphonename+"</th></tr></thead><tbody>"+smartdata+"</tbody></table>";
    
    var smarttext ="<h2>"+sphonename+"</h2><p><b>"+sphonename+"</b> Released on "+$(".mrlsmartphonetable input:eq(1)").val()+" with <b>"+$(".mrlsmartphonetable input:eq(3)").val()+"</b> Chipset. It has a "+$(".mrlsmartphonetable input:eq(22)").val()+" design with "+$(".mrlsmartphonetable input:eq(23)").val()+". <b>"+sphonename+"</b> Display size "+$(".mrlsmartphonetable input:eq(26)").val()+" and "+$(".mrlsmartphonetable input:eq(27)").val()+" Resolution with "+$(".mrlsmartphonetable input:eq(28)").val()+" Technology. Display "+$(".mrlsmartphonetable input:eq(29)").val()+" Protection Features "+$(".mrlsmartphonetable input:eq(30)").val()+". The <strong>"+sphonename+"</strong> has back camera is "+$(".mrlsmartphonetable input:eq(8)").val()+" with "+$(".mrlsmartphonetable input:eq(9)").val()+" etc and "+$(".mrlsmartphonetable input:eq(10)").val()+" video recording.The front camera is "+$(".mrlsmartphonetable input:eq(11)").val()+" with "+$(".mrlsmartphonetable input:eq(12)").val()+" and "+$(".mrlsmartphonetable input:eq(13)").val()+" video recording. <u>"+sphonename+"</u> comes with "+$(".mrlsmartphonetable input:eq(14)").val()+" battery and "+$(".mrlsmartphonetable input:eq(15)").val()+" capacity battery.It has "+$(".mrlsmartphonetable input:eq(6)").val()+" RAM, and "+$(".mrlsmartphonetable input:eq(7)").val()+" ROM, "+$(".mrlsmartphonetable input:eq(2)").val()+" CPU and "+$(".mrlsmartphonetable input:eq(4)").val()+" GPU.The device comes with "+$(".mrlsmartphonetable input:eq(7)").val()+" internal storage and shared MicroSD slot.There is a "+$(".mrlsmartphonetable input:eq(31)").val()+" fingerprint sensor in this phone.It has "+$(".mrlsmartphonetable input:eq(33)").val()+" etc Sensors.The device Made in "+$(".mrlsmartphonetable input:eq(37)").val()+" and Manufactured by "+$(".mrlsmartphonetable input:eq(38)").val()+".</p> <p>Price in Bangladesh "+$(".mrlsmartphonetable input:eq(36)").val()+"</p> <h2>"+sphonename+" full specification</h2>";
    var moresmrtdata = "<h3>More About "+sphonename+"</h3><p>Smartphones are handy mobile computing devices. They differ from feature phones in that they have comparatively more powerful hardware capabilities and a wider mobile operating system, which includes key features such as phone calls, or text messaging as well as more software, internet , and multimedia facilities Etc. The smartphone has many sensors and the devices also support wireless communication.</p><p><a href='https://www.google.com/search?q="+sphonename+"' target='_blank'>"+sphonename+"</a> Search on <a href='https://www.mrlaboratory.info/search?q="+sphonename+"'>"+sphonename+"</a> <b>"+sphonename+" Searched keyword</b><b> "+sphonename+" Price in bd,</b><b> "+sphonename+" price in bangladesh</b>,<b> "+sphonename+" price in indea</b>,<b> "+sphonename+" price in usa</b>,<b> "+sphonename+" price in kuwait</b>,<b> "+sphonename+" price in bangladesh under 20000</b>,<b> "+sphonename+" mobile full details</b>,<b> "+sphonename+" mobile full specification</b>,<b> "+sphonename+" price in pakistan</b>,<b> "+sphonename+" price in bangladesh unofficial</b>,<b> "+sphonename+" price in saudi arabia</b>,<b> "+sphonename+" price in dubai</b>,<b> "+sphonename+" price in india amazon</b>,<b> "+sphonename+" Best Smart Phone in Bangladesh</b>,<b> "+sphonename+" price in india flipkart</b></p>";

    $(".smartoutput textarea").val(smarttext+smartdata+moresmrtdata)

    // alert();
})

$(".smartoutput .smartoutputcbtn").on("click",function(){
    
    navigator.clipboard.writeText($(".smartoutput textarea").val());
})

   