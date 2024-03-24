import { Parallax } from 'react-scroll-parallax'

const RoadMap = () => {
    return (
        <div className='py-16'>
            <img style={{
                filter: 'invert(0.2)'
            }} src="./images/wave.webp" alt="wave" className='lg:h-26 md:h-20 h-16' />
           <Parallax speed={-10}>
             <div className='flex items-center justify-center text-center gap-3 flex-col mb-16'>
                <img src="./images/wave-pattern.webp" className='h-7' alt="wave" />
                <p className='text-4xl font-medium'>June <span className='text-purple-500'>Submission</span></p>
            </div>
           </Parallax>

            <div className='flex flex-wrap px-10 justify-evenly gap-10 gap-y-20 items-center py-18'>
                <Step1 />
                <Step2 />
                <Step3 />
            </div>
        </div>
    )
}

function Step1() {
    return (
        <div>
            <img src="./images/fwd-2.png" alt="fwd" className='mb-3'/>
            <img className='w-36' src="https://wordpress.iqonic.design/product/wp/ealain/wp-content/uploads/2022/07/Group-3.webp" alt="step" />
            <p className='text-purple-500 mt-3'>Completed</p>
            <h3 className='text-3xl font-semibold my-4 mt-2'>React Interface</h3>
            <div className='flex flex-col gap-3'>
                <p>
                    ✨ Vite React Interface
                </p>
                <p>
                    ✨ Cool Animations
                </p>
                <p>
                    ✨ Framer Motion
                </p>
                <p>
                    ✨ Figma Design.
                </p>
            </div>
        </div>
    )
}

function Step2() {
    return (
        <div>
            <img className='w-36' src="https://wordpress.iqonic.design/product/wp/ealain/wp-content/uploads/2022/07/Group-6.webp" alt="step" />
            <p className='text-purple-500 mt-3'>Completed</p>
            <h3 className='text-3xl font-semibold my-4 mt-2'>Web3 Interface</h3>
            <div className='flex flex-col gap-3'>
                <p>
                    ✨ Connect Wallet
                </p>
                <p>
                    ✨ Thirdweb SDK
                </p>
                <p>
                    ✨ NFT Gating
                </p>
                <p>
                    ✨ Wallet SDK.
                </p>
            </div>
             <img src="./images/fwd-1.png" alt="fwd" className='mt-5'/>
        </div>
    )
}

function Step3() {
    return (
        <div>
            <img src="./images/fwd-2.png" alt="fwd" className='mb-3'/>
            <img className='w-36' src="https://wordpress.iqonic.design/product/wp/ealain/wp-content/uploads/2022/07/Group-5.webp" alt="step" />
            <p className='text-purple-500 mt-3'>Completed</p>
            <h3 className='text-3xl font-semibold my-4 mt-2'>Accomplishment</h3>
            <div className='flex flex-col gap-3'>
                <p>
                    ✨ NFT Gated Website
                </p>
                <p>
                    ✨ Wallet Integration
                </p>
                <p>
                    ✨ Cool Animations
                </p>
                <p>
                    ✨ Build on Time.
                </p>
            </div>
        </div>
    )
}


export default RoadMap