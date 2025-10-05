import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have questions about HackForge? Want to join our community? We'd
            love to hear from you!
          </p>
        </div>

        {/* Google Map */}
        <div className="mt-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Located in the heart of Erode, Al-Ameen Engineering College is
              easily accessible by public transport.
            </p>
          </div>

          <div className="h-96 bg-gray-200 dark:bg-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773064.05684503!2d61.04182762828652!3d19.69228278198373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9654cc89b898f%3A0x288d55f2d41699b9!2sAl-Ameen%20Engineering%20College%20(Autonomous)!5e0!3m2!1sen!2sin!4v1758119449987!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
