import React, { useState } from "react";
import { Form, Input, Button, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import RichTextEditor from "@/components/richTextEditor/index";

import writeStyle from './write.module.less';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('只能上传JPG、PNG格式文件!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片必须小于2M!');
  }
  return isJpgOrPng && isLt2M;
};

const Write = () => {
  const [titleValue, setTitleValue] = useState('');
  const [editValue, setEditValue] = useState('');

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleContentChange = val => {
    setEditValue(val);
    console.log("=== editValue: ", editValue);
  }

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const onFinish = () => {
    console.log("== titleValue: ", titleValue);
    console.log("== editValue: ", editValue);
    console.log("== imageUrl: ", imageUrl);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <main className="app-main">
      <div className={ writeStyle['write-wrap'] }>
        <Input className={writeStyle.title} value={titleValue} onChange={e => setTitleValue(e.target.value.trim())} placeholder="请输入标题（最多100个字）" />
        
        <div className={writeStyle.editor}>
          <RichTextEditor value={editValue} style={{ width: '100%', height: '500px' }} handleContentChange={handleContentChange} />
        </div>

        <Form
          name="basic"
          labelCol={{style: { width: '120px' }}}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="添加封面"
            name="username"
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  )
}

export default Write;