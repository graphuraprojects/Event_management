import React from 'react'
import Footer from '../pages/Footer1'
import Navbar from './Navbar'

const Cookie = () => {
    return (
        <>
        <Navbar />
            <div className="min-h-screen bg-gray-100 py-10 px-6 mt-15">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        Cookie Policy
                    </h1>

                    <p className="text-gray-700 mb-4">
                        This Cookie Policy explains how we use cookies and similar tracking
                        technologies when you visit our website. By continuing to browse our
                        site, you agree to our use of cookies.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        1. What Are Cookies?
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Cookies are small text files stored on your device when you visit a
                        website. They help improve user experience by remembering your
                        preferences, login details, and site activity.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        2. Types of Cookies We Use
                    </h2>
                    <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-2">
                        <li>
                            <strong>Essential Cookies:</strong> Needed for the website to
                            function properly.
                        </li>
                        <li>
                            <strong>Analytics Cookies:</strong> Help us understand how users
                            interact with the website.
                        </li>
                        <li>
                            <strong>Functional Cookies:</strong> Remember user preferences.
                        </li>
                        <li>
                            <strong>Advertising Cookies:</strong> Deliver personalized ads.
                        </li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        3. Why We Use Cookies
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We use cookies to:
                    </p>
                    <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-2">
                        <li>Improve website performance</li>
                        <li>Enhance user experience</li>
                        <li>Analyze website traffic</li>
                        <li>Personalize content and ads</li>
                    </ul>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        4. How to Control Cookies
                    </h2>
                    <p className="text-gray-700 mb-4">
                        You can manage or disable cookies in your browser settings. However,
                        disabling certain cookies may affect your browsing experience.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        5. Changes to This Cookie Policy
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We may update this Cookie Policy from time to time. Any changes will
                        be posted on this page with an updated revision date.
                    </p>

                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                        6. Contact Us
                    </h2>
                    <p className="text-gray-700">
                        If you have any questions about our Cookie Policy, please contact us
                        at <strong>support@example.com</strong>.
                    </p>
                </div>
            </div>
            <Footer />
           </>
    )
}

export default Cookie;
