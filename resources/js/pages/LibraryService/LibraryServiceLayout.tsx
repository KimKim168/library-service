import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const LibraryServiceLayout = ({ children }: LayoutProps) => {
    const { t, currentLocale } = useTranslation();

    return (
        <div className="bg-white">
            <nav className="fixed top-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/assets/logo.jpg" alt="Banalai Logo" className="h-14 w-auto" />
                            <p className="hidden text-2xl font-bold text-indigo-600 transition-colors hover:text-indigo-700 md:block">
                                Library Service
                            </p>
                        </Link>

                        <div className="flex items-center gap-2">
                            <Link
                                href="/how_to"
                                className="flex md:w-28 items-center justify-center border-r px-4 text-xs md:text-base font-medium text-gray-700 hover:text-primary"
                            >
                                How To
                            </Link>

                            <Button asChild variant="outline" className="md:h-10 md:w-28 text-xs md:text-base font-medium text-gray-700 hover:text-primary">
                                <Link href="/banalai_login">{t('Login')}</Link>
                            </Button>

                            <Button asChild className="md:h-10 md:w-28 bg-indigo-600 text-xs md:text-base font-medium text-white hover:bg-indigo-700">
                                <Link href="/banalai_login">{t('Register')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="mx-auto min-h-svh w-full flex-1">{children}</main>
            <footer className="mt-16 border-t border-gray-200 bg-gray-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-2 text-center text-gray-600">
                        <p className="text-sm sm:text-base">
                            &copy; 2024 <span className="font-semibold">Library Online Reference Service Portal</span>. All rights reserved.
                        </p>
                        <p className="text-xs sm:text-sm">📚 Library Services - Empowering Research & Learning</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LibraryServiceLayout;
