import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedElement from '../components/common/AnimatedElement';
import { Helmet } from 'react-helmet';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Chetana Business Solutions - Your Data Protection Rights</title>
        <meta
          name="description"
          content="Learn how Chetana Business Solutions protects your personal information and data privacy. Read our comprehensive privacy policy covering data collection, usage, and security measures."
        />
        <meta
          name="keywords"
          content="Privacy Policy, Data Protection, Chetana Business Solutions, Personal Information, Data Security, Financial Services Privacy"
        />
        <meta name="author" content="Chetana Business Solutions" />
        <meta property="og:title" content="Privacy Policy | Chetana Business Solutions" />
        <meta property="og:description" content="Comprehensive privacy policy outlining how we protect your personal information and data rights." />
        <meta property="og:url" content="https://www.cbsgroups.in/privacy-policy" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-primary text-white">
          <div className="container">
            <AnimatedElement>
              <div className="max-w-4xl mx-auto text-center">
                <Shield className="w-16 h-16 mx-auto mb-6 text-white" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
                <p className="text-lg text-gray-200 mb-6">
                  At Chetana Business Solutions, we are committed to protecting your privacy and ensuring the security of your personal information.
                </p>
                <p className="text-lg text-gray-200">
                  This Privacy Policy explains how we collect, use, store, and protect your information when you use our services.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-8 bg-light">
          <div className="container">
            <AnimatedElement>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm text-gray-600">
                  <strong>Last Updated:</strong> July 2025
                </p>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <SectionTitle
                title="Our Privacy Commitment"
                subtitle="Understanding how we protect your personal information"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <AnimatedElement className="card p-6 text-center">
                  <Lock className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Data Security</h3>
                  <p className="text-text-light">We use industry-standard encryption and security measures to protect your data.</p>
                </AnimatedElement>
                
                <AnimatedElement delay={1} className="card p-6 text-center">
                  <Eye className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                  <p className="text-text-light">Clear information about what data we collect and how we use it.</p>
                </AnimatedElement>
                
                <AnimatedElement delay={2} className="card p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
                  <p className="text-text-light">You have full control over your personal information and data preferences.</p>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-10">
                
                <AnimatedElement className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">1. Information We Collect</h2>
                  <div className="space-y-4 text-text-light">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                      <p className="mb-2">When you apply for our financial services, we collect:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Full name, date of birth, and contact details</li>
                        <li>Address and identification documents</li>
                        <li>Financial information including income, bank statements, and credit history</li>
                        <li>Business information for commercial loans</li>
                        <li>Employment details and references</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Technical Information</h3>
                      <p className="mb-2">We automatically collect certain information when you visit our website:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>IP address and device information</li>
                        <li>Browser type and version</li>
                        <li>Pages visited and time spent on site</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={1} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">2. How We Use Your Information</h2>
                  <div className="space-y-4 text-text-light">
                    <p>We use your personal information for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Loan Processing:</strong> To assess your eligibility and process loan applications</li>
                      <li><strong>Identity Verification:</strong> To verify your identity and prevent fraud</li>
                      <li><strong>Credit Assessment:</strong> To evaluate your creditworthiness through CIBIL and other credit bureaus</li>
                      <li><strong>Service Delivery:</strong> To provide our financial services and customer support</li>
                      <li><strong>Communication:</strong> To send you updates about your application and account</li>
                      <li><strong>Legal Compliance:</strong> To comply with regulatory requirements and legal obligations</li>
                      <li><strong>Marketing:</strong> To send you relevant offers and updates (with your consent)</li>
                    </ul>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={2} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">3. Information Sharing</h2>
                  <div className="space-y-4 text-text-light">
                    <p>We may share your information with:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Financial Partners:</strong> Banks and NBFCs for loan processing and disbursement</li>
                      <li><strong>Credit Bureaus:</strong> CIBIL, Experian, Equifax for credit assessment</li>
                      <li><strong>Regulatory Bodies:</strong> RBI, SEBI, and other authorities as required by law</li>
                      <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations</li>
                      <li><strong>Legal Authorities:</strong> When required by law or court order</li>
                    </ul>
                    <p className="mt-4 font-medium">We do not sell your personal information to third parties for marketing purposes.</p>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={3} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">4. Data Security</h2>
                  <div className="space-y-4 text-text-light">
                    <p>We implement robust security measures to protect your data:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>SSL encryption for all data transmissions</li>
                      <li>Secure servers with firewall protection</li>
                      <li>Regular security audits and updates</li>
                      <li>Access controls and employee training</li>
                      <li>Data backup and recovery procedures</li>
                    </ul>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={4} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">5. Your Rights</h2>
                  <div className="space-y-4 text-text-light">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Access:</strong> Request copies of your personal data</li>
                      <li><strong>Rectification:</strong> Update or correct inaccurate information</li>
                      <li><strong>Erasure:</strong> Request deletion of your data (subject to legal requirements)</li>
                      <li><strong>Restriction:</strong> Limit the processing of your data</li>
                      <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                      <li><strong>Objection:</strong> Object to certain types of processing</li>
                      <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                    </ul>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={5} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">6. Data Retention</h2>
                  <div className="space-y-4 text-text-light">
                    <p>We retain your personal information for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Active loan duration plus 3 years for loan-related documents</li>
                      <li>7 years for financial records as per regulatory requirements</li>
                      <li>Until you withdraw consent for marketing communications</li>
                      <li>As required by applicable laws and regulations</li>
                    </ul>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={6} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">7. Cookies and Tracking</h2>
                  <div className="space-y-4 text-text-light">
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Improve website functionality and user experience</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Remember your preferences and settings</li>
                      <li>Provide targeted advertising and content</li>
                    </ul>
                    <p className="mt-4">You can control cookie settings through your browser preferences.</p>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={7} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">8. Updates to Privacy Policy</h2>
                  <div className="space-y-4 text-text-light">
                    <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Posting the updated policy on our website</li>
                      <li>Sending email notifications to registered users</li>
                      <li>Displaying prominent notices on our platform</li>
                    </ul>
                  </div>
                </AnimatedElement>

              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-primary text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedElement>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Privacy Questions?</h2>
                <p className="text-lg text-gray-200 mb-8">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please contact us.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  <div className="bg-white/10 p-6 rounded-lg">
                    <Mail className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-200">pradeep@cbsgroups.in</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <Phone className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-200">+91 98410 78770</p>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;