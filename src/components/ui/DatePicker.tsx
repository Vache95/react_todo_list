import { FC } from 'react';

import { DatePicker as AntDatePicker, DatePickerProps as AntDatePickerProps } from 'antd';

interface DatePickerProps extends AntDatePickerProps {}

const DatePicker: FC<DatePickerProps> = ({ value, className, onChange = () => {}, ...rest }) => (
	<AntDatePicker {...rest} value={value} onChange={onChange} className={className} />
);

export default DatePicker;
