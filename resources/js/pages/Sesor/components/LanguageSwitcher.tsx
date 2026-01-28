import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePage } from '@inertiajs/react';
import { Globe, Languages } from 'lucide-react';
export function LanguageSwitcher() {
    const { locale } = usePage().props; // comes from backend
    return (
        <Select
            defaultValue={locale || 'en'} // fallback English
            onValueChange={(val) => {
                window.location.href = `/lang/${val}`; // redirect to language route
            }}
        >
            <SelectTrigger className="w-[120px] text-primary h-9 right-0 font-manrope-bold items-center justify-start border-none shadow-none [&>svg]:text-primary [&_svg]:w-4 [&_svg]:h-3 [&_svg]:text-primary px-4">
            <Globe className='text-primary w-3 h-3 mr-1'/>
                <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup className='text-primary text-[15px] font-manrope-bold '>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="kh">Khmer</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
