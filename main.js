/*global $*/
$(document).ready(function(){
  let i=0;
  let m=0;
  let n=0;
  let k=0;
  let timer;
  
  $("#start").click(function(){
    $(this).prop("disabled", true);
    $("#stop,#reset").prop("disabled", false);
    
    timer = setInterval(countUp, 100);
    function countUp(){
      if( k==9 && n==9 && m==9 && i==9 ){
        clearInterval(timer);
      }else if( k==9 && n==9 && m==9 && i<9){
        k=0;
        n=0;
        m=0;
        i++;
      }else if( k==9 && n==9 && m<10 ){
        k=0;
        n=0;
        m++;
      }else if( k==9 && n<9){
        k=0;
        n++;
      }else if( k<9 ){
        k++;
      }
      $(".count").text(i+":"+m+":"+n+":"+k);
    };
  });
  
  $("#reset").click(function(){
    $("#start").prop("disabled", false);
    $("#stop,#reset").prop("disabled", true);
    clearInterval(timer);
    i=0;
    m=0;
    n=0;
    k=0;
    $(".count").text(i+":"+m+":"+n+":"+k);
  });
  
  $("#stop").click(function() {
    $(this).prop("disabled", true);
    $("#start,#reset").prop("disabled", false);
    clearInterval(timer);
    $(".count").text(i+":"+m+":"+n+":"+k);
  });
});
