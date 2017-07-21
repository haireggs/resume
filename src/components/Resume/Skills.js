import React from 'react';
import styles from './Skills.css';
import { Progress, Row, Col } from 'antd';

function Skills() {
  return (
  	<div className={styles.normal} >
  		<h4 className={styles.title}>技能评价</h4>
	    <Row type='flex' justify='center'>
	    	
	    	<Col  span={22}>
	    		<tag>JavaScript</tag>
	    		<Progress percent={42} showInfo={false} />
	    	</Col>
	    	<Col  span={2} className={styles.text}>
	    		<br />
	    		<tag>{'熟悉'}</tag>
	    	</Col>
	    </Row>

	    <Row type='flex' justify='center'>
	    	
	    	<Col  span={22}>
	    		<tag>HTML,CSS</tag>
	    		<Progress percent={44} showInfo={false} />
	    	</Col>
	    	<Col  span={2} className={styles.text}>
	    		<br />
	    		<tag>{'熟悉'}</tag>
	    	</Col>
	    </Row>

	    <Row type='flex' justify='center'>
	    	
	    	<Col  span={22}>
	    		<tag>React</tag>
	    		<Progress percent={40} showInfo={false} />
	    	</Col>
	    	<Col  span={2} className={styles.text}>
	    		<br />
	    		<tag>{'熟悉'}</tag>
	    	</Col>
	    </Row>

	    <Row type='flex' justify='center'>
	    	
	    	<Col  span={22}>
	    		<tag>Python</tag>
	    		<Progress percent={28} showInfo={false} />
	    	</Col>
	    	<Col  span={2} className={styles.text}>
	    		<br />
	    		<tag>{'熟悉'}</tag>
	    	</Col>
	    </Row>

	    <Row type='flex' justify='center'>
	    	
	    	<Col  span={22}>
	    		<tag>Django</tag>
	    		<Progress percent={30} showInfo={false} />
	    	</Col>
	    	<Col  span={2} className={styles.text}>
	    		<br />
	    		<tag>{'熟悉'}</tag>
	    	</Col>
	    </Row>
	   
    </div>
  );
}

export default Skills;
