var ang;
var min= 0;
var max= 43;
var g = 9.810000;
var staFriC = 0.400000;
var dynFri = 0.400000;

const rangeInputs = document.querySelectorAll('input[type="range"]')
rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})
function handleInputChange(e) {
  Xvalue = 0;
  Xvalue2 = 15;
  myStartTime = new Date().getTime();
  timeMultiple = 0;
  pausedMillSec = 0;

  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  }
  const min = target.min
  const max = target.max
  const val = target.value
  const name = target.name
  if (name == "mass") { 
    myMass = val;
     $(".inputMass").text(val);
     $(".cal_weight").text(val*980);
     ang=$(".content_div .angle_plane").text();
     Ma = val;
    Wa = Ma * g;
    angR= ang * 0.017453;
    slidingF = Wa * Math.sin(angR);
    staFriF = staFriC * Wa * Math.cos(angR);
    acc = g * (Ma * (dynFri * Math.cos(angR) - Math.sin(angR)) + Ma) / (Ma);
    $(".fric_force").text(String(staFriF).substring(0, 5));
    $(".sliding_force").text(String(slidingF).substring(0, 5));
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    return ang;
     }

}


$(".bigRightBtn").on("click",function(){
  ang= parseInt($(".content_div .angle_plane").text());
  if(ang<39){
    ang=ang+5;
    $(".content_div .angle_plane").text(ang, "<sup>0</sup>");}
  else if(ang>40 && ang<45){
    // ang=44;
    $(".content_div .angle_plane").text(ang, "<sup>0</sup>");

  }
  
  
  else{

    ang=40;
    $(".content_div .angle_plane").text(ang);}

    rotatePlane();
 
  update();

})

function rotatePlane(){
  $(".rotatingDiv").css({'transform':'rotate(-'+ang+'deg)', 'transform-origin': '0'});
  
  if(ang>0 && ang<5 ){
    $(".rotatingDiv").css({'left':'-2px','top':'2px'});
  }
  else if(ang==5){
    $(".rotatingDiv").css({'left':'-4px','top':'3px'});
  }
  else if(ang>5 && ang<=8 ){
    $(".rotatingDiv").css({'left':'-7px','top':'3px'});
  }
  else if(ang==9){
    $(".rotatingDiv").css({'left':'-10px','top':'3px'});
  }
  else if(ang==10){
    $(".rotatingDiv").css({'left':'-12px','top':'3px'});
  }
  else if(ang>10 && ang<14){
    $(".rotatingDiv").css({'left':'-15px', 'top':'3px'});
  }
  else if(ang==14){
    $(".rotatingDiv").css({'left':'-18px', 'top':'4px'});
   }
  else if(ang==15){
    $(".rotatingDiv").css({'left':'-20px', 'top':'4px'});
  }
  else if(ang>15 && ang<19){
    $(".rotatingDiv").css({'left':'-21px', 'top':'5px'});
  }
  else if(ang==19){
    $(".rotatingDiv").css({'left':'-23px', 'top':'5px'});
  }
  else if(ang==20){
    $(".rotatingDiv").css({'left':'-26px', 'top':'7px'});
  }
  else if(ang>20 && ang<24){
    $(".rotatingDiv").css({'left':'-28px', 'top':'8px'});
  }
  else if(ang==24){
    $(".rotatingDiv").css({'left':'-31px', 'top':'9px'});
  }
  else if(ang==25){
    $(".rotatingDiv").css({'left':'-33px', 'top':'9px'});
  }
  else if(ang>25 && ang<29){
    $(".rotatingDiv").css({'left':'-35px', 'top':'10px'});
  }
  else if(ang==29){
    $(".rotatingDiv").css({'left':'-38px', 'top':'12px'});
  }
  else if(ang==30){
    $(".rotatingDiv").css({'left':'-40px', 'top':'14px'});
  }
  else if(ang>30 && ang<34){
    $(".rotatingDiv").css({'left':'-42px', 'top':'15px'});

  }
  else if(ang==34){
    $(".rotatingDiv").css({'left':'-44px', 'top':'17px'});

  }
  else if(ang==35){
    $(".rotatingDiv").css({'left':'-45px', 'top':'18px'});

  }
  else if(ang>35 && ang<38){
    $(".rotatingDiv").css({'left':'-48px', 'top':'19px'});

  }
  else if(ang==38){
    $(".rotatingDiv").css({'left':'-50px', 'top':'20px'});

  }
  else if(ang==39){
    $(".rotatingDiv").css({'left':'-51px', 'top':'21px'});

  }
  else if(ang==40){
    $(".rotatingDiv").css({'left':'-52px', 'top':'23px'});

  }
  else if(ang>40 && ang<43){
    $(".rotatingDiv").css({'left':'-54px', 'top':'24px'});
  }
  else if(ang==43){
    $(".rotatingDiv").css({'left':'-56px', 'top':'26px'});
  }
  else if(ang==44){
    $(".rotatingDiv").css({'left':'-59px', 'top':'27px'});
  }
  else{
    $(".rotatingDiv").css({'left':'0px', 'top':'0px'});
  }
}


$(".smallRightBtn").on("click",function(){
  ang= parseInt($(".content_div .angle_plane").text())+1;
  if(ang<44){$(".content_div .angle_plane").text(ang);}
  else{
    ang=44;
    $(".content_div .angle_plane").text(44);}
  rotatePlane();
  update();
})
$(".smallLeftBtn").on("click",function(){

  ang= parseInt($(".content_div .angle_plane").text())-1;
  if(ang>0){$(".content_div .angle_plane").text(ang);}
  else{$(".content_div .angle_plane").text(0);}
  rotatePlane();
  update();
})
$(".bigLeftBtn").on("click",function(){
  ang= parseInt($(".content_div .angle_plane").text())-5;
  if(ang>0)
  $(".content_div .angle_plane").text(ang);
  else $(".content_div .angle_plane").text(0);
  rotatePlane();
  update();
})

$(".content_div .surface_div .glass_btn").on("click",function(){
  staFriC = 0.2;
    dynFri = 0.2;
    $(".rotatingDiv img.surface_image").attr("src","assets/images/grey_surface.svg")
    ang=$(".content_div .angle_plane").text();
    update();

})
$(".content_div .surface_div .green_btn").on("click",function(){
  staFriC = 0.4;
    dynFri = 0.4;
    $(".rotatingDiv img.surface_image").attr("src","assets/images/green_surface.svg")
    ang=$(".content_div .angle_plane").text();
    update();

})
$(".content_div .surface_div .wood_btn").on("click",function(){
  staFriC = 0.7;
    dynFri = 0.7;
    $(".rotatingDiv img.surface_image").attr("src","assets/images/brown_surface.svg")
    ang=$(".content_div .angle_plane").text();
    update();

})
function update(){
  Ma = $(".body_mass .inputMass").text();
    Wa = Ma * g;
     ang=$(".content_div .angle_plane").text();
    angR= ang * 0.017453;
    
    staFriF = staFriC * Wa * Math.cos(angR);
     slidingF = Wa * Math.sin(angR);
      Weight_body=$(".bottom_content .cal_weight").text();
     normF= Weight_body * Math.cos(angR)
     Ta = slidingF;
    Tb = Wa;
    acc = g * (Ma * (dynFri * Math.cos(angR) - Math.sin(angR)) + Ma) / (Ma);
    $(".fric_force").text(String(staFriF).substring(0, 5));
    $(".sliding_force").text(String(slidingF).substring(0, 5));
    $(".norm_force").text(String(normF).substring(0, 8));
    $(".spancalculate.angle_plane").text(ang);
    acc = g * (Ma * (dynFri * Math.cos(angR) - Math.sin(angR))) / (Ma);
    if(acc>0){
      acc=0;
      $(".accleration").text(0);
      $(".rotatingDiv.moveObj .weight_image,.rotatingDiv.moveObj .weight_A").css({'animation-play-state': 'paused'});
    }
    else if(acc == -0.0015451538284180233){
      $(".accleration").text(String(acc).substring(0, 5));
      $(".rotatingDiv.moveObj .weight_image,.rotatingDiv.moveObj .weight_A").css({'animation-play-state': 'paused'});

    }
    else{
    $(".accleration").text(String(acc).substring(0, 5));
    $(".repeat_btn button").removeAttr("disabled");
    $(".rotatingDiv").addClass("moveObj");
    $(".rotatingDiv.moveObj .weight_image,.rotatingDiv.moveObj .weight_A").css({'animation': '10s ease-in-out 0.5s slide','animation-iteration-count': '1','animation-fill-mode': 'forwards'});
    }
 

}
$(document).on("click", ".repeat_btn button", function (event) {
  OnRepeatButton();
});
function  OnRepeatButton(){
  // $(".repeat_btn button").css({'background':'#ffffff','color':'var(--theme-pri-color)','border':'1px solid var(--theme-pri-color)'}); 
  $(".content_div .angle_plane").text("0");
  $(".rotatingDiv").css({'transform':'rotate(0deg)','left':'0','top':'0'});
  // $(".rotatingDiv.moveObj .weight_image,.rotatingDiv.moveObj .weight_A").css({'animation-fill-mode': 'backwards'});

  $(".rotatingDiv.moveObj .weight_image,.rotatingDiv.moveObj .weight_A").css({'animation': '10s ease-in-out 0.5s','animation-fill-mode': 'backwards', 'animation-duration':'0s','animation-direction': 'reverse'});
  $(".rotatingDiv").removeClass("moveObj");
  
  


  update();
 
}









