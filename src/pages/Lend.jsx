import { Link } from 'react-router-dom'
const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Lend() {

    return (
        <>        <div className="bg-white">

            <div className="relative isolate px-6 pt-14 lg:px-8 mb-48">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl mt-10 ">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Читай детальніше{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Якісні та надійні Інструменти від "СИЛА"
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Оберайте надійність та ефективність з продукцією "СИЛА". Ваш успіх - у наших інструментах.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link to="/allproducts">
                                <a
                                    href="#"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    До продукції
                                </a>
                            </Link>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Детальніше <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

            </div>

            <div class="bg-gray-100 rounded-xl">
                <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                    <div class="mx-auto max-w-2xl py-16  lg:max-w-none ">
                        <h2 class="text-3xl font-bold text-gray-600">Найпопулярніші товари</h2>

                        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 pt-9">
                            <Link to="/allproducts">
                                <div class="group relative">
                                    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img src="https://optim.tildacdn.com/stor3462-3765-4238-b233-666565303665/-/format/webp/38240457.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full object-contain w-full object-center" />
                                    </div>

                                    <h3 class="mt-6 text-sm text-gray-500">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            Коло
                                        </a>
                                    </h3>
                                    <p class="text-base font-semibold text-gray-900">Лiска для тримера "СИЛА"</p>
                                </div>
                            </Link>
                            <Link to="/allproducts">
                                <div class="group relative">
                                    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img src="https://optim.tildacdn.com/stor6362-3364-4538-b032-383564323832/-/format/webp/10676581.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full object-contain w-full object-center" />
                                    </div>
                                    <h3 class="mt-6 text-sm text-gray-500">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            Зірка
                                        </a>
                                    </h3>
                                    <p class="text-base font-semibold text-gray-900">Лiска для тримера "СИЛА"</p>
                                </div>
                            </Link>
                            <Link to="/allproducts">
                                <div class="group relative">
                                    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img src="https://optim.tildacdn.com/stor6134-6437-4164-a336-336239633634/-/format/webp/80018625.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full object-contain w-full object-center" />
                                    </div>
                                    <h3 class="mt-6 text-sm text-gray-500">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            Квадрат
                                        </a>
                                    </h3>
                                    <p class="text-base font-semibold text-gray-900">Лiска для тримера "СИЛА"</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            <div class="bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 class="text-center text-2xl font-semibold leading-8 text-gray-900">Компанії які нам довіряють</h2>
                    <div class="mx-auto mt-20 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
                        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
                        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
                    </div>
                </div>
            </div>
        </>

    )
}
