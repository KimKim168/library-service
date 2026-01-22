import { usePage } from '@inertiajs/react';
import { ReactNode } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import CamboFooter from './components/ThnalFooter';
import ThnalTopHeader from './components/ThanlTopHeader';
import ThnalHeader from './components/ThnalHeader';
interface LayoutProps {
    children: ReactNode;
}

const ThnalLayout = ({ children }: LayoutProps) => {
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-koulen-regular' : '';
    return (
        <>
            <ThnalTopHeader/>
            {/* <ThnalHeader/> */}
            <main className={`font-poppins-regular mx-auto min-h-screen ${fontClass}`}>{children}</main>
            <CamboFooter/>
            <a
                href="https://t.me/YourTelegramUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fadeUp fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-sky-500 to-sky-300/90 text-white shadow-lg shadow-sky-500/20 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/40"
            >
                <FaTelegramPlane className="text-2xl" />
            </a>
        </>
    );
};

export default ThnalLayout;
