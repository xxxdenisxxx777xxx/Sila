import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const products = [
    { name: 'Інструменти', description: 'Інструменти для всіх потреб', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Автозапчатини', description: 'Автозапчатини для різноманіття автомобілів', href: '#', icon: SquaresPlusIcon },
    { name: 'Автоаксесуари', description: 'Все для комфорту та зручності на дорозі', href: '#', icon: SquaresPlusIcon },
    { name: 'Кріплення', description: 'Забезпечте безпеку для вашого обладнання', href: '#', icon: ChartPieIcon },
    { name: 'Хімія', description: 'Інноваційні рішення для ефективного догляду та обробки', href: '#', icon: FingerPrintIcon },
    { name: 'Кемпінг', description: 'Для комфорту та безпеки на природі.', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Контакти', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false)

    const toggleDropdown = () => {
        setDropdownMenuOpen(!dropdownMenuOpen);
    };

    const handleItemClick = () => {
        setDropdownMenuOpen(false);
    };


    return (
        <header className="z-50 mb-0">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img className="h-10 w-auto" src="https://github.com/xxxdenisxxx777xxx/sila-img/blob/main/sila.png?raw=true" alt="" />
                        </a>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link to="/">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Головна
                        </a>
                    </Link>
                    <Popover className="relative">

                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 mt-[0.9px] active:border-current text-gray-900" onClick={toggleDropdown}>
                            Каталог
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </Popover.Button>
                        {dropdownMenuOpen && (
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >

                                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">

                                    <div className="p-4">
                                        <Link to="/allproducts" onClick={handleItemClick}>
                                            {products.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                                >
                                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                                                    </div>
                                                    <div className="flex-auto">
                                                        <a href={item.href} className="block font-semibold text-gray-900">
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                                        <Link to="/allproducts">
                                            <button className='w-full' onClick={handleItemClick}>
                                                <a className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 cursor-pointer">
                                                    Подивитись усі товари</a>
                                            </button>
                                        </Link>
                                    </div>
                                    <Link to="/contacts">
                                        <div className=" divide-x divide-gray-900/5 bg-gray-50 w-full">

                                            {callsToAction.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                                >
                                                    <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                                    {item.name}
                                                </a>
                                            ))}

                                        </div>
                                    </Link>


                                </Popover.Panel>

                            </Transition>
                        )}
                    </Popover>
                    <Link to="/contacts">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Контакти
                        </a>
                    </Link>
                    <Link to="/">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Про компанію
                        </a>
                    </Link>

                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end ">

                    <Link to="/">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            +380 99 129 00 29 <span aria-hidden="true">📱</span>
                        </a>
                    </Link>
                </div>

            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Каталог
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callsToAction].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
