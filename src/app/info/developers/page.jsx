'use client'
// components
import DevelopersSlider from '@/components/DevelopersSlider'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../../../variants'

export const metadata = {
  title: 'Troca Fácil | Desenvolvedores',
  description: 'Desenvolvedores',
  OpenGraph: {
    title: 'Troca Fácil | Desenvolvedores',
    description: 'Desenvolvedores', 
  }
}

export default function Developers() {
  return (
    <div className='h-full bg-secondary/20 py-32 text-center'>
      <div className='container mx-auto h-full flex flex-col justify-center'>
        {/* title */}
        <motion.h2 
          variants={fadeIn('up', 0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden' 
          className='h2 mb-8 xl:mb-0 max-sm:text-[30px] nova-slim'
        >
          The <span className='text-accent'>developers.</span> 
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className='xl:w-10/12 xl:m-auto'
        >
          <DevelopersSlider />
        </motion.div>
      </div>
    </div>
  )
};
