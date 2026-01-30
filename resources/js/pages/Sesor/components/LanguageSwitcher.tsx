import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePage } from '@inertiajs/react';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
    const { locale } = usePage().props as { locale?: string };

    return (
        <Select
            value={locale ?? 'kh'} // Khmer default
            onValueChange={(val) => {
                window.location.href = `/lang/${val}`;
            }}
        >
            <SelectTrigger className="h-9 w-[120px] border-none px-4 font-manrope-bold text-primary shadow-none">
                <Globe className="mr-1 h-3 w-3 text-primary" />
                <SelectValue />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup className="font-manrope-bold text-[15px] text-primary">
                    <SelectItem value="kh">Khmer</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
