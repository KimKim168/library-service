import { Link } from '@inertiajs/react';
import React from 'react';

const ContentAndResource = () => {
  const resources = [
    {
      id: 1,
      title: 'Research Guide: Humanities',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
      long_description:
        'This humanities research guide provides access to scholarly resources in history, philosophy, literature, and cultural studies. It helps students and researchers find reliable references, journals, and primary sources for academic research.',
    },
    {
      id: 2,
      title: 'Science & Technology Resources',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      long_description:
        'A comprehensive collection of science and technology materials including journals, databases, and technical reports. Suitable for research in physics, chemistry, biology, engineering, and modern technologies.',
    },
    {
      id: 3,
      title: 'Business & Economics Reference',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
      long_description:
        'This guide focuses on business and economics topics such as finance, management, marketing, and global trade. It supports data analysis, case studies, and economic research.',
    },
    {
      id: 4,
      title: 'Medical & Health Information',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      long_description:
        'Provides trusted medical and health-related information including clinical research, public health data, and evidence-based medical resources for students and professionals.',
    },
    {
      id: 5,
      title: 'Education & Teaching Materials',
      image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d',
      long_description:
        'Includes teaching resources, lesson plans, educational research, and digital learning tools to support educators and students in effective teaching and learning.',
    },
    {
      id: 6,
      title: 'Law & Legal Research Guides',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216',
      long_description:
        'Designed for legal research, this guide covers laws, regulations, case studies, and legal journals to support law students and legal professionals.',
    },
    {
      id: 7,
      title: 'History & Cultural Studies',
      image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d',
      long_description:
        'Explores historical records and cultural studies materials, helping researchers understand historical events, traditions, and social developments.',
    },
    {
      id: 8,
      title: 'Engineering & Technical Manuals',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
      long_description:
        'Offers engineering manuals, standards, and technical documentation to assist students and professionals in design, analysis, and problem-solving.',
    },
    {
      id: 9,
      title: 'Research Guide: Humanities',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
      long_description:
        'This humanities research guide provides access to scholarly resources in history, philosophy, literature, and cultural studies. It helps students and researchers find reliable references, journals, and primary sources for academic research.',
    },
    {
      id: 10,
      title: 'Science & Technology Resources',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      long_description:
        'A comprehensive collection of science and technology materials including journals, databases, and technical reports. Suitable for research in physics, chemistry, biology, engineering, and modern technologies.',
    },
  ];

  return (
    <section id='resources' className="py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
          Reference Resources & Guides
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {resources.map((resource) => (
            <Link
             href={`/detail/${resource?.id}`}
              key={resource.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="relative bg-gray-200 aspect-video flex items-center justify-center">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {resource.long_description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentAndResource;
