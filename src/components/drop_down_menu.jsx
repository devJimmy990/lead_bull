import { Col, Select } from 'antd';

export default function DropDowmMenu({
  title,
  value,
  onSelect,
  className,
  placeholder,
  options,
  hasSearch = false,
}) {
  return (
    <Col className={className}>
      {title && <label>{title}</label>}
      <div>
        <Select
          size='large'
          value={value}
          className="w-100"
          options={options}
          onSelect={onSelect}
          showSearch={hasSearch}
          placeholder={placeholder}
          style={{ width: 200, cursor: 'pointer' }} // Added width to make dropdown wider
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
        />
      </div>
    </Col>
  );
}