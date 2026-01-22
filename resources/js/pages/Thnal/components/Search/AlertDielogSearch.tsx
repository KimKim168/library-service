import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GitPullRequestDraftIcon, Minus, PlusIcon } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTrigger } from '../ui/alert-dialog';
export function AlertDialogSearch() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="ghost" className="h-10 w-10 rounded-full">
                    <GitPullRequestDraftIcon className="h-5 w-5 text-white" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="flex max-h-[90vh] max-w-4xl flex-col overflow-y-scroll rounded-2xl shadow-2xl transition-all duration-300 ease-in-out">
                <form className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex flex-shrink-0 items-center justify-between border-b border-gray-200 pb-4">
                        <h2 className="text-2xl font-bold text-gray-900">Advanced Search</h2>
                        <AlertDialogCancel asChild>
                            <button type="button" className="text-gray-500 transition-colors duration-200 hover:text-gray-900" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </AlertDialogCancel>
                    </div>

                    {/* Form Fields - Scrollable Section */}
                    <div className="flex-1 space-y-8 overflow-y-auto">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                            {/* Left: Search Rows */}
                            <div className="space-y-4 py-4">
                                <Label className="invisible">Search By</Label>
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-stretch gap-3 sm:flex-row sm:items-center">
                                        <Select>
                                            <SelectTrigger className="w-[120px] rounded">
                                                <SelectValue placeholder="Keyword" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="light">Auther</SelectItem>
                                                <SelectItem value="dark">ISBN</SelectItem>
                                                <SelectItem value="system">ISSN</SelectItem>
                                                <SelectItem value="system">Journal Name</SelectItem>
                                                <SelectItem value="system">OCLC Number</SelectItem>
                                                <SelectItem value="system">Publisher</SelectItem>
                                                <SelectItem value="system">Subject</SelectItem>
                                                <SelectItem value="system">Title</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input placeholder="Inter your search term" />
                                        <Select>
                                            <SelectTrigger className="w-[120px] rounded">
                                                <SelectValue placeholder="AND" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="light">AND</SelectItem>
                                                <SelectItem value="dark">OR</SelectItem>
                                                <SelectItem value="system">NOT</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                ))}
                                <div className="flex items-stretch gap-3 sm:items-center">
                                    {/* <Select>
                                        <SelectTrigger className="w-[120px] rounded">
                                            <SelectValue placeholder="Auther" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="light">Auther</SelectItem>
                                                <SelectItem value="dark">ISBN</SelectItem>
                                                <SelectItem value="system">ISSN</SelectItem>
                                                <SelectItem value="system">Journal Name</SelectItem>
                                                <SelectItem value="system">OCLC Number</SelectItem>
                                                <SelectItem value="system">Publisher</SelectItem>
                                                <SelectItem value="system">Subject</SelectItem>
                                                <SelectItem value="system">Title</SelectItem>
                                        </SelectContent>
                                    </Select> */}
                                    <Button variant="outline" size="icon">
                                        <Minus />
                                    </Button>
                                    <Input />
                                    <Button variant="outline" size="icon">
                                        <PlusIcon />
                                    </Button>
                                </div>
                            </div>

                            {/* Right: Filters */}
                            <div className="space-y-4 py-4">
                                {/* Year */}
                                <div>
                                    <Label>Year Range</Label>
                                    <div className="flex flex-col gap-4 sm:flex-row">
                                        <Input placeholder="From" />
                                        <Input placeholder="To" />
                                    </div>
                                </div>

                                {/* Format */}
                                <div className="flex w-full gap-4">
                                    <div className="w-full max-w-full flex-1">
                                        <Label>Format</Label>
                                        <Select>
                                            <SelectTrigger className="rounded">
                                                <SelectValue placeholder="Select format" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="pdf">PDF</SelectItem>
                                                <SelectItem value="epub">EPUB</SelectItem>
                                                <SelectItem value="mobi">MOBI</SelectItem>
                                                <SelectItem value="hardcover">Hardcover</SelectItem>
                                                <SelectItem value="paperback">Paperback</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="w-full max-w-full flex-1">
                                        <Label>Language</Label>
                                        <Select>
                                            <SelectTrigger className="rounded">
                                                <SelectValue placeholder="Select language" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="en">English</SelectItem>
                                                <SelectItem value="fr">French</SelectItem>
                                                <SelectItem value="kh">Khmer</SelectItem>
                                                <SelectItem value="es">Spanish</SelectItem>
                                                <SelectItem value="de">German</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <AlertDialogFooter className="mt-8 flex flex-shrink-0 justify-end gap-4">
                        <AlertDialogAction asChild>
                            <Button type="submit" className='bg-[#1B6593]'>Search</Button>
                        </AlertDialogAction>
                        <AlertDialogCancel asChild>
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </AlertDialogCancel>
                    </AlertDialogFooter>
                </form>
            </AlertDialogContent>
        </AlertDialog>
    );
}
