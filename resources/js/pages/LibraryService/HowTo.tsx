import BuddhistCardHoverGradient from '@/components/Card/BuddhistCardHoverGradient';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import LibraryServiceLayout from './LibraryServiceLayout';

const HowTo = () => {
    const { categoryWithPostsData, header } = usePage<any>().props;
    const { currentLocale } = useTranslation();

    return (
        <LibraryServiceLayout>
          <div className="mx-auto mt-26 max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-4">
                <h2 className="text-start text-3xl font-bold text-gray-900 sm:text-4xl">
                    {header?.name}
                </h2>
                <div className="mt-2 max-w-5xl text-lg text-start text-gray-500 dark:text-gray-300" dangerouslySetInnerHTML={{__html:header?.short_description}}/>
            </div>
            <div className=" space-y-6 py-4">
                {categoryWithPostsData?.map((section: any) => (
                    <div key={section.id} className="space-y-4 rounded-2xl bg-background ">
                        {/* Section Header */}
                        <div className="flex items-center justify-between ">
                            <h1 className="text-xl font-bold text-primary dark:text-white">
                                {currentLocale === 'kh' ? section?.name_kh || section?.name : section?.name}
                            </h1>
                        </div>

                        {/* Videos Grid */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {section?.videos?.map((video: any) => (
                                <BuddhistCardHoverGradient key={video.id} item={video} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </LibraryServiceLayout>
    );
};

export default HowTo;
