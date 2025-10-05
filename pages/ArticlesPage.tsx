
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../data';
import { TwitterIcon, FacebookIcon, WhatsAppIcon } from '../components/icons';

const ArticleListPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-2">Articles & News</h1>
            <p className="text-center text-gray-400 mb-8">Insights, analysis, and updates.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ARTICLES.map(article => (
                    <Link key={article.id} to={`/articles/${article.slug}`} className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-glow-yellow transition-shadow duration-300 flex flex-col">
                        <img src={article.heroImage} alt={article.title} className="w-full h-56 object-cover" />
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex-grow">
                                <div className="flex gap-2 mb-2">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="bg-tvk-red/80 text-white text-xs font-semibold px-2 py-1 rounded">{tag}</span>
                                    ))}
                                </div>
                                <h2 className="text-xl font-bold mb-2 group-hover:text-tvk-yellow transition-colors">{article.title}</h2>
                                <p className="text-gray-400 text-sm">{article.excerpt}</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-700 text-xs text-gray-500">
                                By {article.author} on {article.date}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const ArticleDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
    const article = ARTICLES.find(a => a.slug === slug);
    const relatedArticles = ARTICLES.filter(a => a.slug !== slug).slice(0, 2);

    if (!article) {
        return <div className="text-center text-xl">Article not found. <Link to="/articles" className="text-tvk-yellow underline">Go back to articles</Link></div>;
    }

    const shareUrl = window.location.href;
    const shareText = `Check out this article about Thalapathy Vijay: ${article.title}`;

    return (
        <div className="max-w-4xl mx-auto">
            <Link to="/articles" className="text-tvk-yellow hover:underline mb-6 inline-block">&larr; Back to Articles</Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">{article.title}</h1>
            <p className="text-center text-gray-400 mb-6">By {article.author} on {article.date}</p>
            <img src={article.heroImage} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8 shadow-lg" />
            <div className="prose prose-invert lg:prose-xl max-w-none text-gray-300 leading-relaxed">
                <p>{article.content}</p>
            </div>
            
            <div className="mt-12 py-6 border-t border-b border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="font-bold text-lg">Share this article:</h3>
                <div className="flex space-x-4">
                    <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
                    <a href={`https://api.whatsapp.com/send?text=${shareText} ${shareUrl}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><WhatsAppIcon /></a>
                </div>
            </div>

             {relatedArticles.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {relatedArticles.map(rel => (
                           <Link key={rel.id} to={`/articles/${rel.slug}`} className="group bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-glow-yellow transition-shadow duration-300">
                               <img src={rel.heroImage} alt={rel.title} className="w-full h-40 object-cover" />
                               <div className="p-4">
                                   <h3 className="text-lg font-bold mb-2 group-hover:text-tvk-yellow transition-colors">{rel.title}</h3>
                                   <p className="text-gray-400 text-sm line-clamp-2">{rel.excerpt}</p>
                               </div>
                           </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const ArticlesPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    return slug ? <ArticleDetailPage slug={slug} /> : <ArticleListPage />;
};

export default ArticlesPage;
