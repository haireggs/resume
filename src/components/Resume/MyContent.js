import React from 'react';
import styles from './MyContent.css';
import { Card, Row, Col} from 'antd';
import CardsGroup3 from './CardsGroup3';
import Skills from './Skills';
import Experience from './Experience';
import About from	'./About';
import Projects from './Projects';

function MyContent() {
  return (
  	<div className={styles.normal} >
  		<div className='contentContainer' >
	  		<CardsGroup3/>
	  		<About />
	  		<Skills />
	  		<Experience />
	  		
	    	<Projects />
    	</div>
    </div>
  );
}

export default MyContent;
