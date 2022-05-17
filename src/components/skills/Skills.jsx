import "./skills.scss";

const Skills = () => {

  const cards = [
    {
      id: "1",
      front: "creative",
      back: "back"
    },
    {
      id: "2",
      front: "skills",
      back: "back"
    },
    {
      id: "3",
      front: "professional",
      back: "back"
    }
  ];

  
  return (
    <div className="skills" id="skills">
      <h1>skills</h1>
      
      <div className="container">
          
      {cards.map((card) => (
          <div key={card.id} className="card">
              <div className="front-card">
                {card.front}
              </div>
              <div className="back-card" >
                {card.back}
              </div>
              
            </div>
            ))}
          </div> 
    </div>
  );
}

export default Skills;