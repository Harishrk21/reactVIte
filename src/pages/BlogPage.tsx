import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Bookmark, Share2, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import AnimatedElement from '../components/common/AnimatedElement';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Categories');

  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Financial Strategies for MSMEs in 2025',
      excerpt: 'Discover the most effective financial strategies that are helping MSMEs thrive in the current economic landscape.',
      date: 'April 15, 2025',
      author: 'Anand Sharma',
      category: 'Business Finance',
      image: 'https://images.pexels.com/photos/7567437/pexels-photo-7567437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      externalResources: [
        {
          title: 'World Bank MSME Finance Guide',
          url: 'https://www.worldbank.org/en/topic/smefinance'
        },
        {
          title: 'IMF Financial Strategies Report',
          url: 'https://www.imf.org/en/Publications'
        }
      ]
    },
    {
      id: 2,
      title: 'Understanding Working Capital Requirements for Seasonal Businesses',
      excerpt: 'Learn how to calculate and manage working capital needs for businesses with seasonal fluctuations in revenue.',
      date: 'March 28, 2025',
      author: 'Priya Mehta',
      category: 'Working Capital',
      image: 'https://images.pexels.com/photos/7363183/pexels-photo-7363183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      externalResources: [
        {
          title: 'Working Capital Calculator Tool',
          url: 'https://www.omnicalculator.com/finance/working-capital'
        }
      ]
    },
    {
      id: 3,
      title: 'How to Improve Your Business Credit Score',
      excerpt: 'Practical steps to build and improve your business credit profile to secure better loan terms and higher credit limits.',
      date: 'March 10, 2025',
      author: 'Vijay Kumar',
      category: 'Credit Management',
      image: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      externalResources: [
        {
          title: 'Dun & Bradstreet Credit Builder',
          url: 'https://www.dnb.com/'
        },
        {
          title: 'SBA Credit Preparation Guide',
          url: 'https://www.sba.gov/business-guide/plan-your-business/establish-business-credit'
        }
      ]
    },
    {
      id: 4,
      title: 'The Impact of Digital Transformation on Small Business Financing',
      excerpt: 'Explore how technology is changing the landscape of business financing and creating new opportunities for growth.',
      date: 'February 22, 2025',
      author: 'Anand Sharma',
      category: 'Business Finance',
      image: 'https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      externalResources: [
        {
          title: 'Fintech Innovation Report',
          url: 'https://www.pwc.in/assets/pdfs/mapping-the-fintech-innovation-landscape-in-india.pdf'
        }
      ]
    },
    {
      id: 5,
      title: 'Government Schemes for MSMEs: A Complete Guide',
      excerpt: 'A comprehensive overview of the latest government initiatives and schemes designed to support MSME growth and development.',
      date: 'February 15, 2025',
      author: 'Priya Mehta',
      category: 'MSME Finance',
      image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      externalResources: [
        {
          title: 'MSME Government Portal',
          url: 'https://msme.gov.in/'
        },
        {
          title: 'Startup India Initiative',
          url: 'https://www.startupindia.gov.in/'
        }
      ]
    },
    {
      id: 6,
      title: 'Project Financing vs. Traditional Business Loans: Which is Right for You?',
      excerpt: 'Compare the features, benefits, and drawbacks of project financing and traditional business loans to make an informed decision.',
      date: 'January 30, 2025',
      author: 'Vijay Kumar',
      category: 'Project Finance',
      image: 'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      externalResources: [
        {
          title: 'Project Finance International',
          url: 'https://www.pfie.com/'
        }
      ]
    }
  ];

  const categories = [
    'All Categories',
    'Business Finance',
    'Working Capital',
    'Credit Management',
    'MSME Finance',
    'Project Finance'
  ];

  const filteredPosts = blogPosts.filter((post) =>
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (activeCategory === 'All Categories' || post.category === activeCategory)
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container text-center">
          <AnimatedElement>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Business Finance Insights</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Expert advice, industry updates, and practical strategies to help your business thrive financially.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Search and Filter Bar */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <div className="flex-shrink-0">
                    <select
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      value={activeCategory}
                      onChange={(e) => setActiveCategory(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Featured Post */}
              {filteredPosts.length > 0 && (
                <div className="mb-12">
                  <AnimatedElement>
                    <div className="card overflow-hidden">
                      <div className="relative h-80">
                        <img
                          src={filteredPosts[0].image}
                          alt={filteredPosts[0].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <span className="inline-block bg-white text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                            Featured
                          </span>
                          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{filteredPosts[0].title}</h2>
                          <p className="text-gray-200 mb-4 line-clamp-2">{filteredPosts[0].excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                              <span>{filteredPosts[0].date}</span>
                              <span>•</span>
                              <span>{filteredPosts[0].author}</span>
                            </div>
                            <Link
                              to={`/blog/${filteredPosts[0].id}`}
                              className="btn btn-secondary btn-sm"
                            >
                              Read Article
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>
              )}

              {/* Articles Grid */}
              <div className="mb-12">
                <SectionTitle title="Latest Articles" subtitle="Stay informed with our expert financial insights" />
                
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.slice(1).map((post, index) => (
                      <AnimatedElement key={post.id} delay={index % 2} className="h-full">
                        <div className="card h-full flex flex-col group hover:shadow-md transition-shadow">
                          <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute top-4 right-4 flex gap-2">
                              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-gray-800 hover:bg-primary hover:text-white transition-colors">
                                <Bookmark size={16} />
                              </button>
                              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-gray-800 hover:bg-primary hover:text-white transition-colors">
                                <Share2 size={16} />
                              </button>
                            </div>
                          </div>
                          <div className="p-6 flex-grow">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium text-primary">{post.category}</span>
                              <span className="text-sm text-gray-500">{post.date}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                            
                            {post.externalResources && post.externalResources.length > 0 && (
                              <div className="mb-4">
                                <h4 className="text-sm font-medium text-gray-500 mb-1">External Resources:</h4>
                                <ul className="space-y-1">
                                  {post.externalResources.map((resource, i) => (
                                    <li key={i}>
                                      <a 
                                        href={resource.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-sm text-primary hover:text-secondary flex items-center"
                                      >
                                        {resource.title} <ExternalLink size={14} className="ml-1" />
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            <div className="flex items-center justify-between mt-4">
                              <span className="text-sm text-gray-500 flex items-center">
                                <User size={14} className="mr-1" /> {post.author}
                              </span>
                              <Link
                                to={`/blog/${post.id}`}
                                className="text-primary font-medium hover:text-secondary transition-colors flex items-center"
                              >
                                Read More <ArrowRight size={16} className="ml-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </AnimatedElement>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                    <p className="text-gray-600 mb-4">
                      Try adjusting your search or browse all our articles by clearing the filters.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setActiveCategory('All Categories');
                      }}
                      className="btn btn-outline"
                    >
                      View All Articles
                    </button>
                  </div>
                )}
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-8 text-white">
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
                  <p className="text-gray-200 mb-6">
                    Subscribe to our newsletter for the latest financial insights delivered to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button className="btn btn-secondary btn-md whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-gray-300 mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-6">
                {/* Popular Tags */}
                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Finance', 'MSME', 'Credit', 'Loans', 'Investment', 'Strategy', 'Growth', 'Funding'].map((tag) => (
                      <button
                        key={tag}
                        className="px-3 py-1 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm transition-colors"
                        onClick={() => setSearchTerm(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-4">Helpful Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="https://www.rbi.org.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-secondary"
                      >
                        <ExternalLink size={14} className="mr-2" /> Reserve Bank of India
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.sidbi.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-secondary"
                      >
                        <ExternalLink size={14} className="mr-2" /> SIDBI - MSME Financing
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.cibil.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-secondary"
                      >
                        <ExternalLink size={14} className="mr-2" /> CIBIL Score Check
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.investindia.gov.in/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-secondary"
                      >
                        <ExternalLink size={14} className="mr-2" /> Invest India Portal
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Popular Articles */}
                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-4">Most Read</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-medium text-sm mb-1 line-clamp-2">{post.title}</h4>
                          <Link 
                            to={`/blog/${post.id}`} 
                            className="text-xs text-primary hover:text-secondary"
                          >
                            Read Article
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="card p-6 bg-primary text-white">
                  <h3 className="text-xl font-semibold mb-3">Need Financial Advice?</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    Our financial experts are ready to help your business grow.
                  </p>
                  <Link to="/contact" className="btn btn-white btn-sm w-full">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;