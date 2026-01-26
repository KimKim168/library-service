import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const ContentAndResource = () => {
 
  const {allResoures, videoHeaderBottom} = usePage<any>().props;
  return (
    <section id='resources' className="py-14 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
          {videoHeaderBottom?.name}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allResoures?.map((resource) => (
            <Link
             href={`/detail/${resource?.id}`}
              key={resource?.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100"
            >
              <div className="relative bg-gray-200 aspect-video flex items-center justify-center">
                <img
                  src={`/assets/images/posts/${resource?.thumbnail}`}
                  alt={resource?.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {resource?.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {resource?.short_description}
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
