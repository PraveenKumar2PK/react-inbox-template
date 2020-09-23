import React, { useState, useCallback } from 'react';
import { Button, Drawer, Typography, Select } from 'antd';
import EditableTable from './EditableTable';
import { MenuOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;
const PortalPage = () => {
  const [isFilterDisplay, setFilterDisplay] = useState(false);
  const onClose = useCallback(() => {
    setFilterDisplay(false);
  },[]);
  const showMenu = useCallback(() => {
    setFilterDisplay(true);
  },[]);
  return (
    <div>
      <div style={{backgroundColor: '#1890ff', display: 'flex'}}>
        <div style={{color: '#f8f8f8', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 16, cursor: 'pointer'}}>
          <Button type="primary" onClick={showMenu}>
            <MenuOutlined />
          </Button>
        </div>
        <Title style={{color: '#f8f8f8', paddingTop: 8, paddingLeft: 16}} level={3}>Voter List</Title>
      </div>
      <div style={{ padding: '16px'}}>
        <EditableTable />
        <Drawer
            title={<Title level={5}>Filter</Title>}
            placement='left'
            closable={false}
            onClose={onClose}
            visible={isFilterDisplay}
            key='left'
          >
            <div>
              <Title level={4}>State</Title>
              <Select defaultValue="tamilnadu" style={{ width: 120 }}>
                <Option value="tamilnadu">TamilNadu</Option>
                <Option value="kerala">Kerala</Option>
              </Select>
            </div>
            <div style={{paddingTop: 16}}>
              <Title level={4}>District</Title>
              <Select defaultValue="chennai" style={{ width: 120 }}>
                <Option value="chennai">Chennai</Option>
                <Option value="madurai">Madurai</Option>
                <Option value="salem">Salem</Option>
              </Select>
            </div>
            <div style={{paddingTop: 16}}>
              <Title level={4}>Booth</Title>
              <Select defaultValue="booth1" style={{ width: 120 }}>
                <Option value="booth1">Booth 1</Option>
                <Option value="booth2">Booth 2</Option>
              </Select>
            </div>
          </Drawer>
      </div>
    </div>
  );
};

export default PortalPage;