import React, { FC } from "react";
import cx from "classnames";
import "./Button.css";

interface Props {
  /** Button label */
  label: string;
  /** Primary button styling */
  primary?: boolean;
  /** Danger button styling (red button) */
  danger?: boolean;
  /** Not clickable button */
  disabled?: boolean;
  /** Is it a submit button? */
  submit?: boolean;
}

export const Button: FC<Props> = ({
  label,
  primary,
  danger,
  disabled,
  submit,
  ...rest
}: Props) => (
  <button
    className={`Button ${
      danger ? `warning` : disabled ? `disabled` : `normal`
    }`}
  >
    {label}
  </button>
);

export default Button;

// return (
//     <button
//       className={
//         flat
//           ? cx(styles.flatButton, className)
//           : cx(styles.button, styles[size], dark && styles.dark, className)
//       }
//       type={submit ? 'submit' : 'button'}
//       {...rest}
//     >
//       <LoadingIndicator small margin={0} loading={pending} />
//       {pending && <span className={styles.loading}>Laster</span>}
//       {!pending && children}
//     </button>
//   );
