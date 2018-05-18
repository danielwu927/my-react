import React ,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Layout, Menu, Icon } from 'antd';
import './Home.css';
import { Avatar} from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class MyHome extends React.Component{
  
   render(){
   	return (
   	<div className="layout">
    <Layout style={{height:'100%'}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
      	<div className="logo" style={{height:'100px'}}>
 		    <div className="display" style={{display:'flex',justifyContent:'center',marginTop:10}}>
    		<Avatar style={{ backgroundColor: '#87d068'}} icon="user" size="large"/>
    		</div>
         <div style={{color:'orange' ,textAlign:'center'}}>USER</div>
         <Button type="primary" icon="logout" size="small">退出系统</Button>
      	</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">新闻通知</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">问卷查看</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">数据查询</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="laptop" />
          <span className="nav-text">数据视图</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', height:'100%', minHeight: 520 }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        SmartLab Design ©2018 Powered By 武汉理工大学智能技术实验室
      </Footer>
    </Layout>
  </Layout>
   </div>
   );

}
}
export default MyHome;
