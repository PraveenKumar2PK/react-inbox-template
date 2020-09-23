import React, { useState, useCallback, useRef } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Space, Drawer, Typography} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import modalData from '../modelData.json';
const originData = [];
const {Title} = Typography;

modalData.data.forEach((data, index) =>{
    originData.push({
        key: index,
        ...data
    });
});

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [loading, setLoading] = useState(false);
  const [editingKey, setEditingKey] = useState('');
  const [searchData, setSearchData] = useState({
    searchText: '',
    searchedColumn: ''
  });
  const [isEditDisplay, setIsEditDisplay] = useState(false);
  const searchInput = useRef(null);
  const [selectedName, setSelectedName] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    // form.setFieldsValue({
    //   name: '',
    //   age: '',
    //   address: '',
    //   ...record,
    // });
    // setEditingKey(record.key);
    setSelectedName(record.name);
    setIsEditDisplay(true);
  };
  const onClose = useCallback(() => {
    setIsEditDisplay(false);
  },[]);

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => {
          if(searchInput?.current) {
            searchInput.current.select()
          }
        }, 100);
      }
    },
    render: text => text
  });

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
      sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        width: '15%',
        editable: true,
        filters: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' },
        ],
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '40%',
      editable: true,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      width: '10%',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </a>
        );
      },
    },
  ];

  const handleTableChange = useCallback((pagination, filters, sorter) => {
    const filterKeys = Object.keys(filters);
    let filteredData = [...originData];
    if (filterKeys.includes('gender')) {
      const selectedGenders = filters['gender'];
      if (selectedGenders?.length) {
        filteredData = filteredData.filter(data=>selectedGenders.includes(data.gender.toLocaleLowerCase()));
      }
    }
    setData(filteredData);
  }, []);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchData({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchData({ searchText: '' });
  };
  
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <div>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
          scroll={{ x: 1000, y: 450 }}
          loading={loading}
          onChange={handleTableChange}
        />
      </Form>
      <Drawer
          title={<Title level={5}>Edit</Title>}
          placement='right'
          closable={false}
          onClose={onClose}
          visible={isEditDisplay}
          key='right'
          width={520}
        >
          <div>
            <Title level={5}>Name:</Title>
            <Input value={selectedName} />
          </div>
          <div style={{ paddingTop: 16}}>
            <Title level={5}>Phone Number:</Title>
            <Input />
          </div>
          <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: 24}}>
            <Button type="primary">Save</Button>
            <Button>Cancel</Button>
          </div>
        </Drawer>
    </div>
  );
};

export default EditableTable;