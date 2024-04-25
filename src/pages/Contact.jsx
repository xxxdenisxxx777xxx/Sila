const links = [
    { name: 'Знайти нас на карті', href: 'https://maps.app.goo.gl/YzX7jCRjXM6f97LA6' },

]
const stats = [
    { name: 'Пошта', value: 'sila@gmail.com' },
    { name: 'Телефон', value: '+380 99 129 00 29' },
    { name: 'Адреса', value: 'м.Дніпро' },
    { name: 'Телеграм Бот', value: '@sila_bot' },
]

export default function Contact() {
    return (
        <div className="relative bg-gray-100 rounded-xl py-24 sm:py-32 flex ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 items-center justify-center ">

                <div className="mx-auto max-w-2xl ">
                    <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl items-center justify-center">Контакти</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 ">
                        Ласкаво просимо на сторінку контактів нашої компанії! Ми цінуємо ваш інтерес до нашої діяльності і готові відповісти на будь-які запитання, обговорити пропозиції співпраці або просто поговорити. </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-blak sm:grid-cols-2 md:flex lg:gap-x-10 items-center justify-center">
                        {links.map((link) => (
                            <a key={link.name} href={link.href}>
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </a>
                        ))}
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse gap-3">
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">{stat.value}</dd>
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

        </div>
    )
}
