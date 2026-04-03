import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}. Review the terms and conditions for using our website and services.`,
};

export default function TermsOfServicePage() {
  const lastUpdated = "April 1, 2026";

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-pgi-black pt-32 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ opacity: 0.05 }}>
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80"
              alt="Legal documents concept"
              fill
              className="object-cover grayscale"
              sizes="100vw"
              priority
              quality={60}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-pgi-black via-transparent to-pgi-black" />
        </div>
        
        <Container className="relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <span className="inline-block mb-4 text-sm font-medium uppercase tracking-widest text-pgi-gold">
              Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-pgi-gray-100 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-pgi-gray-300">
              Last updated: {lastUpdated}
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* Content Section */}
      <Section className="bg-pgi-black">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="prose prose-invert prose-lg max-w-none">
                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-pgi-gray-300 leading-relaxed">
                    Welcome to {siteConfig.name} ("{siteConfig.shortName}", "we", "us", or "our"). These Terms of Service ("Terms") govern your 
                    access to and use of our website, services, and products. By accessing or using our services, you agree to be bound by these Terms. 
                    If you do not agree to these Terms, please do not use our services.
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms, 
                    as well as our Privacy Policy. These Terms apply to all visitors, users, and others who access or use our services.
                  </p>
                  <p className="text-pgi-gray-300 leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. 
                    Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
                  </p>
                </div>

                {/* Use of Services */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    2. Use of Our Services
                  </h2>
                  
                  <h3 className="font-display text-xl font-semibold text-pgi-gray-100 mb-4 mt-8">
                    2.1 Eligibility
                  </h3>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    You must be at least 18 years old and capable of forming a binding contract to use our services. 
                    By using our services, you represent and warrant that you meet these eligibility requirements.
                  </p>

                  <h3 className="font-display text-xl font-semibold text-pgi-gray-100 mb-4 mt-8">
                    2.2 Account Registration
                  </h3>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    Some features of our services may require you to register for an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-pgi-gray-300 space-y-2 mb-6 ml-4">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-pgi-gray-100 mb-4 mt-8">
                    2.3 Prohibited Activities
                  </h3>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    You agree not to engage in any of the following prohibited activities:
                  </p>
                  <ul className="list-disc list-inside text-pgi-gray-300 space-y-2 mb-6 ml-4">
                    <li>Using our services for any illegal or unauthorized purpose</li>
                    <li>Violating any applicable laws, regulations, or third-party rights</li>
                    <li>Transmitting any harmful, offensive, or inappropriate content</li>
                    <li>Attempting to gain unauthorized access to our systems or networks</li>
                    <li>Interfering with or disrupting the operation of our services</li>
                    <li>Impersonating any person or entity or misrepresenting your affiliation</li>
                    <li>Collecting or harvesting any information from our services without permission</li>
                    <li>Using automated systems or software to extract data from our website</li>
                  </ul>
                </div>

                {/* Intellectual Property */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    3. Intellectual Property Rights
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    All content, features, and functionality on our website and services, including but not limited to text, graphics, logos, images, 
                    software, and design, are the exclusive property of {siteConfig.name} or its licensors and are protected by copyright, trademark, 
                    and other intellectual property laws.
                  </p>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, republish, download, store, or transmit 
                    any material from our services without our prior written consent, except as permitted by applicable law.
                  </p>
                </div>

                {/* User Content */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    4. User-Generated Content
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    If you submit, post, or transmit any content through our services ("User Content"), you grant us a non-exclusive, worldwide, 
                    royalty-free, perpetual, and transferable license to use, reproduce, modify, adapt, publish, and display such User Content 
                    in connection with our services.
                  </p>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    You represent and warrant that:
                  </p>
                  <ul className="list-disc list-inside text-pgi-gray-300 space-y-2 mb-6 ml-4">
                    <li>You own or have the necessary rights to the User Content</li>
                    <li>The User Content does not infringe any third-party rights</li>
                    <li>The User Content complies with these Terms and all applicable laws</li>
                  </ul>
                </div>

                {/* Services and Availability */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    5. Service Availability and Modifications
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    We strive to provide reliable and uninterrupted services, but we do not guarantee that our services will be available at all times 
                    or free from errors, viruses, or other harmful components. We reserve the right to:
                  </p>
                  <ul className="list-disc list-inside text-pgi-gray-300 space-y-2 mb-6 ml-4">
                    <li>Modify, suspend, or discontinue any part of our services at any time</li>
                    <li>Impose limits on certain features or restrict access to parts of our services</li>
                    <li>Perform maintenance and updates without prior notice</li>
                  </ul>
                </div>

                {/* Third-Party Services */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    6. Third-Party Links and Services
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    Our services may contain links to third-party websites, services, or resources. We do not endorse or assume any responsibility 
                    for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall 
                    not be liable for any damage or loss caused by your use of such third-party content or services.
                  </p>
                </div>

                {/* Disclaimer of Warranties */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    7. Disclaimer of Warranties
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
                    TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="list-disc list-inside text-pgi-gray-300 space-y-2 mb-6 ml-4">
                    <li>Implied warranties of merchantability and fitness for a particular purpose</li>
                    <li>Warranties regarding the accuracy, reliability, or completeness of our content</li>
                    <li>Warranties that our services will meet your requirements or be uninterrupted, secure, or error-free</li>
                  </ul>
                </div>

                {/* Limitation of Liability */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    8. Limitation of Liability
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, {siteConfig.name.toUpperCase()}, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, 
                    OR AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, 
                    REVENUE, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OUR SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, 
                    OR ANY OTHER LEGAL THEORY.
                  </p>
                </div>

                {/* Indemnification */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    9. Indemnification
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    You agree to indemnify, defend, and hold harmless {siteConfig.name}, its affiliates, officers, directors, employees, and agents 
                    from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or 
                    in connection with:
                  </p>
                  <ul className="list-disc list-inside text-pgi-gray-300 space-y-2 mb-6 ml-4">
                    <li>Your use of our services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any third-party rights</li>
                    <li>Any User Content you submit or transmit</li>
                  </ul>
                </div>

                {/* Governing Law */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    10. Governing Law and Jurisdiction
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions. 
                    Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts located in 
                    Jakarta, Indonesia.
                  </p>
                </div>

                {/* Termination */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    11. Termination
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, 
                    for any reason, including but not limited to your breach of these Terms. Upon termination, your right to use our services 
                    will immediately cease.
                  </p>
                </div>

                {/* Severability */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    12. Severability and Waiver
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect. 
                    Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.
                  </p>
                </div>

                {/* Entire Agreement */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    13. Entire Agreement
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and {siteConfig.name} regarding 
                    your use of our services and supersede all prior agreements and understandings.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    14. Contact Us
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us at:
                  </p>
                  <div className="p-6 bg-pgi-dark border border-pgi-charcoal rounded-lg mt-6">
                    <p className="text-pgi-gray-100 font-semibold mb-2">{siteConfig.name}</p>
                    <p className="text-pgi-gray-300 mb-1">{siteConfig.contact.address}</p>
                    <p className="text-pgi-gray-300 mb-1">{siteConfig.contact.city}, {siteConfig.contact.country}</p>
                    <p className="text-pgi-gray-300 mb-1">Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-pgi-gold hover:text-pgi-gold-light transition-colors">{siteConfig.contact.email}</a></p>
                    <p className="text-pgi-gray-300">Phone: <a href={`tel:${siteConfig.contact.phone}`} className="text-pgi-gold hover:text-pgi-gold-light transition-colors">{siteConfig.contact.phone}</a></p>
                  </div>
                </div>

                {/* Acknowledgment */}
                <div className="mb-12 p-6 bg-pgi-dark border border-pgi-gold/20 rounded-lg">
                  <p className="text-pgi-gray-300 leading-relaxed">
                    By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
