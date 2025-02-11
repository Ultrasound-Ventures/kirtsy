// src/pages/Home.tsx
import { FC } from 'react';
import BrandImage from '../assets/BrandImage.jpg';

const Home: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        {/* Hero Content */}
        <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 z-10">
            <h1 className="text-6xl font-bold text-white mb-6">
              Meet Kirsty
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your AI trainer for amazing resistance band workouts anywhere, anytime!
            </p>
            <button className="bg-[#F87171] hover:bg-[#EF4444] text-white px-8 py-3 rounded-md text-lg transition-all">
              Start Training
            </button>
          </div>
          
          {/* Image Container */}
          <div className="flex-1">
            <img 
              src={BrandImage} 
              alt="Fitness trainer"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Kirsty?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Train Anywhere</h3>
              <p className="text-gray-600">All you need is a resistance band and Kirsty's guidance to get started.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">AI-Powered</h3>
              <p className="text-gray-600">Get personalized workouts that adapt to your progress and goals.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Track Progress</h3>
              <p className="text-gray-600">Monitor your improvements and stay motivated with detailed analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;