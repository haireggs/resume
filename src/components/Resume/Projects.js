import React from 'react';
import styles from './Projects.css';
import CardsGroup1 from './CardsGroup1';
import CardsGroup2 from './CardsGroup2';
import CardsGroup4 from './CardsGroup4';
import CardsGroup5 from './CardsGroup5';
import CardsGroup6 from './CardsGroup6';
import CardsGroup7 from './CardsGroup7';
function Projects() {
  return (
    <div className={styles.normal} >
    	<h4 className={styles.title}>项目经验</h4>
    	<CardsGroup1 />
    	<CardsGroup2 />
    	<CardsGroup6 />
    	<CardsGroup5 />
    	<CardsGroup4 />
    	<CardsGroup7 />
      
    </div>
  );
}

export default Projects;
