const CustomerService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Customer Service
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            How can we help you today?
          </h2>
          <p className="text-gray-600 mb-4">
            Our customer service team is here to assist you with any questions or concerns. 
            You can reach us through the chat widget in the bottom right corner of your screen, 
            or use one of the contact methods below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              Contact Information
            </h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Email:</strong> support@gsac.com</p>
              <p><strong>Hours:</strong> Mon-Fri 9AM-5PM</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-green-800">
              Quick Support
            </h3>
            <p className="text-gray-700 mb-3">
              Use our live chat widget for instant support! Look for the chat icon 
              with sparkles in the bottom right corner.
            </p>
            <div className="text-sm text-green-600">
              ✨ Available 24/7 ✨
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            <details className="cursor-pointer">
              <summary className="font-medium text-gray-700">How do I apply for a loan?</summary>
              <p className="mt-2 text-gray-600">You can apply for a loan online through our website or visit any of our branch locations.</p>
            </details>
            <details className="cursor-pointer">
              <summary className="font-medium text-gray-700">What are your current interest rates?</summary>
              <p className="mt-2 text-gray-600">Interest rates vary by product. Please contact us for current rates and terms.</p>
            </details>
            <details className="cursor-pointer">
              <summary className="font-medium text-gray-700">How do I become a member?</summary>
              <p className="mt-2 text-gray-600">Visit our membership page or speak with a representative to learn about eligibility requirements.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
