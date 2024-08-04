import { FC } from 'react';

import { Tag, TagProps } from 'antd';

interface ChipProps extends TagProps {
	onClick?: () => void;
	text: string;
}

const Chip: FC<ChipProps> = ({ color, onClick = () => {}, text }) => (
	<Tag onClick={onClick} color={color}>
		{text}
	</Tag>
);

export default Chip;
