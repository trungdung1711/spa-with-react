function Toggle() {
    const [isOn, setIsOn] = useState(false);

    function handleClick() {
        setIsOn(!isOn)
    }
  
    return (
      <button onClick={handleClick}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    );
}


export default Toggle