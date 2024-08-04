import { FC, ReactNode } from 'react';

import { Input, InputProps } from 'antd';

interface TextInputProps extends InputProps {
	label?: string;
	children?: ReactNode;
}

const TextInput: FC<TextInputProps> = ({ label, className, onChange = () => null, children, ...rest }) => (
	<label className={className}>
		{label && <span>{label}</span>}
		<Input onChange={onChange} {...rest} />
		{children}
	</label>
);

export default TextInput;
