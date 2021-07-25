import { Button, Checkbox, Popover, Space } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import Title from 'antd/lib/typography/Title';
import moment, { Moment } from 'moment';
import { useSetRecoilState } from 'recoil';
import { filtersState } from '../../state/atoms';
import { Severities, SeveritiesEnum } from '../../constants';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

interface FiltersContentProps {
  onClose: () => void;
}

const FiltersContent = ({ onClose }: FiltersContentProps) => {
  const setFilters = useSetRecoilState(filtersState);
  const [dateRangeFilter, setDateRangeFilter] = useState<[Moment, Moment]>();
  const [severities, setSeverities] = useState<SeveritiesEnum[]>();

  const handleDateRangeChange = (_: any, dateStrings: [string, string]) => {
    setDateRangeFilter([moment(dateStrings[0]), moment(dateStrings[1])]);
  };

  const handleSeverityChange = (severities: CheckboxValueType[]) => {
    setSeverities(severities as SeveritiesEnum[]);
  };

  const applyFilters = () => {
    setFilters({
      timeFrom: dateRangeFilter && moment(dateRangeFilter[0]).valueOf(),
      timeTo: dateRangeFilter && moment(dateRangeFilter[1]).valueOf(),
      severities,
    });
    onClose();
  };

  const clearFilters = () => {
    setFilters(undefined);
    setDateRangeFilter(undefined);
    setSeverities(undefined);
    onClose();
  };

  return (
    <Space direction="vertical" size={12}>
      <Title level={2}>Time</Title>
      <DatePicker.RangePicker
        showTime
        value={dateRangeFilter}
        onChange={handleDateRangeChange}
      />
      <Title level={2}>Severity</Title>
      <Checkbox.Group
        options={Severities}
        onChange={handleSeverityChange}
        value={severities}
      />
      <FullWidthButton type="primary" onClick={applyFilters}>
        APPLY
      </FullWidthButton>
      <FullWidthButton onClick={clearFilters}>Clear</FullWidthButton>
    </Space>
  );
};

export const Filters = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <Popover
      content={<FiltersContent onClose={hide} />}
      placement="bottomLeft"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <FullWidthButton>FEED FILTERS</FullWidthButton>
    </Popover>
  );
};
