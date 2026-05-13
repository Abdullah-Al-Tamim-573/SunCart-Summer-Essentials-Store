import React from 'react';
import SummerCareTipsBoxes from './Summer Care Tips Boxes/SummerCareTipsBoxes';
import Image from 'next/image';

const SummerCareTips = () => {
    return (
        <div className=''>
              <h3 className='text-3xl font-bold flex justify-center items-center gap-2'>
                <Image width={70} height={50} alt="summer care img" src={'/Images/summer care tips image/summer-care-img.png'}></Image>
                     <span>Summer Care Tips</span>
              </h3>
              <p className='text-[1rem] font-medium mt-1'>
                  Simple habits for a healthy & happy summer!
              </p>

              <div className='my-15'>
                    <SummerCareTipsBoxes></SummerCareTipsBoxes>
              </div>
        </div>
    );
};

export default SummerCareTips;