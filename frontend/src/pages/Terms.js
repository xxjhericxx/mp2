import React from 'react';

// import components
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Terms = () => {


    return (
        <div>
            <Header />
            <Sidebar />
                <div className='flex justify-center'> 
                    <h1 className='text-5xl font-bold mt-5 mb-5'>
                    Terms - Privacy Policy
                    </h1>
                </div>

                <div className="p-4 w-4/6 mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">Privacy Policy</div>
        <p className="text-gray-500">
          <strong>Ecommerce</strong> is committed to protecting your privacy. This Privacy Policy explains how we
          use the information we collect about you, how you can instruct us if you prefer to limit the use of that
          information, and procedures that we have in place to safeguard your privacy.
        </p>

        <h2 className="text-lg font-medium text-black py-2">1. Information Collected and Use</h2>
        <p className="text-gray-500">
          We collect the following types of information when you use our services:
          <ul className="list-disc list-inside">
            <li>
              <strong>Personal Information</strong>: This includes your name, address, telephone number, email
              address, and payment details. This information is used to process orders, manage your account, and if you
              agree, to email you about other products and services we think may be of interest to you.
            </li>
            <li>
              <strong>Non-Personal Information</strong>: This includes data about your browsing behavior, like the
              pages you visited, the length of your visit, your operating system, and your IP address. This information
              is collected for statistical purposes and does not identify any individual.
            </li>
          </ul>
        </p>

        <h2 className="text-lg font-medium text-black py-2">2. Data Protection Measures</h2>
        <p className="text-gray-500">
          We use secure server software (SSL) to encrypt all your personal information. The encryption process
          converts the characters that you enter into code that is then securely transmitted over the Internet.
        </p>

        <h2 className="text-lg font-medium text-black py-2">3. Data Sharing with Third Parties</h2>
        <p className="text-gray-500">
          We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
          This does not include trusted third parties who assist us in operating our website, conducting our business,
          or servicing you, so long as those parties agree to keep this information confidential.
        </p>

        <h2 className="text-lg font-medium text-black py-2">4. User Control Over Data</h2>
        <p className="text-gray-500">
          You have the right to request a copy of the information that we hold about you. If you would like a copy of
          some or all of your personal information, please email or write to us at the following address. We may make a
          small charge for this service.
        </p>

        <h2 className="text-lg font-medium text-black py-2">5. Contact Information</h2>
        <p className="text-gray-500">
          If you have any queries about our Privacy Policy, please contact us through our website's Contact Page.
        </p>

        <p className="text-gray-500 pt-4">
          <strong>Ecommerce</strong> reserves the right to change this Privacy Policy as we may deem necessary from
          time to time or as may be required by law. Any changes will be immediately posted on the website and you are
          deemed to have accepted the terms of the Privacy Policy on your first use of the website following the alterations.
        </p>
      </div>
    </div>

            <Footer />
        </div>
    );
};

export default Terms;
