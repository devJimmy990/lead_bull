// import * as React from 'react';
// import { JSX } from 'react/jsx-runtime';

// type SnackbarProps = {
//     message: string,
//     isLong: boolean,
//     position?: {
//         vertical: 'top' | 'bottom',
//         horizontal: 'left' | 'center' | 'right'
//     }
// }

// function SlideTransition(props: JSX.IntrinsicAttributes & SlideProps) {
//     return <Slide {...props} direction="up" />;
// }

// export const SimpleSnackbar: React.FC<SnackbarProps> = (
//     { message = "Welcome to Snackbar Message", isLong = false, position = { vertical: 'top', horizontal: 'right' } }
// ) => {

//     return (
//         <div>
//             <Snackbar
//                 open={true}
//                 anchorOrigin={position}
//                 message={message}
//                 autoHideDuration={isLong ? 6000 : 2000}
//                 TransitionComponent={SlideTransition}
//             />
//         </div>
//     );
// }
