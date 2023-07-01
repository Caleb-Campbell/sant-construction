import { useState } from "react";
import { Layout } from "~/layouts"


const Services = () => {

    const [selectedService, setSelectedService] = useState<number | null>(null);


    const services = [
        {
            title: 'Residential Construction',
            description: 'We specialize in building custom homes and providing renovations and additions to existing residential properties.',
        },
        {
            title: 'Commercial Construction',
            description: 'Our commercial construction services include new builds, remodeling, and tenant improvements.',
        },
        {
            title: 'Renovations',
            description: 'Whether you want to update your kitchen, bathroom, or entire home, we provide high-quality renovation services.',
        },
        {
            title: 'Exterior Remodeling',
            description: 'Enhance the curb appeal and functionality of your property with our exterior remodeling services.',
        },
        {
            title: 'Custom Carpentry',
            description: 'Our skilled carpenters can create custom woodworking pieces, such as cabinets, built-in shelves, and furniture.',
        },
        {
            title: 'Project Management',
            description: 'Our project management services ensure that your construction project stays on track, within budget, and meets your expectations.',
        },
    ];

    const handleServiceClick = (index: number) => {
        setSelectedService(index); // Update the selected service
    };

    return (
        <Layout>
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold mb-8">Our Services</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer ${selectedService === index ? "bg-gray-100" : ""
                                }`}
                            onClick={() => handleServiceClick(index)}
                        >
                            <img
                                src={`https://picsum.photos/id/${index * 13}/900/700`}
                                alt={service.title}
                                className="w-full h-40 object-cover mb-4 rounded-lg"
                            />
                            <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>

                {selectedService !== null && (
                    <div className="mt-8 md:flex">
                        <div className="bg-white rounded-lg shadow-lg p-6 md:w-2/3">
                            <h2 className="text-2xl font-semibold mb-4">
                                {services[selectedService]?.title}
                            </h2>
                            <p className="text-gray-600">
                                {services[selectedService]?.description}
                            </p>
                            {/* Additional information or components for the selected service */}
                        </div>
                        <div className="hidden md:block md:w-1/3" />
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Services
