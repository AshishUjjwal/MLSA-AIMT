import React from "react";
import logo from '../Images/Designer.png'
import styles from './About.module.css';


const about = () => {
  return (
    <div className={styles.mainabout}>
        <div className={styles.heading}>
            <span className={styles.heading1}>About MLSA</span>
        </div>
        <div className={styles.about}>
            <div className={styles.aboutimg}>
                <img src={logo} alt="Img" />
            </div>
            <div className={styles.content}>
                <span>Microsoft Learn Student Ambassadors - [MLSA] envisions a world where everyone has access to the benefits of technology. We believe that technology has the potential to be an effective tool for education, and we are committed to educating everyone about various tech stacks, thus keeping them updated.<br/><br/><br/>To achieve this vision, we focus on several key objectives. Firstly, our educational outreach programs include organizing workshops, webinars, tech talks, and seminars on a wide range of topics. These events cater to different skill levels, ensuring that both beginners and advanced learners can benefit from the knowledge shared by experts and experienced professionals.</span> 
            
            </div>
        </div>
    </div>
  )
};

export default about;
