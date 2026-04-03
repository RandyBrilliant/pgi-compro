import type { Metadata } from "next";
import Image from "next/image";
import { Container, Section } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 1, 2026";

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-pgi-black pt-32 relative overflow-hidden">
        {/* Subtle background image */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ opacity: 0.05 }}>
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
              alt="Privacy and security concept"
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
              Privacy Policy
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
                    At {siteConfig.name} ("{siteConfig.shortName}", "we", "us", or "our"), we are committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                    or use our services.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    1. Information We Collect
                  </h2>
                  
                  <h3 className="font-display text-xl font-semibold text-pgi-gray-100 mb-4 mt-8">
                    1.1 Personal Information
                  </h3>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-pgi-gray-300 space-y-2 mb-6 ml-4">
                    <li>Fill out contact forms or request information</li>
                    <li>Subscribe to our newsletters or marketing communications</li>
                    <li>Register for an account on our website</li>
                    <li>Participate in surveys or promotions</li>
                    <li>Communicate with us via email, phone, or other channels</li>
                  </ul>

                  <h3 className="font-display text-xl font-semibold text-pgi-gray-100 mb-4 mt-8">
                    1.2 Automatically Collected Information
                  </h3>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside text-pgi-gray-300 space-y-2 mb-6 ml-4">
                    <li>IP address and browser type</li>
                    <li>Operating system and device information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website addresses</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                {/* How We Use Your Information */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-pgi-gray-300 space-y-2 mb-6 ml-4">
                    <li>To provide, operate, and maintain our services</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                    <li>To improve our website and services</li>
                    <li>To analyze usage patterns and optimize user experience</li>
                    <li>To detect, prevent, and address technical issues or fraudulent activities</li>
                    <li>To comply with legal obligations and protect our rights</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    3. Information Sharing and Disclosure
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-pgi-gray-300 space-y-2 mb-6 ml-4">
                    <li><strong className="text-pgi-gray-100">Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and delivering our services</li>
                    <li><strong className="text-pgi-gray-100">Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                    <li><strong className="text-pgi-gray-100">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong className="text-pgi-gray-100">Consent:</strong> With your explicit consent for specific purposes</li>
                  </ul>
                </div>

                {/* Data Security */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    4. Data Security
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
                    alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, 
                    and we cannot guarantee absolute security.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    5. Your Privacy Rights
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-pgi-gray-300 space-y-2 mb-6 ml-4">
                    <li>The right to access and receive a copy of your personal data</li>
                    <li>The right to rectify or update inaccurate information</li>
                    <li>The right to request deletion of your personal data</li>
                    <li>The right to restrict or object to certain processing activities</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent at any time</li>
                  </ul>
                  <p className="text-pgi-gray-300 leading-relaxed">
                    To exercise these rights, please contact us at {siteConfig.contact.email}.
                  </p>
                </div>

                {/* Cookies */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    6. Cookies and Tracking Technologies
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
                    if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </div>

                {/* Third-Party Links */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    7. Third-Party Links
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. 
                    We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    8. Children's Privacy
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. 
                    If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    9. Changes to This Privacy Policy
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                    and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-12">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-pgi-gray-100 mb-6">
                    10. Contact Us
                  </h2>
                  <p className="text-pgi-gray-300 leading-relaxed mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="p-6 bg-pgi-dark border border-pgi-charcoal rounded-lg mt-6">
                    <p className="text-pgi-gray-100 font-semibold mb-2">{siteConfig.name}</p>
                    <p className="text-pgi-gray-300 mb-1">{siteConfig.contact.address}</p>
                    <p className="text-pgi-gray-300 mb-1">{siteConfig.contact.city}, {siteConfig.contact.country}</p>
                    <p className="text-pgi-gray-300 mb-1">Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-pgi-gold hover:text-pgi-gold-light transition-colors">{siteConfig.contact.email}</a></p>
                    <p className="text-pgi-gray-300">Phone: <a href={`tel:${siteConfig.contact.phone}`} className="text-pgi-gold hover:text-pgi-gold-light transition-colors">{siteConfig.contact.phone}</a></p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
