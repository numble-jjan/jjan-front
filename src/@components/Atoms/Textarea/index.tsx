import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ onChange, ...props }: Props) => {
  return <textarea onChange={onChange} {...props}></textarea>;
};
export default Textarea;
