$(document).ready(function(){
  $(".quiz").submit(function(event){
      event.preventDefault();

      let qOneInput=parseInt($("#question1").val());
      let qTwoInput=parseInt($("#question2").val());
      let qThreeInput=parseInt($("#question3").val());

      $("#question1").text(qOneInput);
      $("#question2").text(qTwoInput);
      $("#question3").text(qThreeInput);
      
      let final = qOneInput+qTwoInput+qThreeInput
        if (final<=4){
          $("#resultA").show();
        } else {
          $("#resultB").show();
        }

      // if (qOneInput === "A" && qTwoInput ==="A" || qThreeInput === "A" && qTwoInput ==="A" || qOneInput === "A" && qThreeInput === "A"){
      //   $("#resultA").show();
      // } else {
      //   $("#resultB").show();
      // }
      // $("#results").show();
  //     let sizeInput=$("#question1").val();

  //     $("#question1").text(sizeInput);
  //     if(sizeInput==="Small"){
  //       $(".size1").show();
  //      } else if (sizeInput==="Mid-size"){
  //        $(".size2").show();
  //      } else {
  //        $(".size3").show();
  //        }
      
  //      $("#result").show();
  //      console.log("end of script")
  });
});