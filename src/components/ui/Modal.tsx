import Button, { ButtonProps } from './Button';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';

export type ModalButtonProps = Omit<ButtonProps, 'children'> & { text: string };

interface ModalProps extends AntModalProps {
	isModalOpen: boolean;
	buttons: ModalButtonProps[];
}

const Modal: React.FC<ModalProps> = ({ isModalOpen, children, buttons, ...rest }) => (
	<AntModal
		open={isModalOpen}
		footer={buttons.map(({ text, ...buttonProps }, index) => (
			<Button key={index} {...buttonProps}>
				{text}
			</Button>
		))}
		{...rest}
	>
		{children}
	</AntModal>
);

export default Modal;
