import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload

// import React from 'react'
// import './AppDownload.css'
// import { assets } from '../../assets/assets'
// const AppDownload = () => {
//   return (
//     <div className='app-download' id='app-download'>
//       {/* <p>For Better Experience Download <br /> Tomato App</p>
//         <div className="app-download-platforms">
//             <img src={assets.play_store} alt="" />
//             <img src={assets.app_store} alt="" />
//         </div> */}
//       <div className="app-download-image">
//         <img src={assets.tomato_mobile_image} alt="" />
//       </div>
//       <div className="app-download-content">
//         <h2>Get the Tomato app</h2>
//         <p class="app-download-content-para">We will send you a link, open it on your phone to download the app</p>
//         <div className="app-download-contact">
//           <section name='radio' selected className='app-download-email-phone'>

//             <section className='app-download-email'>
//               <label htmlFor="app-download-email-selected">
//                 <input name='radio' label='Email' type='radio' className='app-download-email-input' checked value='email' />
//                 <svg className='app-download-email-icon' viewBox='0 0 20 20'>
//                   <circle cx="10" cy="10" r="8" name="radio" value="email" label="Email" checked="" class="app-download-email-icon-circle"></circle>
//                 </svg>
//               </label>
//             </section>

//             <section className='app-download-phone'>
//               <label htmlFor="app-download-phone-selected">
//                 <input name='radio' label='phone' type='radio' className='app-download-phone-input' checked value='phone' />
//                 <svg className='app-download-phone-icon' viewBox='0 0 20 20'>
//                   <circle cx="10" cy="10" r="8" name="radio" value="phone" label="Phone" checked="" class="app-download-phone-icon-circle"></circle>
//                 </svg>
//               </label>
//             </section>

//           </section>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AppDownload