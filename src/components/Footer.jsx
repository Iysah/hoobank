import React from 'react';

import { logo } from '../assets'
import { footerLinks } from '../constants';
import styles from '../styles';

const Footer = () => {
  return (
    <section className={` ${styles.flexCenter} ${styles.marginX} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="Hoobank"className='w-[266px] h-[72px] object-contain' />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-semibold text-[18px] text-white leading-[32px] '>{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins font-normal text-[16px] text-dimWhite leading-[24px] hover:text-secondary cursor-pointer`}>{link.name}</li> ))
                }
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer