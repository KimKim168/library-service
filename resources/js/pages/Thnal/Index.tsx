import ThnalLayout from './ThnalLayout';
import { Card } from './components/Card';
import ThnalSearch from './components/Search/ThnalSearch';
import ThnalBanner from './components/ThnalBanner';
import ThnalHeader from './components/ThnalHeader';

const Index = () => {
    return (
        <ThnalLayout>
            <div className="relative py-4">
                <img src="/assets/thnal/bg.png" alt="Background" className="absolute top-0 left-0 h-full w-full object-cover" loading="lazy" />
                {/* Overlay with color + blur */}
                <div className="absolute top-0 left-0 h-full w-full bg-[#104674]/50 backdrop-blur-sm"></div>
                <div className="relative z-10">
                    <ThnalHeader />
                    <ThnalSearch />
                </div>
            </div>
            <div>
                <ThnalBanner />
                <Card />
            </div>
        </ThnalLayout>
    );
};

export default Index;
