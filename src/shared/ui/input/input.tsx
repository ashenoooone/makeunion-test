import React, { memo, useCallback } from 'react';
import clsx from 'clsx';
import cls from './input.module.css';

type InputPropsOmitted = Omit<
  React.ComponentProps<'input'>,
  'value' | 'onChange'
>;

interface InputProps extends InputPropsOmitted {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className = '',
    value,
    onChange,
    ...rest
  } = props;

  const onChangeInputHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    },
    [onChange],
  );

  return (
    <input
      className={clsx(className, cls.input)}
      value={value}
      onChange={onChangeInputHandler}
      {...rest}
    />
  );
});
