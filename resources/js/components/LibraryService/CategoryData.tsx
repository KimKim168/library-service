import useTranslation from '@/hooks/use-translation';

import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

const dataBase = [
    {
        title: 'Video',
        title_kh: 'និក្ខេបបទ',
        image: 'video.webp',
        link: '#',
    },
    {
        title: 'Video',
        title_kh: 'និក្ខេបបទ',
        image: 'video.webp',
        link: '#',
    },
    {
        title: 'Video',
        title_kh: 'និក្ខេបបទ',
        image: 'video.webp',
        link: '#',
    },
    {
        title: 'Video',
        title_kh: 'និក្ខេបបទ',
        image: 'video.webp',
        link: '#',
    },
    {
        title: 'Video',
        title_kh: 'និក្ខេបបទ',
        image: 'video.webp',
        link: '#',
    },
    {
        title: 'Video',
        title_kh: 'និក្ខេបបទ',
        image: 'video.webp',
        link: '#',
    },
];
const tableData = {
    data: [
        {
            id: 1,
            name: 'Introduction to Reading',
            name_kh: 'ការណែនាំអំពីការអាន',
            short_description: 'Basic techniques to improve reading skills.',
            short_description_kh: 'បច្ចេកទេសមូលដ្ឋានសម្រាប់បង្កើនជំនាញអាន។',
            link: '#',
            images: [{ image: 'video.webp' }],
        },
        {
            id: 2,
            name: 'Digital Library Guide',
            name_kh: 'មគ្គុទេសក៍បណ្ណាល័យឌីជីថល',
            short_description: 'How to use online library resources.',
            short_description_kh: 'របៀបប្រើធនធានបណ្ណាល័យតាមអ៊ីនធឺណិត។',
            link: '#',
            images: [{ image: 'video.webp' }],
        },
        {
            id: 3,
            name: 'Research Methods',
            name_kh: 'វិធីសាស្ត្រស្រាវជ្រាវ',
            short_description: 'Essential research methods for students.',
            short_description_kh: 'វិធីសាស្ត្រស្រាវជ្រាវចាំបាច់សម្រាប់និស្សិត។',
            link: '#',
            images: [{ image: 'video.webp' }],
        },
        {
            id: 4,
            name: 'Academic Writing',
            name_kh: 'ការសរសេរអប់រំ',
            short_description: 'Learn how to write academic papers.',
            short_description_kh: 'រៀនរបៀបសរសេរការងារអប់រំ។',
            link: '#',
            images: [{ image: 'video.webp' }],
        },
    ],
};

const CategoryData = () => {
    const { t, currentLocale } = useTranslation();

    return (
        <div className="mx-auto mt-26 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
                <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Our Categories</h2>
                <p className={`mx-auto mt-2 max-w-5xl text-center text-gray-500 dark:text-gray-300`}>
                    Our library offers specialized databases with searchable digital academic content in text, audio, and journals—supporting
                    research, teaching, publishing, and self-study with fast, reliable access to high-quality resources.
                </p>
            </div>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {tableData.data.map((item) => (
                    <a
                        key={item.id}
                        href={`/videos/${item.id}`}
                        className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow transition duration-300 hover:shadow-lg dark:bg-gray-800"
                        aria-label={`Read more about ${currentLocale === 'kh' ? (item.name_kh ?? item.name) : item.name}`}
                    >
                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden rounded-t-xl bg-gray-100 dark:bg-gray-700">
                            <img
                                src={`/assets/${item.images?.[0]?.image ?? 'placeholder.jpg'}`}
                                alt={currentLocale === 'kh' ? (item.name_kh ?? item.name) : item.name}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent p-4 sm:opacity-0 sm:group-hover:opacity-100">
                                <span className="rounded-full bg-white px-5 py-1.5 text-xs font-semibold text-blue-600 shadow-sm">{t('View')}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className={`flex flex-col gap-2 px-4 py-4`}>
                            <h3 className="line-clamp-2 text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                                {currentLocale === 'kh' ? (item.name_kh ?? item.name) : item.name}
                            </h3>
                            <p className="line-clamp-2 text-xs md:text-sm text-gray-700 dark:text-gray-300">
                                {currentLocale === 'kh' ? (item.short_description_kh ?? item.short_description) : item.short_description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
            {/* <Carousel opts={{ align: 'start' }} className="w-full mt-10">
                <CarouselContent className="p-2">
                    {dataBase.map((item, index) => (
                        <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                            <a href={`/videos/1`} rel="noopener noreferrer">
                                <Card className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded border border-dashed border-primary bg-background px-1 py-4 transition-all duration-300 hover:-translate-2 hover:border-solid hover:shadow-[5px_5px_rgba(104,_96,_255,_0.4),_10px_10px_rgba(104,_96,_255,_0.3),_15px_15px_rgba(104,_96,_255,_0.2)]">
                                    <CardContent className="flex flex-col items-center justify-center">
                                        <img
                                            src={`/assets/${item.image}`}
                                            className="mb-2 h-[50px] w-[50px] object-contain md:h-[60px] md:w-[60px]"
                                            alt={item.title}
                                        />
                                        <p className={`text-center text-sm font-bold whitespace-nowrap lg:text-lg`}>
                                            {currentLocale === 'kh' ? (item.title_kh ?? item.title) : item.title}
                                        </p>
                                    </CardContent>
                                </Card>
                            </a>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className={`${dataBase.length <= 5 ? 'lg:hidden' : ''}`}>
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel> */}
        </div>
    );
};

export default CategoryData;
