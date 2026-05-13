import React from 'react';
import SummerCareTipsBoxes from './Summer Care Tips Boxes/SummerCareTipsBoxes';

const SummerCareTips = () => {
    return (
        <div className='max-w-7xl mx-auto my-10 md:my-15'>
              <h3 className='text-3xl font-bold '>
                   Summer Care Tips
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