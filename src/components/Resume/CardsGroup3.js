import React from 'react';
import styles from './CardsGroup.css';
import { Card, Row, Col } from 'antd';
//import P1 from '../statics/images/p1.jpg'

function CardsGroup() {
  return (
    <Row className={styles.normal} type='flex' justify='center' gutter={20}>
    	<Col xs={{ span: 24}} sm={{span: 12}} >
	      <Card className={styles.cardGray}>     	
	      		<div className={styles.portraitDiv} >
	      			<img  className={styles.portrait}  src={require('../../../public/images/banner-btm.jpg')} alt='图片加载中' />
	      		</div>
	      		<hr className={styles.hr} />
	      		<ul className={styles.info}>
		      		<li><b>姓名</b> : 邓凯</li>
							<li><b>年龄</b> : 27岁</li>
							<li><b>电话</b> : 18580748696</li>
							<li><b>邮箱</b> : dk0808@126.com</li>
							
	      		</ul>       	
	      </Card>
      </Col>
     <Col xs={{ span: 24}} sm={{span: 12}} >
	      <Card className={styles.cardGray}> 
	      	<div className={styles.cardDetail}>   	
	      		<ul className={styles.detail}>  			
		      		<li><b>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</b> : 男</li>
							<li><b>出生年月</b> : 1990年6月</li>
							<li><b>身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高</b> : 168cm</li>
							<li><b>婚姻状况</b> : 未婚</li>
							<li><b>户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;籍</b> : 四川德阳</li>
							<li><b>外语等级</b> : CET-6</li>			
	      		</ul>
	      		<ul className={styles.detail}>  
	      			<li><b>毕业学校</b> : 西南交通大学</li>			
							<li><b>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历</b> : 本科</li>
							<li><b>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;制</b> : 4年</li>
							<li><b>毕业时间</b> : 2013年7月</li>
							<li  id='anchorAbout'><b>专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业</b> : 电气工程及其自动化</li>			
	      		</ul> 
	      	</div>       	       	
	      </Card>
      </Col>
	  </Row>


  );
}

export default CardsGroup;
