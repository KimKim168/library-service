import VideoFilePlayer from '@/components/LibraryService/VideoFilePlayer';
import YouTubeEmbed from '@/components/LibraryService/YouTubeEmbed';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link, usePage } from '@inertiajs/react';
import { Calendar, Clock, Eye, VideoIcon } from 'lucide-react';
import LibraryServiceLayout from './LibraryServiceLayout';

const timeAgo = (dateString: string) => {
    const now = new Date();
    const past = new Date(dateString);
    const diffMs = now.getTime() - past.getTime();

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

const getMonthName = (monthNumber: number | string) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // monthNumber may come as string, convert to number and subtract 1 for index
    const index = Number(monthNumber) - 1;
    return months[index] || '';
};

const Video = () => {
    const { showVideoData, relatedVideoData } = usePage<any>().props;
    const mainVideo = showVideoData;
    console.log('file_type_code:', mainVideo?.file_type_code);
    console.log('files:', mainVideo?.files);
    // Filter out the current video from related videos
    // const filteredRelatedVideos = relatedVideoData?.filter((v: any) => v.id !== mainVideo?.id);

    return (
        <LibraryServiceLayout>
            <section className="pt-20 pb-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        {/* Breadcrumb */}
                        <div className="mb-4">
                            <Breadcrumb className="inline-block rounded-2xl p-1 backdrop-blur dark:bg-slate-800/60">
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
                                        <BreadcrumbPage className="text-sm font-medium text-white">{mainVideo?.name}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>

                        <div className="items-start lg:grid lg:grid-cols-3 lg:gap-8">
                            {/* Main Video Area */}
                            <div className="mb-8 lg:col-span-2 lg:mb-0">
                                {mainVideo?.file_type_code === 'video-file' && (
                                    <VideoFilePlayer
                                        src={
                                            mainVideo?.files?.[0]?.file_name ? `/assets/files/videos/${mainVideo.files[0].file_name}` : '' // empty string, nothing to play
                                        }
                                    />
                                )}

                                {mainVideo?.file_type_code === 'video-youtube-url' && mainVideo?.external_link && (
                                    <YouTubeEmbed url={mainVideo.external_link} />
                                )}

                                <h1 className="my-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">{mainVideo?.name}</h1>

                                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                    {mainVideo?.minute && (
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 text-primary" /> <p>{mainVideo.minute}</p>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <Eye className="w-5 text-primary" /> <p>{mainVideo?.total_view_count}</p> views
                                    </div>
                                    <span className="flex items-center gap-2">
                                        <Calendar className="w-5 text-primary" /> Published:{' '}
                                        <p>
                                            {mainVideo?.published_day}-{getMonthName(mainVideo?.published_month)}-{mainVideo?.published_year}
                                        </p>
                                    </span>
                                </div>

                                {/* Video Description */}
                                <div className="mb-6 rounded-xl bg-gray-50 p-6">
                                    <h2 className="mb-3 text-xl font-bold text-gray-900">Description</h2>
                                    <div dangerouslySetInnerHTML={{ __html: mainVideo?.long_description }} />
                                </div>
                            </div>

                            {/* Sidebar: Related Videos */}
                            <div className="lg:col-span-1">
                                <div className="rounded-xl border lg:sticky lg:top-32">
                                    <div className="rounded-t-xl bg-[linear-gradient(138deg,#4f46e5,#6154e8,#7361ec,#846fef,#967df2,#a88af5,#ba98f9,#cba5fc,#ddb3ff)] px-4 py-6 text-white">
                                        <p>Related Videos</p>
                                        <div className="flex items-center gap-2">
                                            <VideoIcon className="w-4" />
                                            <p className="text-sm">{relatedVideoData?.length} videos</p>
                                        </div>
                                    </div>
                                    <div className="mt-4 max-h-[337px] overflow-y-auto">
                                        {relatedVideoData?.map((video: any) => (
                                            <Link
                                                key={video.id}
                                                href={`/videos/${video.id}`}
                                                className={`group flex cursor-pointer gap-3 px-4 py-2 ${showVideoData.id == video.id ? 'bg-primary/10 text-indigo-600 ' : 'text-gray-900'}`}
                                            >
                                                <div className="aspect-video w-32 flex-shrink-0 overflow-hidden rounded bg-gradient-to-br from-indigo-100 to-purple-100">
                                                    <img
                                                        src={video.thumbnail ? `/assets/images/videos/${video.thumbnail}` : ''}
                                                        alt={video.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>

                                                <div className="min-w-0 flex-1">
                                                    <h3 className="line-clamp-2 text-sm font-medium  transition-colors group-hover:text-indigo-600">
                                                        {video.name}
                                                    </h3>
                                                    {video.category_code && (
                                                        <p className="mt-1 mb-0.5 text-xs text-gray-600">{video.category_code}</p>
                                                    )}
                                                    <div className="mt-1 flex items-center gap-1 text-xs text-gray-600">
                                                        <span>{video.total_view_count} views</span>
                                                        <span>•</span>
                                                        <span>{timeAgo(video.created_at)}</span>
                                                    </div>
                                                </div>
                                            </Link>
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
