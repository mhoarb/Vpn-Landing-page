import { Parallax } from 'react-scroll-parallax'

const About2 = () => {
  return (
    <div className='bg-[#0b0b0b] relative py-28'>
      <div className='flex items-center justify-evenly'>
        <Parallax
          translateX={['100px', '-50px']}
          translateY={['0px', '50px']}
          scale={[0.75, 1]}
          easing="easeInQuad"
        >
          <div>
            <img src="./images/rocket.webp" alt="rocket" className='w-44' />
          </div>
        </Parallax>
        <div className='max-w-lg text-center flex items-center justify-center flex-col gap-5'>
          <img src="./images/wave-pattern.webp" className='h-7' alt="wave" />
          <h3 className='text-5xl  font-medium'>
            <span className='text-purple-500'>We</span> are Launching our June Challenge
          </h3>
          <p className='text-gray-500 mt-3'>
            AngelFace, a combination of words AngelHack and Interface, is our submitted solution for AngelHack June Monthly Challenge. AngelFace is a beautiful web3 interface built on React - Vite
          </p>

          <button className='bg-purple-600 hover:bg-purple-700 font-medium px-10 py-3 rounded-xl mt-6'>Explore 😎</button>
        </div>
        <Parallax
          translateX={['-100px', '0px']}
          translateY={['0px', '50px']}
          scale={[0.75, 1]}
          easing="easeInQuad"
        >
        <div>
          <img className='w-44 -rotate-90' src="https://wordpress.iqonic.design/product/wp/ealain/wp-content/uploads/2022/07/shooting-star.webp" alt="meteor" />
        </div>
        </Parallax>
      </div>
    </div>
  )
}

export default About2