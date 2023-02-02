const Dialog = ({ message, onDialog }) => {
  return (

    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}

      onClick={() => onDialog(false)}
    >

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "white",
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <h4>{message}</h4>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={() => onDialog(true)}
            style={{
              background: "red",
              color: "white",
              padding: "15px",
              marginRight: "6px",
              border: "none",
              cursor: "pointer",
              borderRadius: "10px"

            }}
          >
            Yes
          </button>
          <button
            onClick={() => onDialog(false)}
            style={{
              background: "blue",
              color: "white",
              padding: "15px",
              marginLeft: "6px",
              border: "none",
              cursor: "pointer",
              borderRadius: "10px"
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>

  );
}
export default Dialog;
