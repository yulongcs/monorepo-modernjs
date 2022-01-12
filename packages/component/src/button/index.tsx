import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

export type ButtonProps = AntButtonProps;

export const Button: React.FC = (props: ButtonProps) => (
  <AntButton {...props} />
);
