// Greeting
// Gives the appropriate greeting based on time of day
function Greeting(props) {
  const time = new Date().getHours();
  let response = "";
  if( time < 12 )
    return "Good Morning";
  else if ( time <= 16)
    return "Good Afternoon";
  else if ( time <= 24 )
    return "Good Evening";
}

export default Greeting;