import React from 'react';
import styles from './CardsGroup.css';
import { Card, Row, Col } from 'antd';
//import P1 from '../statics/images/p1.jpg'

function CardsGroup() {
  return (
    <Row className={styles.normal} type='flex' justify='center' gutter={0}>
    	<Col xs={{ span: 24, order: 1 }} sm={{span: 12, order: 0 }} >
	      <Card className={styles.card}>      	
	      		<h4 className={styles.title}>Javascript小游戏</h4>
	       		<p className={styles.text}>
							2016年10月<br />
	       			学习Javascript过程中的练手小游戏，纯Javascript编写，模仿自小蜜蜂游戏。<br />
	       			链接：<a href='http://120.25.74.236/danima'>120.25.74.236/danima</a><br />
	       			源码：
							<a href='http://github.com/haireggs/danima'>http://github.com/haireggs/danima</a>
						</p>
	      </Card>
      </Col>
     <Col xs={{ span: 24, order: 0 }} sm={{span: 12, order: 1 }} >
	      <Card className={styles.card} bodyStyle={{ padding:0 }}>
	       <a href='http://120.25.74.236/danima'><img className={styles.img} src={require('../../../public/images/myDanima.gif')} alt='图片加载中' /></a>
	      </Card>
      </Col>
	  </Row>


  );
}

export default CardsGroup;
