import { Select } from 'antd';
import { useRecoilState } from 'recoil';
import { activeFacilityIdState } from '../../state/atoms';

export const facilities = [
  'FACILITY#1',
  'FACILITY#2',
  'FACILITY#3',
  'FACILITY#4',
  'FACILITY#5',
  'FACILITY#6',
  'FACILITY#7',
];

export const FacilitySelect = () => {
  const [selectedFacility, setSelectedFacility] = useRecoilState<string>(
    activeFacilityIdState,
  );

  function handleChange(value: string) {
    setSelectedFacility(value);
  }

  return (
    <Select
      showSearch
      style={{ width: '100%' }}
      placeholder="Select Facility"
      onChange={handleChange}
      value={selectedFacility}
    >
      {facilities.map((facility, id) => (
        <Select.Option key={id} value={facility}>
          {facility}
        </Select.Option>
      ))}
    </Select>
  );
};
