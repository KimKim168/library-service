import VideoFilePlayer from '@/components/LibraryService/VideoFilePlayer';
import YouTubeEmbed from '@/components/LibraryService/YouTubeEmbed';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { Calendar, Clock, Eye, VideoIcon } from 'lucide-react';
import LibraryServiceLayout from './LibraryServiceLayout';

const timeAgo = (dateString: string, locale: string) => {
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

    const kh = {
        year: 'ឆ្នាំ',
        month: 'ខែ',
        week: 'សប្តាហ៍',
        day: 'ថ្ងៃ',
        hour: 'ម៉ោង',
        minute: 'នាទី',
        ago: 'មុន',
        now: 'ទើបតែ',
    };

    if (locale === 'kh') {
        if (years > 0) return `${years} ${kh.year} ${kh.ago}`;
        if (months > 0) return `${months} ${kh.month} ${kh.ago}`;
        if (weeks > 0) return `${weeks} ${kh.week} ${kh.ago}`;
        if (days > 0) return `${days} ${kh.day} ${kh.ago}`;
        if (hours > 0) return `${hours} ${kh.hour} ${kh.ago}`;
        if (minutes > 0) return `${minutes} ${kh.minute} ${kh.ago}`;
        return kh.now;
    }

    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;

    return 'Just now';
};

const getMonthName = (month: number | string, locale: string) => {
    const en = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const kh = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
    const index = Number(month) - 1;
    return locale === 'kh' ? kh[index] : en[index];
};

const Video = () => {
    const { showVideoData, relatedVideoData } = usePage<any>().props;
    const { t, currentLocale } = useTranslation();
    const mainVideo = showVideoData;

    const title = currentLocale === 'kh' ? mainVideo?.name_kh || mainVideo?.name : mainVideo?.name;

    const description = currentLocale === 'kh' ? mainVideo?.long_description_kh || mainVideo?.long_description : mainVideo?.long_description;

    return (
        <LibraryServiceLayout>
            <section className="pt-20 pb-8">
                <div className="section-container">
                    {/* Breadcrumb */}
                    <div className="mb-4">
                        <Breadcrumb className="inline-block rounded-2xl p-1 backdrop-blur dark:bg-slate-800/60">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/#video"> {t('Back to videos')}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/how_to"> {t('Categories')}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="rounded-xl bg-[linear-gradient(138deg,#4f46e5,#6154e8,#7361ec,#846fef,#967df2,#a88af5,#ba98f9,#cba5fc,#ddb3ff)] px-4 py-2 transition-colors">
                                    <BreadcrumbPage className="text-sm font-medium text-white"> {title}</BreadcrumbPage>
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

                            <h1 className="my-4 text-2xl font-bold leading-tight text-gray-900 lg:text-[28px]"> {title}</h1>

                            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                {mainVideo?.minute && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 text-primary" /> <p>{mainVideo.minute}</p>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <Eye className="w-5 text-primary" /> <p>{mainVideo?.total_view_count}</p> {t('views')}
                                </div>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-5 text-primary" /> Published:{' '}
                                    <p>
                                        {mainVideo?.created_at
                                            ? new Date(mainVideo.created_at).toLocaleDateString('en-GB', {
                                                  day: '2-digit',
                                                  month: 'short',
                                                  year: 'numeric',
                                              })
                                            : 'N/A'}
                                    </p>
                                </span>
                            </div>

                            {/* Video Description */}
                            <div className="mb-6 rounded-xl bg-gray-50 p-6">
                                <h2 className="mb-3 text-xl font-bold text-gray-900"> {t('Description')}</h2>
                                <div dangerouslySetInnerHTML={{ __html: description }} />
                            </div>
                        </div>

                        {/* Sidebar: Related Videos */}
                        <div className="lg:col-span-1">
                            <div className="rounded-xl border lg:sticky lg:top-32">
                                <div className="rounded-t-xl bg-[linear-gradient(138deg,#4f46e5,#6154e8,#7361ec,#846fef,#967df2,#a88af5,#ba98f9,#cba5fc,#ddb3ff)] py-3 text-center text-white">
                                    <p>{t('Related Videos')}</p>
                                    <div className="flex items-center justify-center gap-2">
                                        <VideoIcon className="w-4" />
                                        <p className="text-sm">
                                            {relatedVideoData?.length} {t('videos')}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 max-h-[337px] overflow-y-auto">
                                    {relatedVideoData?.map((video: any, index: number) => {
                                        const videoTitle = currentLocale === 'kh' ? video?.name_kh || video?.name : video?.name;

                                        const isLastVideo = index === relatedVideoData.length - 1;

                                        return (
                                            <Link
                                                key={video.id}
                                                href={`/videos/${video.id}`}
                                                className={`group flex gap-3 px-4 py-2 ${
                                                    mainVideo.id === video.id ? 'bg-primary/10 text-indigo-600' : ''
                                                } ${isLastVideo ? 'rounded-b-xl' : ''}`}
                                            >
                                                <div className="aspect-video w-32 overflow-hidden rounded">
                                                    <img
                                                        src={`/assets/images/videos/${video.thumbnail}`}
                                                        alt={videoTitle}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>

                                                <div className="flex-1">
                                                    <h3 className="line-clamp-2 text-sm font-medium group-hover:text-indigo-600">{videoTitle}</h3>

                                                    <div className="mt-1 text-xs text-gray-600">
                                                        {video.total_view_count} {t('views')} • {timeAgo(video.created_at, currentLocale)}
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
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
