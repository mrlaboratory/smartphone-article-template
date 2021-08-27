// alert("worked");
var g = $(".smtbl input");
for (var i = 0, len = g.length; i < len; i++)
{
    (function(index){
        g[i].onchange = function(){
         var llv =    $('.smtbl input:eq('+index+')').val();
         localStorage.setItem(('articleform'+index),llv);    
        }    
    })(i);
}

for(var i = 0, len = g.length; i < len; i++){
    var oov =window.localStorage.getItem(('articleform'+i))?window.localStorage.getItem(('articleform'+i)):"";
    $('.smtbl input:eq('+i+')').val(oov);
}

// $(".smtbl input").on("change",function(){
//     alert("ok");
// })

$(".mrsmarfixed button:eq(1)").on("click",function(){ 
    for (var i = 0, len = g.length; i < len; i++){
        $(".smtbl input:eq("+i+")").val("");
    }
});
var sphonename = $(".smtbl input:eq(0)").val();
$(".mrsmarfixed button:eq(0)").on("click",function(){ 
    var smartdata="";
    for (var i = 0, len = g.length; i < len; i++)
    {
  smartdata=smartdata+"<tr><td>"+$(".smtbl h6:eq("+i+")").text()+"</td><td>"+$(".smtbl input:eq("+i+")").val()+"</td></tr>";        
    }
    smartdata="<table class='mrlaboratorytable'><caption>"+sphonename+"</caption><thead><tr><th>Name : </th><th>"+sphonename+"</th></tr></thead><tbody>"+smartdata+"</tbody></table><span><!--more--></span>";
var smarttext ="<h2>"+sphonename+"</h2><p><b>"+sphonename+"</b> Released on "+$(".smtbl input:eq(1)").val()+" with <b>"+$(".smtbl input:eq(3)").val()+"</b> Chipset. It has a "+$(".smtbl input:eq(22)").val()+" design with "+$(".smtbl input:eq(23)").val()+". <b>"+sphonename+"</b> Display size "+$(".smtbl input:eq(26)").val()+" and "+$(".smtbl input:eq(27)").val()+" Resolution with "+$(".smtbl input:eq(28)").val()+" Technology. Display "+$(".smtbl input:eq(29)").val()+" Protection Features "+$(".smtbl input:eq(30)").val()+". The <strong>"+sphonename+"</strong> has back camera is "+$(".smtbl input:eq(8)").val()+" with "+$(".smtbl input:eq(9)").val()+" etc and "+$(".smtbl input:eq(10)").val()+" video recording.The front camera is "+$(".smtbl input:eq(11)").val()+" with "+$(".smtbl input:eq(12)").val()+" and "+$(".smtbl input:eq(13)").val()+" video recording. <u>"+sphonename+"</u> comes with "+$(".smtbl input:eq(14)").val()+" battery and "+$(".smtbl input:eq(15)").val()+" capacity battery.It has "+$(".smtbl input:eq(6)").val()+" RAM, and "+$(".smtbl input:eq(7)").val()+" ROM, "+$(".smtbl input:eq(2)").val()+" CPU and "+$(".smtbl input:eq(4)").val()+" GPU.The device comes with "+$(".smtbl input:eq(7)").val()+" internal storage and shared MicroSD slot.There is a "+$(".smtbl input:eq(31)").val()+" fingerprint sensor in this phone.It has "+$(".smtbl input:eq(33)").val()+" etc Sensors.The device Made in "+$(".smtbl input:eq(37)").val()+" and Manufactured by "+$(".smtbl input:eq(38)").val()+".</p> <p>Price in Bangladesh "+$(".smtbl input:eq(36)").val()+"</p> <h2>"+sphonename+" full specification</h2>";
var moresmrtdata = "<h3>More About "+sphonename+"</h3><p>Smartphones are handy mobile computing devices. They differ from feature phones in that they have comparatively more powerful hardware capabilities and a wider mobile operating system, which includes key features such as phone calls, or text messaging as well as more software, internet , and multimedia facilities Etc. The smartphone has many sensors and the devices also support wireless communication.</p><p><a href='https://www.google.com/search?q=site:mrlaboratory.info "+sphonename+"' target='_blank'>"+sphonename+"</a> Search on <a href='https://www.mrlaboratory.info/search?q="+sphonename+"'>"+sphonename+"</a> <b>"+sphonename+" Searched keyword</b><b> "+sphonename+" Price in bd,</b><b> "+sphonename+" price in bangladesh</b>,<b> "+sphonename+" price in indea</b>,<b> "+sphonename+" price in usa</b>,<b> "+sphonename+" price in kuwait</b>,<b> "+sphonename+" price in bangladesh under 20000</b>,<b> "+sphonename+" mobile full details</b>,<b> "+sphonename+" mobile full specification</b>,<b> "+sphonename+" price in pakistan</b>,<b> "+sphonename+" price in bangladesh unofficial</b>,<b> "+sphonename+" price in saudi arabia</b>,<b> "+sphonename+" price in dubai</b>,<b> "+sphonename+" price in india amazon</b>,<b> "+sphonename+" Best Smart Phone in Bangladesh</b>,<b> "+sphonename+" price in india flipkart</b></p><h2>"+sphonename+" Video Review</h2>";
var smrtrelesed = $('.smtbl input:eq(1)').val();
var qnamakermrl1 ='<script type="application/ld+json"> {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [  ';
var qnamakermrl2 ="";
var mrqn1 ="When released the "+sphonename+"? "
var mran1 = ""+sphonename+" released on "+smrtrelesed+"";
var mrqn2 ="When was "+sphonename+"  released?";
var mran2 = sphonename+" Was released on "+$(".smtbl input:eq(1)").val();
var mrqn3 = "Is "+sphonename+"  is good?";
var mran3 = sphonename+" is the best device becouse "+"<b>"+sphonename+"</b> Released on "+$(".smtbl input:eq(1)").val()+" with <b>"+$(".smtbl input:eq(3)").val()+"</b> Chipset. It has a "+$(".smtbl input:eq(22)").val()+" design with "+$(".smtbl input:eq(23)").val()+". <b>"+sphonename+"</b> Display size "+$(".smtbl input:eq(26)").val()+" and "+$(".smtbl input:eq(27)").val()+" Resolution with "+$(".smtbl input:eq(28)").val()+" Technology. Display "+$(".smtbl input:eq(29)").val()+" Protection Features "+$(".smtbl input:eq(30)").val()+". The <strong>"+sphonename+"</strong> has back camera is "+$(".smtbl input:eq(8)").val()+" with "+$(".smtbl input:eq(9)").val()+" etc and "+$(".smtbl input:eq(10)").val()+" video recording.The front camera is "+$(".smtbl input:eq(11)").val()+" with "+$(".smtbl input:eq(12)").val()+" and "+$(".smtbl input:eq(13)").val()+" video recording.";
var mrqn4 = "Is "+sphonename+" ready?";
var mran4 = "Yes, This Device alredy published on "+$(".smtbl input:eq(1)").val();
var mrqn5 = "What is the price of "+sphonename+" ?";
var mran5 = sphonename+" Price in bangladesh "+$(".smtbl input:eq(36)").val();
var mrqn6 = "Is "+sphonename+"  waterproof?";
var mran6 = $(".smtbl input:eq(24)").val()+"waterproof";
var mrqn7 = "Is "+sphonename+"  a Chinese company?";
var mran7 = sphonename+" Made in "+$(".smtbl input:eq(37)").val()+" and Manufactured by "+$(".smtbl input:eq(38)").val();
var mrqn8 = "Is "+sphonename+"  worth buying?";
var mran8 = sphonename+" Price in bangladesh "+$(".smtbl input:eq(36)").val()+". This is better on this price";
var mrqn9 = "Is "+sphonename+"  camera bad?";
var mran9 = "No !! <strong>"+sphonename+"</strong> has back camera is "+$(".smtbl input:eq(8)").val()+" with "+$(".smtbl input:eq(9)").val()+" etc and "+$(".smtbl input:eq(10)").val()+" video recording.The front camera is "+$(".smtbl input:eq(11)").val()+" with "+$(".smtbl input:eq(12)").val()+" and "+$(".smtbl input:eq(13)").val()+"video recording.";
var mrqn10 = "Does "+sphonename+"  have Gorilla Glass?";
var mran10 = $(".smtbl input:eq(29)").val()+" used on this Phone";
var mrqn11 ="Which color is best in "+sphonename+" ?";
var mran11 = sphonename+" have "+$(".smtbl input:eq(35)").val()+"etc color";
var mrqn12 = "Is "+sphonename+"  better than Google?";
var mran12 = "You can compare the everything "+sphonename+" with google . then you can guess which one better. Such as camera, processor, display, RAM, ROM, core speed, etc.";
var mrqn13 = "What type processor use on "+sphonename+"?";
var mran13 = sphonename+" has a "+$(".smtbl input:eq(2)").val() +" Processor and "+$(".smtbl input:eq(3)").val()+" Chipset.";
var mrqn14 ="Which display does "+sphonename+"?";
var mran14 =sphonename+" have "+$(".smtbl input:eq(28)").val()+" Display and "+$(".smtbl input:eq(29)").val() +"Potection";
var mrqn15 ="Does "+sphonename+" support 5G?";
var mran15 = ($(".smtbl input:eq(16)").val().indexOf("5G") != -1) ? 'Yes, '+sphonename+' is 5G Supported Device ..' : 'No, '+sphonename+' does not support 5G It has only '+$(".smtbl input:eq(16)").val()+'';
var mrqn16 ="What is the battery power of "+sphonename+"?";
var mran16 =sphonename+" has battery "+$(".smtbl input:eq(14)").val();
var mrqn17 ="Is "+sphonename+" is water resistant?";
var mran17 =$(".smtbl input:eq(24)").val();
var mrqn18 ="What is the fingerprint sensor position in "+sphonename+"?";
var mran18 ="The "+sphonename+" has a fingerprint sensor at the "+$(".smtbl input:eq(31)").val()+"";
var mrqn19 ="Does USB Type-C supported on "+sphonename+"?";
var mran19 =sphonename+" "+$(".smtbl input:eq(21)").val()+" USB Type-C";
var mrqn20 ="Which sensor is used in "+sphonename+"?";
var mran20 ="The "+sphonename+" has "+$(".smtbl input:eq(33)").val()+" etc sensor";



var qnamralldeta = [ {"qa":mrqn1,"an":mran1}, {"qa":mrqn2,"an":mran2}, {"qa":mrqn3,"an":mran3},  {"qa":mrqn4,"an":mran4}, {"qa":mrqn5,"an":mran5}, {"qa":mrqn6,"an":mran6}, {"qa":mrqn7,"an":mran7}, {"qa":mrqn8,"an":mran8}, {"qa":mrqn9,"an":mran9}, {"qa":mrqn10,"an":mran10}, {"qa":mrqn11,"an":mran11}, {"qa":mrqn12,"an":mran12},
    {"qa":mrqn13,"an":mran13},{"qa":mrqn14,"an":mran14},{"qa":mrqn15,"an":mran15},{"qa":mrqn16,"an":mran16},{"qa":mrqn17,"an":mran17},{"qa":mrqn18,"an":mran18}, {"qa":mrqn19,"an":mran19},{"qa":mrqn20,"an":mran20},

];
var smtvurl =$(".smtbl input:eq(39)").val().replaceAll("watch?v=", "embed/");
smtvurl = '<iframe width="100%" height="400px" src="'+smtvurl+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2>Some question and answer about '+sphonename+'</h2>'


for(var mr=0;mr<qnamralldeta.length;mr++){
    qnamakermrl1 += anajhonmkr(qnamralldeta[mr].qa,qnamralldeta[mr].an)
    qnamakermrl2 += qnansmakermr(qnamralldeta[mr].qa,qnamralldeta[mr].an)
}
qnamakermrl1 +='{ "@type": "Question",  "name": "who is the owner of mr laboratory ? ", "acceptedAnswer": {  "@type": "Answer",  "text": "<b> MR Laboratory</b> is founded by <b>Md Mijanur Rahamn</b> in 2018, and still <strong>Md Mijanur Rahaman</strong> is owner of <strong>MR Laboratory</strong>. " } } ] } </script>';
var mainschema = '<script type="application/ld+json"> { "@context": "https://schema.org/", "@type": "Review",  "itemReviewed": { "@type": "Product", "name": "'+sphonename+'", "review": { "@type": "Review", "author": { "@type": "Person",  "name": "MR Laboratory" },  "inLanguage": "en"	 }, "image": {  "@type": "ImageObject", "url": "<data:blog.postImageThumbnailUrl/>", "height":"700",  "width": "1280" } }, "name": "'+sphonename+' long-term review", "author": {  "@type": "Person",  "name": "MR Laboratory" }, "datePublished": "<data:post.timestamp/>" }</script>'

   $(".smartoutput textarea").val(smarttext+smartdata+mainschema+moresmrtdata+smtvurl+qnamakermrl1+qnamakermrl2)
    $("body").append(); 
})




$(".smartoutput .smartoutputcbtn").on("click",function(){ navigator.clipboard.writeText($(".smartoutput textarea").val()); })
function qnansmakermr(qn,an){ 
var qnamr = '<div class="mraccordian" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"> <h3 itemprop="name">'+qn+'</h3> <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"> <div itemprop="text">'+an+'</div></div></div>';
     return qnamr;}


function anajhonmkr(q,a){
        var qna = '{ "@type": "Question",  "name": "'+q+'", "acceptedAnswer": {  "@type": "Answer",  "text": "'+a+'" } },'
        return qna;
     }
