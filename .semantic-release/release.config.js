const { parserOpts, releaseRules } = require('./commit-parser-opts.js')

module.exports = {
    branches: ['main'],
    tagFormat: '${version}',
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                releaseRules,
                parserOpts,
            },
        ],
        [
            '@semantic-release/release-notes-generator',
            {
                parserOpts,
            },
        ],
        '@semantic-release/github',
    ],
};
