import React, { FC } from "react";
import "./CardTitle.css";

interface Props {
  // Title 
  title: string
}

export const CardTitle: FC<Props> = ({
  title,
  ...rest
}: Props) => (
  <h2>
    {title}
  </h2>
);

export default CardTitle;

// return (
//     <button
//       className={
//         flat
//           ? cx(styles.flatCardTitle, className)
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
