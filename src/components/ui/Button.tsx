import { FC, ReactNode } from 'react';

import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

export interface ButtonProps extends Omit<AntButtonProps, 'type'> {
	children: ReactNode;
	loading?: boolean;
	variant?: 'link' | 'text' | 'primary' | 'default' | 'dashed' | undefined;
	type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button: FC<ButtonProps> = ({
	children,
	loading = false,
	disabled = false,
	className,
	variant,
	type,
	...rest
}) => (
	<AntButton htmlType={type} type={variant} disabled={disabled || loading} className={className} {...rest}>
		{children}
	</AntButton>
);

export default Button;
