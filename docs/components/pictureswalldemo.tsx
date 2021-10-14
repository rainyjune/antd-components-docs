import React from 'react';
import { Form, Button } from 'antd';
import { PicturesWall } from '@rainyjune/antd-components';
import 'antd/dist/antd.css'

export const Demo1 = (props) => {
  return (
    <PicturesWall
      upload={{
        action: "https://api.cloudinary.com/v1_1/demo/upload",
        data: {
          upload_preset: "doc_codepen_example",
          tags: "browser_upload",
        },
      }}
    />
  );
}

export const Demo2 = (props) => {
  return (
    <PicturesWall
      upload={{
        action: "https://api.cloudinary.com/v1_1/demo/upload",
        data: {
          upload_preset: "doc_codepen_example",
          tags: "browser_upload",
        },
        onChange: (info) => {
          console.log("onChange:", info);
        },
        onFileListReady: (fileList) => {
          console.log(`valid files:`, fileList);
        },
        maxCount: 2,
      }}
    />
  );
}

export function Demo3(props) {
  const [form] = Form.useForm();

  const onFormFinish = (values) => {
    console.log("Success:", values);
  };
  const onFormFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFormFinish}
      onFinishFailed={onFormFinishFailed}
    >
      <Form.Item
        label="Pictures"
        name="pictures"
        rules={[{ required: true, message: "Please upload your pictures" }]}
      >
        <PicturesWall
          upload={{
            action: "https://api.cloudinary.com/v1_1/demo/upload",
            data: {
              upload_preset: "doc_codepen_example",
              tags: "browser_upload",
            },
            onFileListReady: (fileList) => {
              // use form.setFieldsValue to update field value
              form.setFieldsValue({
                pictures: fileList,
              });
            },
          }}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export function Demo4(props: any) {
  const [form] = Form.useForm();
  const onFormFinish = (values: any) => {
    console.log("Success:", values);
  };
  const onFormFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFormFinish}
      onFinishFailed={onFormFinishFailed}
    >
      <Form.Item
        label="Pictures"
        name="pictures"
        rules={[{ required: true, message: "Please upload your pictures" }]}
      >
        <PicturesWall
          upload={{
            action: "https://api.cloudinary.com/v1_1/demo/upload",
            data: {
              upload_preset: "doc_codepen_example",
              tags: "browser_upload",
            },
            fileList: [
              {
                uid: "-1",
                name: "image.png",
                status: "done",
                url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
              },
            ],
            onFileListReady: (fileList: any) => {
              // use form.setFieldsValue to update field value
              form.setFieldsValue({
                pictures: fileList,
              });
            },
          }}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}