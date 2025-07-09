import React from 'react';
import { Scale, FileText, AlertCircle, CheckCircle, XCircle, Users } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedElement from '../components/common/AnimatedElement';
import { Helmet } from 'react-helmet';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Chetana Business Solutions - Service Agreement</title>
        <meta
          name="description"
          content="Read the Terms of Service for Chetana Business Solutions. Understand your rights and obligations when using our financial services and loan products."
        />
        <meta
          name="keywords"
          content="Terms of Service, Service Agreement, Chetana Business Solutions, Loan Terms, Financial Services Terms, User Agreement"
        />
        <meta name="author" content="Chetana Business Solutions" />
        <meta property="og:title" content="Terms of Service | Chetana Business Solutions" />
        <meta property="og:description" content="Complete terms of service outlining the use of our financial services and loan products." />
        <meta property="og:url" content="https://www.cbsgroups.in/terms-of-service" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-primary text-white">
          <div className="container">
            <AnimatedElement>
              <div className="max-w-4xl mx-auto text-center">
                <Scale className="w-16 h-16 mx-auto mb-6 text-white" />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
                <p className="text-lg text-gray-200 mb-6">
                  These terms govern your use of Chetana Business Solutions' services and establish the legal framework for our business relationship.
                </p>
                <p className="text-lg text-gray-200">
                  Please read these terms carefully before using our services or applying for any financial products.
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

        {/* Terms Overview */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <SectionTitle
                title="Service Agreement Overview"
                subtitle="Understanding your rights and responsibilities"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <AnimatedElement className="card p-6 text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
                  <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
                  <p className="text-text-light">Clear information about your rights as a customer and service user.</p>
                </AnimatedElement>
                
                <AnimatedElement delay={1} className="card p-6 text-center">
                  <AlertCircle className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                  <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
                  <p className="text-text-light">Your obligations and responsibilities when using our services.</p>
                </AnimatedElement>
                
                <AnimatedElement delay={2} className="card p-6 text-center">
                  <XCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
                  <h3 className="text-xl font-semibold mb-2">Limitations</h3>
                  <p className="text-text-light">Service limitations and restrictions that apply to all users.</p>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 md:py-20 bg-light">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-10">
                
                <AnimatedElement className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">1. Acceptance of Terms</h2>
                  <div className="space-y-4 text-text-light">
                    <p>By accessing or using any services provided by Chetana Business Solutions ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services.</p>
                    <p>These Terms apply to all users of our services, including:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Website visitors and users</li>
                      <li>Loan applicants and borrowers</li>
                      <li>Business clients and partners</li>
                      <li>Any person or entity accessing our services</li>
                    </ul>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={1} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">2. About Our Services</h2>
                  <div className="space-y-4 text-text-light">
                    <p>Chetana Business Solutions is a financial services company that provides:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Business Loans:</strong> Unsecured and secured business financing solutions</li>
                      <li><strong>Personal Loans:</strong> Individual financing through partner banks</li>
                      <li><strong>SME Loans:</strong> Small and medium enterprise financing</li>
                      <li><strong>Working Capital Loans:</strong> Short-term business financing</li>
                      <li><strong>Cheque-based Loans:</strong> Financing against post-dated cheques</li>
                      <li><strong>Financial Consultation:</strong> Advisory services for business growth</li>
                    </ul>
                    <p className="mt-4">We operate in Chennai, Pondicherry, Hyderabad, and Bangalore, providing services since 2009.</p>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={2} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">3. Eligibility and Account Registration</h2>
                  <div className="space-y-4 text-text-light">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Eligibility Requirements</h3>
                      <p className="mb-2">To use our services, you must:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Be at least 18 years old</li>
                        <li>Be a legal resident of India</li>
                        <li>Have a valid PAN card and Aadhaar card</li>
                        <li>Provide accurate and complete information</li>
                        <li>Not be restricted by any legal or regulatory authority</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Account Security</h3>
                      <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={3} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">4. Loan Application Process</h2>
                  <div className="space-y-4 text-text-light">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Application Submission</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>All information provided must be accurate and complete</li>
                        <li>You authorize us to verify information with third parties</li>
                        <li>We may require additional documentation at any time</li>
                        <li>Application does not guarantee loan approval</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Credit Assessment</h3>
                      <p>We reserve the right to:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Check your credit history with CIBIL and other bureaus</li>
                        <li>Verify your income and employment status</li>
                        <li>Request additional financial documentation</li>
                        <li>Decline applications that don't meet our criteria</li>
                      </ul>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={4} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">5. Loan Terms and Conditions</h2>
                  <div className="space-y-4 text-text-light">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Interest Rates and Fees</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Interest rates are determined based on credit assessment</li>
                        <li>All fees and charges will be clearly disclosed</li>
                        <li>Rates may vary based on loan type and duration</li>
                        <li>Processing fees are non-refundable</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Repayment Terms</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Repayment schedule will be provided upon loan approval</li>
                        <li>Late payment may result in additional charges</li>
                        <li>Early repayment may be subject to prepayment penalties</li>
                        <li>All payments must be made through approved channels</li>
                      </ul>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={5} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">6. User Obligations</h2>
                  <div className="space-y-4 text-text-light">
                    <p>As a user of our services, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate and truthful information</li>
                      <li>Maintain updated contact and financial information</li>
                      <li>Use services only for lawful purposes</li>
                      <li>Not attempt to defraud or misrepresent your financial situation</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Notify us immediately of any changes in your financial status</li>
                      <li>Maintain confidentiality of your account information</li>
                    </ul>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={6} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">7. Prohibited Activities</h2>
                  <div className="space-y-4 text-text-light">
                    <p>You may not:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide false or misleading information</li>
                      <li>Use our services for illegal activities</li>
                      <li>Attempt to circumvent our security measures</li>
                      <li>Interfere with the proper functioning of our services</li>
                      <li>Violate any applicable laws or regulations</li>
                      <li>Use automated systems to access our services</li>
                      <li>Resell or transfer your account to others</li>
                    </ul>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={7} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">8. Privacy and Data Protection</h2>
                  <div className="space-y-4 text-text-light">
                    <p>Your privacy is important to us. By using our services, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Our collection and use of your personal information as described in our Privacy Policy</li>
                      <li>Sharing your information with partner banks and financial institutions</li>
                      <li>Credit bureau reporting and information sharing</li>
                      <li>Compliance with regulatory reporting requirements</li>
                    </ul>
                    <p className="mt-4">Please review our Privacy Policy for detailed information about how we handle your data.</p>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={8} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">9. Disclaimers and Limitations</h2>
                  <div className="space-y-4 text-text-light">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Service Availability</h3>
                      <p>We do not guarantee uninterrupted or error-free service. Our services may be temporarily unavailable due to maintenance, technical issues, or other factors beyond our control.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Limitation of Liability</h3>
                      <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={9} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">10. Termination</h2>
                  <div className="space-y-4 text-text-light">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Termination by You</h3>
                      <p>You may terminate your account at any time by contacting us, subject to fulfilling all outstanding obligations.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Termination by Us</h3>
                      <p>We may terminate or suspend your access to our services immediately if:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>You breach these Terms of Service</li>
                        <li>You provide false or misleading information</li>
                        <li>You engage in fraudulent activities</li>
                        <li>Your account remains inactive for an extended period</li>
                        <li>Required by law or regulatory authorities</li>
                      </ul>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={10} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">11. Governing Law and Dispute Resolution</h2>
                  <div className="space-y-4 text-text-light">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Governing Law</h3>
                      <p>These Terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of courts in Chennai, Tamil Nadu.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Dispute Resolution</h3>
                      <p>We encourage resolving disputes through direct communication. If formal resolution is required:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>First attempt resolution through our customer service</li>
                        <li>Mediation may be pursued before litigation</li>
                        <li>All legal proceedings must be conducted in Chennai, Tamil Nadu</li>
                        <li>You may also approach banking ombudsman for loan-related disputes</li>
                      </ul>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={11} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">12. Regulatory Compliance</h2>
                  <div className="space-y-4 text-text-light">
                    <p>Our services are subject to various regulatory requirements including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Reserve Bank of India (RBI) guidelines</li>
                      <li>Prevention of Money Laundering Act (PMLA)</li>
                      <li>Foreign Exchange Management Act (FEMA)</li>
                      <li>Income Tax Act and regulations</li>
                      <li>Companies Act and corporate governance requirements</li>
                    </ul>
                    <p className="mt-4">We reserve the right to implement additional compliance measures as required by law.</p>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={12} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">13. Changes to Terms</h2>
                  <div className="space-y-4 text-text-light">
                    <p>We may update these Terms of Service from time to time. When we make changes, we will:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Post the updated Terms on our website</li>
                      <li>Send email notifications to registered users</li>
                      <li>Provide at least 30 days' notice for material changes</li>
                      <li>Update the "Last Updated" date</li>
                    </ul>
                    <p className="mt-4">Your continued use of our services after changes take effect constitutes acceptance of the updated Terms.</p>
                  </div>
                </AnimatedElement>

                <AnimatedElement delay={13} className="card p-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary">14. Contact Information</h2>
                  <div className="space-y-4 text-text-light">
                    <p>If you have questions about these Terms of Service, please contact us:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <h3 className="font-semibold mb-2">Business Head</h3>
                        <p>Pradeep Babu T</p>
                        <p>Email:pradeep@cbsgroups.in</p>
                        <p>Phone: +91 98410 78770</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Registered Office</h3>
                        <p>Chetana Business Solutions</p>
                        <p>Chennai, Tamil Nadu</p>
                        <p>India</p>
                      </div>
                    </div>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Clarification?</h2>
                <p className="text-lg text-gray-200 mb-8">
                  If you have any questions about these Terms of Service or need assistance with our services, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="btn btn-secondary btn-lg">
                    Contact Us
                  </a>
                  <a href="/loans/business" className="btn btn-lg bg-white text-primary hover:bg-gray-100">
                    Apply for Loan
                  </a>
                </div>
                <div className="mt-8 text-sm text-gray-300">
                  <p>These terms are effective as of January 2025</p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsOfServicePage;