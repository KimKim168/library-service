import { usePage } from '@inertiajs/react';
import HeroVideo from './HeroVideo';

const Hero = () => {
    const { heroVideo} = usePage<any>().props;

    return (
        <section className=" pt-24 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left Section: Text and UI Elements */}
                        <div>
                            <h1 className="mb-6 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
                                {heroVideo?.name} <span className="text-purple-600">{heroVideo?.short_description}</span>
                            </h1>

                            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 sm:text-xl" dangerouslySetInnerHTML={{__html:heroVideo?.long_description}}>
                            </p>

                            {/* Call-to-Action Buttons */}
                            <div className="mb-10 flex flex-wrap gap-4">
                                <button className="transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
                                    Explore Courses
                                </button>
                            </div>
                        </div>

                        {/* Right Section: Image */}
                        <div className="relative">
                            <div className="overflow-hidden aspect-[4/3] rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                                <HeroVideo
                                    thumbnail={`/assets/images/videos/thumb/${heroVideo?.thumbnail}`}
                                    videoUrl={heroVideo?.external_link}
                                />
                            </div>

                            {/* Decorative Layer */}
                            <div className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-purple-200 to-indigo-200 opacity-20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
