import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import useTranslation from '@/hooks/use-translation';
import { Link } from '@inertiajs/react';
import LibraryServiceLayout from './LibraryServiceLayout';

const Detail = () => {
    const relatedPosts = [
        {
            id: 2,
            name: 'Digital Library Guide',
            name_kh: 'មគ្គុទេសក៍បណ្ណាល័យឌីជីថល',
            short_description: 'How to use online library resources.',
            short_description_kh: 'របៀបប្រើធនធានបណ្ណាល័យតាមអ៊ីនធឺណិត។',
            images: [{ image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f' }],
        },
        {
            id: 3,
            name: 'Research Methods',
            name_kh: 'វិធីសាស្ត្រស្រាវជ្រាវ',
            short_description: 'Essential research methods for students.',
            short_description_kh: 'វិធីសាស្ត្រស្រាវជ្រាវចាំបាច់សម្រាប់និស្សិត។',
            images: [{ image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f' }],
        },
        {
            id: 4,
            name: 'Academic Writing',
            name_kh: 'ការសរសេរអប់រំ',
            short_description: 'Learn how to write academic papers.',
            short_description_kh: 'រៀនរបៀបសរសេរការងារអប់រំ។',
            images: [{ image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f' }],
        },
    ];

    const resource = {
        id: 1,
        title: 'Research Guide: Humanities',
        image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f',
        long_description:
            'This humanities research guide provides access to scholarly resources in history, philosophy, literature, and cultural studies. It helps students and researchers find reliable references, journals, and primary sources for academic research.',
    }; // get resource data from server
    const { t, currentLocale } = useTranslation();
    const mainVideo = resource;
    return (
        <LibraryServiceLayout>
            <div className="container mx-auto my-20 px-4 sm:px-6 lg:px-8">
                <div className="mb-4">
                    <Breadcrumb className="inline-block rounded-2xl  p-1 backdrop-blur dark:bg-slate-800/60">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/#resources">Back to resources</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem className="rounded-xl bg-[linear-gradient(138deg,#4f46e5,#6154e8,#7361ec,#846fef,#967df2,#a88af5,#ba98f9,#cba5fc,#ddb3ff)] px-4 py-2 transition-colors">
                                <BreadcrumbPage className="text-sm font-medium text-white">{mainVideo.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Content */}
                    <article className="w-full lg:w-3/4">
                        <h1 className="mb-4 text-3xl font-bold text-gray-900">{resource.title}</h1>
                        <p className="text-lg text-gray-700">{resource.long_description}</p>
                    </article>

                    {/* Sidebar */}
                    <aside className="sticky top-24 w-full lg:w-1/4">
                        {/* Header */}
                        <div className="mb-6 rounded-2xl bg-[linear-gradient(138deg,#4f46e5,#6154e8,#7361ec,#846fef,#967df2,#a88af5,#ba98f9,#cba5fc,#ddb3ff)] p-[1px]">
                            <div className="rounded-2xl bg-white px-5 py-4 dark:bg-gray-900">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t('Reladed')}</h2>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Explore more library resources</p>
                            </div>
                        </div>

                        {/* Related Cards */}
                        <div className="space-y-4">
                            {relatedPosts.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/detail/${item.id}`}
                                    className="group flex gap-4 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                                >
                                    {/* Image */}
                                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl">
                                        <img
                                            src={item.images[0].image}
                                            alt={item.name}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col justify-between">
                                        <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white">
                                            {currentLocale === 'kh' ? (item.name_kh ?? item.name) : item.name}
                                        </h3>

                                        <p className="line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
                                            {currentLocale === 'kh' ? item.short_description_kh : item.short_description}
                                        </p>

                                        <span className="mt-1 inline-flex items-center text-xs font-medium text-indigo-600 opacity-0 transition group-hover:opacity-100">
                                            Read more →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </LibraryServiceLayout>
    );
};

export default Detail;
