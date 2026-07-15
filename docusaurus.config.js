// @ts-check
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ArborVote',
  tagline: 'Structured debates on Ethereum — argument trees, rated by markets, tallied on-chain.',
  favicon: 'img/ArborVoteIcon.ico',

  url: 'https://arborvote.github.io',
  baseUrl: '/docs/',
  organizationName: 'ArborVote',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: '/docs/ratingmarkets', to: '/docs/argument-markets'},
          {from: '/docs/incentives', to: '/docs/argument-markets'},
          {from: '/docs/curation', to: '/docs/argument-markets'},
          {from: '/docs/disputes', to: '/docs/argument-markets'},
          {from: '/docs/payout', to: '/docs/bounty'},
          {from: '/docs/layer2', to: '/docs/roadmap'},
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
        },
        blog: {
          showReadingTime: true,
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
                label: 'Argument Markets',
                to: 'docs/argument-markets/',
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
    }),
};

export default config;
