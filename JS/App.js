function App (){

  React.useEffect(() => {
    $(function(){
      $('go').click(function(){
        // get the width of the cars
        var carWidth = $('.car1').width();

        //get the width of the racetrack
        var raceTrackWidth = $(window).width() - carWidth;

        // generate a random # between 1 and 5000

        var raceTime1 = Math.floor((Math.random() * 4000) + 1)
        var raceTime2 = Math.floor((Math.random() * 4000) + 1)
      })
    })
  }, []);

  return(
    <>
    <h1 className="h1">jQuery Car Racer 3.1</h1>
    <div className="container button"> 
    <input type="button" value="Race1" id="go" className="btn btn-success" />
    <input type ="button"  value="Reset" id="reset" className="btn btn-info" />

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