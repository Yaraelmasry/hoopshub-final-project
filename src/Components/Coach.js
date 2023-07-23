import "./CoachStyles.css";
import CoachData from "./CoachData";
import Coach1 from "../assets/khan.jpg";
import Coach2 from "../assets/mustard.jpg";
import Coach3 from "../assets/white.jpg";

function Coach() {
  return (
    <div className="coach">
      <h1>Our Coaches</h1>
      <div className="coachcard">
        <CoachData
          image={Coach1}
          heading="Chindi Khan"
          text="Throughout his illustrious coaching career, Coach Khan has been associated with numerous championship-winning teams and transformative moments. Many of his former athletes have gone on to pursue successful basketball careers, attributing their accomplishments to the invaluable lessons learned under Coach Khan's mentorship."
        />
        <CoachData
          image={Coach2}
          heading="Jack Mustard"
          text="On the court, Coach Mustard is a master tactician, known for their brilliant game plans and tactical acumen. Their deep understanding of the game, combined with an analytical approach, allows them to adapt swiftly to opponents' strategies and exploit weaknesses effectively."
        />
        <CoachData
          image={Coach3}
          heading="Mathias White"
          text="Coach White takes pride in cultivating strong and positive relationships with his players. He is approachable and empathetic, creating an environment where players feel comfortable seeking guidance and sharing their concerns."
        />
      </div>
   
    </div>
  );
}

export default Coach;
