const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

module.exports = {
  title: 'ArborVote',
  tagline: 'A voting module on the Ethereum blockchain for deliberative decision-making using argument trees.',
  projectName: 'ArborVote-docs',
  organizationName: 'ArborVote',
  url: 'https://ArborVote.github.io.',
  baseUrl: '/ArborVote-docs/',
  favicon: 'img/ArborVoteIcon.ico',
  themeConfig: {
    navbar: {
      title: 'ArborVote',
      logo: {
        alt: 'ArborVoteIcon',
        src: 'img/ArborVoteIcon.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ArborVote/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: 'docs/',
            },
            {
              label: 'Phases',
              to: 'docs/phases/',
            },
            {
              label: 'Incentives',
              to: 'docs/incentives/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/p4ZvtnprEE',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ArborVote',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ArborVote/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Michael A. Heuer.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          //homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/ArborVote/ArborVote-docs/edit/master/website/',
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/ArborVote/ArborVote-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
