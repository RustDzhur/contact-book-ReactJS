import { motion } from 'framer-motion';

export const MotionAnimation = ({children}) => {
    return (
        <motion.div
        style={{ translateX: '-50%', translateY: '-50%' }}
        className="signInModal"
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
      >{children}</motion.div>
    )
}