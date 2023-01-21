import code from "../assets/images/code.png";

function QRcode() {
  return (
    <section>
     <div className="content">
       <div className="image">
        <img src={code}></img>
       </div>
       <div className="details">
        <h3>Improve your front-end skills by building projects</h3>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
       </div>
     </div>
    </section>
  )
}

export default QRcode