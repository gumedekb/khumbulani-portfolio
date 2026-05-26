import React from "react";
import data from "../../data/index.json";

interface SkillItem {
  id: string;
  src: string;
  title: string;
  description: string;
}

/**
 * MySkills component - displays expertise using data from index.json.
 */
const MySkills: React.FC = () => {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item: SkillItem, index: number) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
