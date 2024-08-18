function App (){
const [state, setState] = React.useState({
  num1:2,
  num2 : 4,
  Response:"",
  Score: 0
})
  function inputKeyPress(e){
    if(e.key ==="Enter"){
      let answer = parseInt(state.Response)
      if(state.num1 + state.num2 === answer){
        // User got the answer correct
        setState({
          num1: Math.ceil(Math.random() * 10),
          num2:Math.ceil(Math.random() * 10),
          Score: state.Score + 1,
          incorrect:false,
          Response: ''
        })
      }else{
        // user got answer wrong
        setState({
          ...state,
          num1: Math.ceil(Math.random() * 10),
          num2:Math.ceil(Math.random() * 10),
          Score: state.Score -1,
          incorrect: true,
          Response: '',
        
        })
      }
    }
  }
  function updateResponse(e){
    setState({
      ...state,
      Response:e.target.value
    })
  }

  if(state.Score === 10){
    return(
      <div className="container" id="winner">
        You won!
      </div>
    )
  }
  return(
    <>
      <h1 id={state.incorrect?"problem":""} className="h1">{state.num1} + {state.num2}</h1>
      <input value={state.Response} onKeyPress={inputKeyPress} onChange={updateResponse} autoFocus />
      <h2>{state.Score}</h2>
      <button className="btn btn-danger" id="ye">Click Me</button>
    </>
      )
}