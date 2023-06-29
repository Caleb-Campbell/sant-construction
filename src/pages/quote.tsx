import React, { useState } from 'react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Layout } from '~/layouts';
import { api } from '~/utils/api';
import Button from '~/components/buttons';

export default function Quote() {

    const mailHandler = api.mail.sendQuote.useMutation()


    const initialInputs = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    };

    const [inputs, setInputs] = useState(initialInputs);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputs);
        mailHandler.mutate(inputs)
    };

    return (
        <Layout>
            <div className="relative isolate bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 h-screen items-center">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                                <svg
                                    className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                                    aria-hidden="true"
                                >
                                    <defs>
                                        <pattern
                                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                                            width={200}
                                            height={200}
                                            x="100%"
                                            y={-1}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <path d="M130 200V.5M.5 .5H200" fill="none" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                                    <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                        <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                    </svg>
                                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get a Free Quote</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Get a custom construction quote. Fill out our form with project details. Our team will review and respond via email. Let's start your construction project together!
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        545 Mavis Island
                                        <br />
                                        Chicago, IL 99191
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Telephone</span>
                                        <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                                            +1 (555) 234-5678
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-gray-900" href="mailto:hello@example.com">
                                            hello@example.com
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" onSubmit={handleSubmit}>
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="first-name"
                                            id="first-name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={inputs.firstName}
                                            onChange={(e) => setInputs({ ...inputs, firstName: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="last-name"
                                            id="last-name"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={inputs.lastName}
                                            onChange={(e) => setInputs({ ...inputs, lastName: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={inputs.email}
                                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="tel"
                                            name="phone-number"
                                            id="phone-number"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={inputs.phoneNumber}
                                            onChange={(e) => setInputs({ ...inputs, phoneNumber: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            value={inputs.message}
                                            onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <Button
                                    variant='primary'
                                    type="submit"
                                    className="w-full flex items-center justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    {mailHandler.isLoading ? (
                                        <div role="status">
                                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-white fill-sant-dark" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    ) : (
                                        'Get Quote'
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
