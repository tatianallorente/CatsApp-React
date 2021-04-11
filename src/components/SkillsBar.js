
const SkillsBar = ({skillName, skillValue}) => {

    const capitalize = (word) => {
        return word
          .split('')
          .map((letter, index) =>
            index ? letter.toLowerCase() : letter.toUpperCase(),
          )
          .join('')
          .replace('_', ' ');
    };


    return (
        <div className="skills">
            <p className="skills__title">{capitalize(skillName)}</p>
            <ul className="skills__container">
                <li className={skillValue > 0 ? "skills__container__item skills__container__active": "skills__container__item"}></li>
                <li className={skillValue > 1 ? "skills__container__item skills__container__active": "skills__container__item"}></li>
                <li className={skillValue > 2 ? "skills__container__item skills__container__active": "skills__container__item"}></li>
                <li className={skillValue > 3 ? "skills__container__item skills__container__active": "skills__container__item"}></li>
                <li className={skillValue > 4 ? "skills__container__item skills__container__active": "skills__container__item"}></li>
            </ul>
        </div>
    )
    
}


export default SkillsBar;
