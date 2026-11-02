// Rewrites the "Recently shipped" section of README.md with my most recently
// pushed public repositories. Runs daily from .github/workflows/update-readme.yml.
// No dependencies: Node 20+ (global fetch).
import { readFileSync, writeFileSync } from 'node:fs';

const USER = 'sharatvikas';
const START = '<!-- RECENT:START -->';
const END = '<!-- RECENT:END -->';
const COUNT = 6;

const headers = { Accept: 'application/vnd.github+json', 'User-Agent': `${USER}-profile-readme` };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const res = await fetch(`https://api.github.com/users/${USER}/repos?sort=pushed&direction=desc&per_page=50&type=owner`, { headers });
if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);
const repos = (await res.json())
  .filter((r) => !r.fork && !r.archived && !r.private && r.name !== USER)
  .slice(0, COUNT);

const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const rows = repos.map((r) => {
  const link = r.homepage ? ` · [live ↗](${r.homepage})` : '';
  const stars = r.stargazers_count ? ` ⭐ ${r.stargazers_count}` : '';
  return `| [**${r.name}**](${r.html_url})${link} | ${esc(r.description) || '—'} | ${r.language ?? '—'} | ${r.pushed_at.slice(0, 10)}${stars} |`;
});

const block = [
  START,
  '| Project | What it is | Language | Last push |',
  '|---|---|---|---|',
  ...rows,
  '',
  `<sub>🤖 Updated automatically by GitHub Actions from my ${COUNT} most recently pushed public repos.</sub>`,
  END,
].join('\n');

const readme = readFileSync('README.md', 'utf8');
const a = readme.indexOf(START);
const b = readme.indexOf(END);
if (a < 0 || b < 0) throw new Error('RECENT markers not found in README.md');
const next = readme.slice(0, a) + block + readme.slice(b + END.length);
if (next === readme) console.log('No changes.');
else {
  writeFileSync('README.md', next);
  console.log(`Updated with: ${repos.map((r) => r.name).join(', ')}`);
}
