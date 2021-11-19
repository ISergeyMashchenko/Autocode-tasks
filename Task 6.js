const textForRole = (roles, textLines) => {
    const groups = textLines.split('\n').reduce((r, s, i) => {
        const [, key, value] = s.match(/(^[^:]+):\s*(.*$)/);
        (r[key] = r[key] || []).push(`${i + 1}) ${value}`);
        return r;
    }, {});
    return roles
    .map(role => [role + ':', ...groups[role], ''].join('\n'))
    .join('\n')
    .trim();
}
