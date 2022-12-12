import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
const signUpModal = document.querySelector('#signup-root');

export const SignUp = () => {
  return createPortal(
    <motion.div
      style={{ translateX: '-50%', translateY: '-50%' }}
      className="signUpModal"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <h1>This is SignUP</h1>
    </motion.div>,
    signUpModal
  );
};
