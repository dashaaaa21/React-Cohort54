import { useState } from "react";

function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How to order?",
      answer: "Click on the clothes you like. Click 'Add to Cart'. Then go to cart and click 'Checkout'."
    },
    {
      question: "Can I return clothes?",
      answer: "Yes! You can return clothes in 30 days. The clothes must be new and clean."
    },
    {
      question: "Do you ship to other countries?",
      answer: "Yes, we ship to many countries. Shipping time is 5-10 days."
    },
    {
      question: "How to pick up my order?",
      answer: "You can pick up at our store. We will send you a message when your order is ready."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border-2 border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                <div className="w-12 h-12 rounded-full border-2 border-gray-900 flex items-center justify-center flex-shrink-0 ml-4">
                  <span className="text-2xl transform transition-transform duration-300" style={{
                    transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    v
                  </span>
                </div>
              </button>
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
