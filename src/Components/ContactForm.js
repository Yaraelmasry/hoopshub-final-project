import "../Components/ContactForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactForm() {
  return (
    <>
      <div className="form-container1">
        <h1>Send a message to us!</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <input placeholder="Phone Number"/>
          <textarea placeholder="Message" rows="4"></textarea>

          <button
          onClick={() => {
            
              alert("Thank you for contacting us! We will get back to you shortly!");
              console.log();
           
          
          }}
          >Send Message</button>
        </form>
      </div>
     
    </>
  );
}

export default ContactForm;