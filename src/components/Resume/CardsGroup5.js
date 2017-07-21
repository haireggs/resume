import React from 'react';
import styles from './CardsGroup.css';
import { Card, Row, Col } from 'antd';
//import P1 from '../statics/images/p1.jpg'

function CardsGroup() {
  return (
    <Row className={styles.normal} type='flex' justify='center' gutter={0}>
    	
     	<Col xs={{ span: 24 }} sm={{span: 12}} >
	      <Card className={styles.card} bodyStyle={{ padding:0 }}>
	       <a href='http://v.youku.com/v_show/id_XNTc3MDgyOTg0.html'><img className={styles.img} src={require('../../../public/images/mySegway.gif')} alt='图片加载中' /></a>
	      </Card>
     	</Col>
     	<Col xs={{ span: 24 }} sm={{span: 12}} >
	      <Card className={styles.card}>
	      		<h4 className={styles.title}>平衡车</h4>
	       		<p  className={styles.text}>
	       			2012年9月<br />
	       			与机械系同学两人共同设计制作，负责电路、算法及程序编写部分。原型机完成后在学校立项进行产品化。<br />
	       			<a href='演示视频：http://v.youku.com/v_show/id_XNTc3MDgyOTg0.html'>视频链接</a>
				</p>
						
	      </Card>
      </Col>

	  </Row>
  );
}

export default CardsGroup;