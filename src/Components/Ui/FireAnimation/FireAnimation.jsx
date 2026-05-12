'use client'
import { fetchFireAnimation } from '@/Fetch Apis/FetchApis';
import Lottie from 'lottie-react';
import React from 'react';

const FireAnimationPage = () => {
    let fireAnimation = fetchFireAnimation();
    return (
        <div className="w-8">
      <Lottie animationData={fireAnimation} loop={true} />
    </div>
    );
};

export default FireAnimationPage;