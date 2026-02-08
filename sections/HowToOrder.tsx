
const steps = [
    { id: "01", title: "Select Style", desc: "Browse our curated collection and find what speaks to you. Choose the Size and Design." },
    { id: "02", title: "Add to Cart", desc: "Add the items to your shopping bag." },
    { id: "03", title: "Checkout", desc: "Click on the place order button and fill-in your details and our representative will contact you for the payment and shipping." },
];


export default function HowToOrder() {
    return (
        <section id="howtoorder" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-tighter text-sky-900">How to Order</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step) => (
                        <div key={step.id} className="border-t border-gray-500 pt-6">
                            <span className="text-sm font-mono text-sky-900">{step.id}</span>
                            <h3 className="text-xl font-bold mt-2 mb-3 text-sky-900">{step.title}</h3>
                            <p className="text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}