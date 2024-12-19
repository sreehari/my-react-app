function Car(props) {

  let message = "";

  // if (props.carAge >= 15) {
  //    message = 'Outdated'
  // } else {
  //    message = 'valid'
  // }


  // function dispalyAlert() {
  //   alert('hi')
  // }

  const dispalyAlert = () => {
    alert('hi')
  }

  function dispalySecondAlert(value){
    alert(value)
  }

  return <>
      <p onClick={() => dispalySecondAlert("Goal!")}>{props.carAge >= 15 ? 'Outdated' : 'valid'}</p>
      <h2 className="fdsfa">I am a { props.name }!</h2>
      <p onClick={dispalyAlert}>Established in {props.established}</p>

      <p></p>
    </>
}

export default Car;

