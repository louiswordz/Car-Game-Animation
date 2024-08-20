function App (){
  
  React.useEffect(() => {
    $(function(){
      $('#go').click(function(){
        // Build a function that ckecks to see if a car has won
      function checkIfComplete(){
        if(isComplete == false){
          isComplete = true;
        }else{
          place = "second";
        }
      }
        

        // get the width of car 1
        var carWidth1 = $('#car1').width();

        //get the width of car 1 racetrack
        var raceTrackWidth1 = $(window).width() - carWidth1;

           // get the width of car 2
           var carWidth2 = $('#car2').width();

           //get the width of car 2 racetrack
           var raceTrackWidth2 = $(window).width() - carWidth2;

        // generate a random # between 1 and 4000

        var raceTime1 = Math.floor((Math.random() * 4000) + 1);
        var raceTime2 = Math.floor((Math.random() * 4000) + 1);

        // set a flag variable to False
        var isComplete = false;

        // Set a flag variable to first default
        var place = 'first';

        // Animate car 1
        $('#car1').animate({
          //move the car width of the race track
          left : raceTrackWidth1
        }, raceTime1, function(){
          // Animation complete
        })

        // Run a function
        checkIfComplete()

        // give some text feedback in the race info box
        $('#raceInfo1 span').text(`Finished in ${place} place and clocked in at ${raceTime1} milliseconds`)

        // Animate car 2
        $('#car2').animate({
          //move the car width of the race track
          left : raceTrackWidth2 
        }, raceTime2, function(){
          // Animation complete
        })

        // Run a function
        checkIfComplete()

        // give some text feedback in the race info box
        $('#raceInfo2 span').text(`Finished in ${place} place and clocked in at ${raceTime2} milliseconds`)

      });
      $('#reset').on('click', function(){
        $('.car').css('left','0')
        $('.raceInfo span').text("")
      })
    })
    
  }, []);

  return(
    <>
    <h1 className="h1">jQuery Car Racer 3.1</h1>
    <div className="container button"> 
    <input type="button" value="Race1" id="go" className="btn btn-success" />
    <input type ="button"  value="Reset" id="reset" className="btn btn-warning" />

    </div>
    
    <div id="racetrack">
      <img src="/Asset/car1.png" alt="Car 1" id="car1" className="car" width="200px" height="100px"/>
      <img src="/Asset/car2.png" alt="car 2" id="car2" className="car" width="150px" height="100px"/>
    </div>
    <div id="raceInfoContainer" class="clearfix">
      <h2>Results</h2>
      <div id="raceInfo1" className="raceInfo">Car 1 <span></span></div>
      <div id="raceInfo2" className="raceInfo">Car 2 <span></span></div>
   </div>

    </>
    )
}