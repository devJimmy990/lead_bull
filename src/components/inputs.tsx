//#region Imports
import { RcFile } from 'antd/es/upload';
import React, { ChangeEvent } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Input, Upload, Button, Space, Form } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { Rule } from 'antd/es/form';
//#endregion


//#region Type
type InputFieldProps = {
  name: string;
  label: string;
  rules?: Rule[];
  value?: string;
  className?: string;
  placeholder: string;
  hasPrefix?: boolean;
  fullWidth?: boolean;
  isDisabled?: boolean;
  validateTimer?: number;
  prefixIcon?: JSX.Element;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
//#endregion


export const TextInputField: React.FC<InputFieldProps> = ({
  name,
  value,
  label,
  rules,
  onChange,
  className,
  placeholder,
  validateTimer,
  hasPrefix = false,
  isDisabled = false,
  prefixIcon = <UserOutlined />
}) => {
  return (
    <Form.Item
      hasFeedback
      name={name}
      label={label}
      rules={rules}
      layout='vertical'
      className={className}
      validateDebounce={validateTimer ?? 1000}
    >
      <Input
        size="large"
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        placeholder={placeholder}
        prefix={hasPrefix && prefixIcon}
      />
    </Form.Item>
  )
}
export const NumberInputField: React.FC<InputFieldProps> = ({
  name,
  rules,
  value,
  label,
  onChange,
  className,
  placeholder,
  validateTimer,
  hasPrefix = false,
  isDisabled = false,
  prefixIcon = <UserOutlined />
}) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      layout='vertical'
      className={className}
      validateDebounce={validateTimer ?? 1000}
    >

      <Input
        size="large"
        value={value}
        className={className}
        disabled={isDisabled}
        placeholder={placeholder}
        prefix={hasPrefix && prefixIcon}
        onChange={(e) => {
          const re = /^\d+$/;
          console.log(e.target.value);
          if (e.target.value === '' || re.test(e.target.value)) {
            onChange(e);
          }
        }}
      />
    </Form.Item>
  )
}
export const PasswordInputField: React.FC<InputFieldProps> = ({
  rules,
  name,
  value,
  label,
  onChange,
  className,
  placeholder,
  validateTimer,
}) => {

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      layout='vertical'
      className={className}
      validateDebounce={validateTimer ?? 1000}
    >
      <Input.Password
        size='large'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    </Form.Item>
  );
}


type UploadProps = {
  name: string;
  title: string;
  className: string;
  multiple?: boolean;
  maxCount?: number;
  files: RcFile | undefined;
  onChange: (name: string, file?: RcFile) => void
};

export const UploadInputField: React.FC<UploadProps> = ({
  className, title, name, onChange, multiple = false, maxCount = 1//, files
}) => {
  return (
    <Space direction='vertical' className={`d-flex flex-column ${className}`}>
      <label>{title}</label>
      <Upload
        name={name}
        listType="picture"
        multiple={multiple}
        maxCount={maxCount}
        onRemove={() => onChange(name, undefined)}
        onChange={(info) => {
          if (info.fileList.length > 0 && info.file.status !== 'uploading')
            onChange(name, info.file.originFileObj);
        }}
        defaultFileList={[]}
      // fileList={files ? [files] : []}
      >
        <Button className='w-100' >
          <UploadOutlined />
          Upload
        </Button>
      </Upload>
    </Space>

  );
}