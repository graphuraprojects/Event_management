import React from "react";
import Footer from "../pages/Footer1";
import Navbar from "./Navbar";

const TermsOfUse = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20 text-gray-800 mt-10" >
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms of Use – Graphura India Private Limited
        </h1>

        <p className="mb-6">
          Welcome to Graphura, a professional event management service provider. 
          By accessing or using our website, booking platform, or services, you 
          agree to comply with the following Terms of Use. Please read them carefully.
        </p>

        {/* 1 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using our platform or booking any Graphura event services, you agree 
          to be bound by these Terms of Use. If you do not agree, please discontinue 
          using the website and services.
        </p>

        {/* 2 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">2. Services Offered</h2>
        <p className="mb-4">
          Graphura provides event management solutions including—but not limited to—
          weddings, corporate events, cultural events, private celebrations, 
          branding events, and hospitality support. Service details may vary based 
          on availability, client requirements, and event type.
        </p>

        {/* 3 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Booking & Payments</h2>
        <p className="mb-4">
          All bookings require confirmation through email, phone, or our website 
          booking system. Certain services may require advance payments or security 
          deposits. Failure to make payments on time may result in cancellation.
        </p>

        {/* 4 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Cancellation & Refunds</h2>
        <p className="mb-4">
          Cancellation policies vary by service type. Clients must notify Graphura 
          regarding cancellations within the specified timeframe for refunds (if 
          applicable). Non-refundable service components may include venue bookings, 
          staff charges, decorations, or third-party vendor expenses already incurred.
        </p>

        {/* 5 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Client Responsibilities</h2>
        <p className="mb-4">
          Clients must provide accurate event details, cooperate with our team, and 
          ensure compliance with venue rules. Any damage caused during the event 
          will be the client's responsibility.
        </p>

        {/* 6 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Intellectual Property</h2>
        <p className="mb-4">
          All content, branding, logos, event designs, photographs, and media 
          created by Graphura are protected intellectual property. Unauthorized 
          reproduction, distribution, or use without permission is prohibited.
        </p>

        {/* 7 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">7. Third-Party Vendors</h2>
        <p className="mb-4">
          Graphura may collaborate with external vendors for catering, photography, 
          sound, lighting, décor, etc. We are not responsible for any issues arising 
          directly from third-party services, although we assist in resolution 
          whenever possible.
        </p>

        {/* 8 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Limitation of Liability</h2>
        <p className="mb-4">
          Graphura is not liable for delays, damages, or cancellations caused by 
          natural disasters, government restrictions, venue issues, or factors 
          beyond our control. Our liability is limited to the amount paid for the service.
        </p>

        {/* 9 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">9. Modifications to Terms</h2>
        <p className="mb-4">
          Graphura reserves the right to update, modify, or change these Terms of 
          Use at any time. Continued use of our website or services indicates your 
          acceptance of the revised terms.
        </p>

        {/* 10 */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">10. Contact Information</h2>
        <p className="mb-4">
          For questions regarding these Terms of Use or our services, please contact us at:
          <br /> <strong>Email:</strong> official@graphura.in
          <br /> <strong>Phone:</strong> +91 7378021327
        </p>

        <p className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Graphura India Private Limited. All rights reserved.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TermsOfUse;
