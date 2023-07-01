import { useState, useEffect } from 'react';
import { Layout } from '~/layouts';

interface Service {
    title: string;
    description: string;
    image: string;
}

interface Props {
    services: Service[];
}

const App = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        // Fetch or set services data
        const fetchedServices = [
            {
                title: 'Service 1',
                description: 'Description of Service 1',
                image: '/path/to/service1.jpg',
            },
            {
                title: 'Service 2',
                description: 'Description of Service 2',
                image: '/path/to/service2.jpg',
            },
            // Add more services as needed
        ];

        setServices(fetchedServices);
    }, []);

    return (
        <Layout>
            <Services services={services} />
        </Layout>
    );
};

export default App;








const Services: React.FC<Props> = ({ services }) => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                                <div className="mt-4">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
