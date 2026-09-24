import React from 'react';

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const steps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the business, audience and objectives.',
  },
  {
    step: '02',
    title: 'Strategize',
    description: 'Create a customized digital strategy.',
  },
  {
    step: '03',
    title: 'Execute',
    description: 'Design, develop and launch the solution.',
  },
  {
    step: '04',
    title: 'Optimize',
    description: 'Measure performance and continuously improve.',
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex bg-[#F6F4FF] text-[#315CF5] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#071B3A] mb-6">
            Simple Process. Powerful Results.
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative p-6 text-center">
              {/* Step Number */}
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#315CF5] to-[#A855F7] bg-clip-text text-transparent mb-4">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#071B3A] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#64748B] text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Connecting line between cards on desktop */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#315CF5] to-[#A855F7]"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
