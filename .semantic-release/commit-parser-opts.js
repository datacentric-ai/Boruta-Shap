const parserOpts = {
    headerPattern: /^(\w*)(?:\((\w*)\))?:\s(.*)$/,
    headerCorrespondence: ['type', 'scope', 'subject'],
}

const releaseRules = [
    { type: 'breaking', release: 'major' },
    { type: 'feat', release: 'minor' },
    { type: 'fix', release: 'patch' },
    { type: 'build', release: 'patch' },
    { type: 'style', release: 'patch' },
    { type: 'refactor', release: 'patch' },
    { type: 'perf', release: 'patch' },
    { type: 'chore', release: false },
    { type: 'ci', release: false },
    { type: 'docs', release: false },
    { type: 'test', release: false },
]

module.exports = {
    parserOpts,
    releaseRules,
}
