const Event = (props) => {
  return (
    <div className={"event-flex-container" + props.color}>
      <div className="event-container">
        <div className={"image-container" + props.color}>
          <img className="img" src={props.link} alt={props.alt} />
        </div>
        <div className="info-container">
          <h2> {props.event} </h2>
          <h3> {props.description} </h3>
          <button className="btn" role="button">
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    </div>
  ); // end-return
}; // end-event
export default Event;
