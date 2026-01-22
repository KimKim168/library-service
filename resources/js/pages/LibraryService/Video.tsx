import HeroVideo from '@/components/LibraryService/HeroVideo';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from '@inertiajs/react';
import { Calendar, Clock, Eye, VideoIcon } from 'lucide-react';
import { useState } from 'react';
import LibraryServiceLayout from './LibraryServiceLayout';

const timeAgo = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now - past;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;

    return 'Just now';
};

const videos = [
    {
        id: 1,
        title: 'Database Searching Basics',
        thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
        link: '#',
        total_view: '1,234',
        published: 'March 15, 2025',
        video_category: 'Referent Services',
        minute: '35:20',
        description: `<div class="bg-gray-50 rounded-xl p-6 mb-6">
            <h2 class="text-xl font-bold text-gray-900 mb-3">Description</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
                Learn how to navigate our online reference services effectively. This comprehensive guide covers everything from basic database searches to advanced research techniques, helping you make the most of our library resources.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
                In this video, you'll discover:
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>How to access and search library databases</li>
                <li>Effective search strategies and Boolean operators</li>
                <li>Citation management and referencing tools</li>
                <li>How to request assistance from reference librarians</li>
                <li>Accessing e-books and digital resources</li>
            </ul>
            <div class="flex flex-wrap gap-2 mt-4">
                <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Research Basics</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Database Search</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Library Resources</span>
                <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Citation</span>
            </div>
        </div>`,
    },
    {
        id: 2,
        title: 'Citation Management Tools',
        thumbnail: 'https://i.ytimg.com/vi/VIDEO_ID_2/hq720.jpg',
        link: '#',
        total_view: '980',
        published: 'April 02, 2024',
        video_category: 'Referent Services',
        minute: '28:45',
        description: 'Explore popular tools to manage and organize your citations.',
    },
    {
        id: 3,
        title: 'Advanced Search Strategies',
        thumbnail: 'https://i.ytimg.com/vi/VIDEO_ID_3/hq720.jpg',
        link: '#',
        total_view: '1,540',
        published: 'April 18, 2024',
        video_category: 'Referent Services',
        minute: '42:10',
        description: 'Master advanced techniques for finding the information you need.',
    },
    {
        id: 4,
        title: 'Using Library Catalogs',
        thumbnail: 'https://i.ytimg.com/vi/VIDEO_ID_4/hq720.jpg',
        link: '#',
        total_view: '765',
        published: 'May 01, 2024',
        video_category: 'Referent Services',
        minute: '22:30',
        description: 'Navigate and utilize library catalogs to locate resources quickly.',
    },
    {
        id: 5,
        title: 'Research Methodology',
        thumbnail: 'https://i.ytimg.com/vi/VIDEO_ID_5/hq720.jpg',
        link: '#',
        total_view: '1,120',
        published: 'May 12, 2024',
        video_category: 'Referent Services',
        minute: '39:05',
        description: 'Understand research methods and how to apply them effectively.',
    },
];

const Video = () => {
    const mainVideo = videos[0];
    return (
        <LibraryServiceLayout>
            <section className=" pt-20 pb-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-4">
                            {/* <a href="/" className="inline-flex items-center font-medium text-indigo-600 transition-colors hover:text-indigo-700">
                                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Videos
                            </a> */}
                            <Breadcrumb className="inline-block rounded-2xl  p-1 backdrop-blur dark:bg-slate-800/60">
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="/#video">Back to videos</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href="/how_to">Categories</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem className="rounded-xl bg-[linear-gradient(138deg,#4f46e5,#6154e8,#7361ec,#846fef,#967df2,#a88af5,#ba98f9,#cba5fc,#ddb3ff)] px-4 py-2 transition-colors">
                                        <BreadcrumbPage className="text-sm font-medium text-white">{mainVideo.title}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                        <div className="items-start lg:grid lg:grid-cols-3 lg:gap-8">
                            {/* Main Video Area */}
                            <div className="mb-8 lg:col-span-2 lg:mb-0">
                                <div className="mb-6 aspect-video w-full overflow-hidden rounded-3xl">
                                    <HeroVideo
                                        thumbnail="https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg"
                                        videoUrl="https://www.youtube.com/embed/rkpzYNB6xks"
                                    />
                                </div>

                                <h1 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">{mainVideo.title}</h1>
                                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 text-primary" /> <p>{mainVideo.minute}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Eye className="w-5 text-primary" /> <p>{mainVideo.total_view}</p> views
                                    </div>

                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-5 text-primary" /> Published:<p>{mainVideo.published}</p>
                                    </span>
                                </div>
                                {/* Video Description */}
                                <div dangerouslySetInnerHTML={{ __html: mainVideo.description }} />
                            </div>

                            {/* Sidebar: Related Videos */}
                            <div className="lg:col-span-1">
                                <div className="rounded-xl border lg:sticky lg:top-32">
                                    <div className="rounded-t-xl bg-[linear-gradient(138deg,#4f46e5,#6154e8,#7361ec,#846fef,#967df2,#a88af5,#ba98f9,#cba5fc,#ddb3ff)] px-4 py-6 text-white">
                                        <p>Advanced Courses</p>
                                        <div className='flex items-center gap-2'>
                                            <VideoIcon className='w-4'/>
                                            {/* Coun my videos i has and show this plase */}
                                            <p className='text-sm'>{videos?.length} videos</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 max-h-[361px] space-y-4 overflow-y-auto px-4">
                                        {videos.map((video) => (
                                            <a key={video.id} href={video.link} className="group flex cursor-pointer gap-3">
                                                <div className="aspect-video w-32 flex-shrink-0 overflow-hidden rounded bg-gradient-to-br from-indigo-100 to-purple-100">
                                                    <img
                                                        src={video.thumbnail}
                                                        alt={video.title}
                                                        className="h-full w-full bg-gradient-to-br from-indigo-100 to-purple-100 object-cover"
                                                    />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="line-clamp-2 text-sm font-medium text-gray-900 transition-colors group-hover:text-indigo-600">
                                                        {video.title}
                                                    </h3>
                                                    {video.video_category && (
                                                        <p className="mt-1 mb-0.5 text-xs text-gray-600">{video.video_category}</p>
                                                    )}

                                                    {/* Meta info */}
                                                    <div className="mt-1 flex items-center gap-1 text-xs text-gray-600">
                                                        <span>{video.total_view} views</span>
                                                        <span>•</span>
                                                        <span>{timeAgo(video.published)}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LibraryServiceLayout>
    );
};

export default Video;
