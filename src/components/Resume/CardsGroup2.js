import React from 'react';
import styles from './CardsGroup.css';
import { Card, Row, Col } from 'antd';
//import P1 from '../statics/images/p1.jpg'

function CardsGroup() {
  return (
    <Row className={styles.normal} type='flex' justify='center' gutter={0}>
    	
     	<Col xs={{ span: 24 }} sm={{span: 12}} >
	      <Card className={styles.card} bodyStyle={{ padding:0 }}>
	       <a href='http://blog.csdn.net/dengkai0608/article/details/52089413'><img className={styles.img} src={require('../../../public/images/myBlog.gif')} alt='图片加载中' /></a>
	      </Card>
     	</Col>
     	<Col xs={{ span: 24 }} sm={{span: 12}} >
	      <Card className={styles.card}>
	      		<h4 className={styles.title}>翻译Masonry瀑布流式布局库</h4>
	       		<p  className={styles.text}>
	       		2016年7月<br />
	       		学习并搭建个人网站的时候查阅了大量的英文资料，Masonry是其中之一，工作之余用了一周时间翻译并在CSDN分享了Masonry网站的内容，希望能为其他的前端初学者提供一点点方便。
						</p>
						<p  className={styles.text}><a href='http://blog.csdn.net/dengkai0608/article/details/52089413'>博客链接</a></p>
	      </Card>
      </Col>

	  </Row>
  );
}

export default CardsGroup;