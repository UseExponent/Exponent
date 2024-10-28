import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useOutlet, ScrollRestoration } from 'react-router-dom'
import Footermenu from '../../components/Footermenu'

export default function DefaultLayout() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <>
      <Footermenu />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: 'absolute' }}
          transition={{ duration: 0.3 }}>
          {outlet}
        </motion.div>
      </AnimatePresence>
      <ScrollRestoration />
    </>
  )
}