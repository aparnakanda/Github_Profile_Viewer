import React from 'react';

const Analysis = ({ user, repos }) => {
    // 🔍 Get Most Used Language
    const languageCount = {};
    repos.forEach((repo) => {
        const lang = repo.language;
        if (lang) {
            languageCount[lang] = (languageCount[lang] || 0) + 1;
        }
    });

    const mostUsedLanguage = Object.entries(languageCount)
        .sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    return (
        <div className="analysis-card">
            <h2>📊 GitHub Analysis</h2>
            <ul className="analysis-list">
                <li><strong>🧑‍💻 Username:</strong> {user.login}</li>
                <li><strong>📁 Total Repositories:</strong> {user.public_repos}</li>
                <li><strong>👥 Followers:</strong> {user.followers}</li>
                <li><strong>📬 Email:</strong> {user.email || "Not Public"}</li>
                <li><strong>📝 Most Used Language:</strong> {mostUsedLanguage}</li>
                <li><strong>🌐 Blog:</strong> {user.blog ? <a href={user.blog} target="_blank" rel="noreferrer">{user.blog}</a> : "N/A"}</li>
            </ul>
        </div>
    );
};

export default Analysis;
