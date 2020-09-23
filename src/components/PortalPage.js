import React from 'react';
import { Typography } from 'antd';
import EditableTable from './EditableTable';

const { Title } = Typography;
const PortalPage = () => {
  return (
    <div style={{ padding: '16px'}}>
      <Title level={3}>Election commission</Title>
      <EditableTable />
    </div>
  );
};

export default PortalPage;