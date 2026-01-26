import { Link, usePage } from "@inertiajs/react";

// const videos = [
//     {
//         id: 1,
//         title: 'Database Searching Basics',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=rkpzYNB6xks',
//     },
//     {
//         id: 2,
//         title: 'Citation Management Tools',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_2',
//     },
//     {
//         id: 3,
//         title: 'Advanced Search Strategies',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 4,
//         title: 'Research Methodology',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 5,
//         title: 'Boolean Operators Explained',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 6,
//         title: 'Evaluating Sources',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 7,

//         title: 'Digital Archive Access',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 8,

//         title: 'Interlibrary Loan Process',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 9,

//         title: 'Literature Review Guide',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 10,

//         title: 'Plagiarism Prevention',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 11,

//         title: 'Thesis Writing Support',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 12,

//         title: 'Open Access Resources',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 13,

//         title: 'Academic Writing Styles',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 14,

//         title: 'Library Workshops',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 15,

//         title: 'Study Room Reservations',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
//     {
//         id: 16,

//         title: 'Research Impact Metrics',
//         thumbnail: 'https://i.ytimg.com/vi/rkpzYNB6xks/hq720.jpg',
//         link: 'https://www.youtube.com/watch?v=VIDEO_ID_3',
//     },
// ];

const VideoSessions = () => {
    const { allVideos, videoHeader } = usePage<any>().props;

    return (
        <section id="video" className="">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 sm:text-4xl">{videoHeader?.name}</h2>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {allVideos?.map((video, index) => (
                        <Link
                            href={`/videos/${video?.id}`}
                            key={index}
                            className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Thumbnail */}
                            <div className="group relative flex aspect-video items-center justify-center">
                                <img src={`/assets/images/videos/${video?.thumbnail}`} className={`absolute aspect-video object-cover h-full inset-0`} />
                                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 opacity-0 transition-opacity group-hover:opacity-100">
                                    <svg className="ml-0.5 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Text */}
                            <div className="p-4">
                                <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">{video?.name}</h3>
                                {/* <p className="line-clamp-2 text-sm text-gray-600">{video?.description}</p> */}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoSessions;
