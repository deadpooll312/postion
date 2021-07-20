import React from 'react';

import { Layout, Menu } from 'antd';
import HeaderNav from '../../components/HeaderNav';

const { Sider, Content, Header } = Layout;

function ContentLayout(props) {
  const { isAuthenticated } = props;
  console.log('isAuthenticated', isAuthenticated);
  if (!isAuthenticated) {
    return (
      <>
        {/* {isLoading && <Loader />} */}
        {props.children}
      </>
    );
  }

  return (
    <>
      <Layout style={{ height: '100vh' }}>
        {/* <Sider
          style={{ minWidth: '250px' }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className='logo' />
          <Aside />
        </Sider> */}
        <Layout className='site-layout'>
          <HeaderNav />
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflowY: 'scroll',
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default ContentLayout;
