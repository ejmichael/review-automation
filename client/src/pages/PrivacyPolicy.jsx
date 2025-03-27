import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="text-left font-sans text-gray-900 px-4 py-8 md:px-12 md:py-16 max-w-screen-md mx-auto">
      <h1 className="text-center text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-lg mb-6"><strong>Effective Date:</strong> 2024-12-23</p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
      {/* <p className="text-lg mb-6">
        Welcome to [Your Business Name]! We value your privacy and are committed to protecting your personal data.
        This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit
        our website [your website address] or use our services.
      </p> */}
      <p className="text-lg mb-6">
        By using our website or submitting personal information, you agree to the collection and use of information in accordance with this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-6 text-lg">
        <li><strong>Personal Identification Information:</strong> This includes your name, email address, phone number, postal address, and other identifiable details.</li>
        <li><strong>Payment Information:</strong> If you make a purchase or subscribe to our services, we may collect payment details such as credit card information. Payments are processed through a secure third-party payment processor.</li>
        <li><strong>Usage Data:</strong> We may collect information on how you interact with our website, such as the pages you visit, time spent on the site, and other diagnostic data. This is collected through cookies and similar tracking technologies.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
      <p className="text-lg mb-6">We use the personal data we collect for the following purposes:</p>
      <ul className="list-disc pl-6 mb-6 text-lg">
        <li>To process transactions and fulfill orders.</li>
        <li>To communicate with you, including sending order confirmations, customer support, and marketing communications.</li>
        <li>To improve our website and services.</li>
        <li>To comply with legal obligations, resolve disputes, and enforce our agreements.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies and Tracking Technologies</h2>
      <p className="text-lg mb-6">
        We use cookies and similar technologies (e.g., web beacons, pixels) to enhance your user experience. Cookies are small files stored on your device to remember your preferences and improve the functionality of our website.
      </p>
      <p className="text-lg mb-6">
        You can adjust your browser settings to block or delete cookies, but this may impact your ability to use certain features of the website.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
      <p className="text-lg mb-6">
        We implement security measures to safeguard your personal information and protect it from unauthorized access, alteration, or destruction.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to This Privacy Policy</h2>
      <p className="text-lg mb-6">
        We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date". Please review this Privacy Policy periodically for any updates.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Us</h2>
      <p className="text-lg mb-6">
        If you have any questions about this Privacy Policy, please contact us at ethan@easy-outreach.com.
      </p>
    </div>
  )
}

export default PrivacyPolicy
