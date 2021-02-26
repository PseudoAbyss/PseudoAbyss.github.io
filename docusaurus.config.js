module.exports = {
  title: 'Pseudo Abyss',
  tagline: 'Electromagnetic Digital Goodness',
  url: 'https://pseudoabyss.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pseudoabyss', // Usually your GitHub org/user name.
  projectName: 'pseudoabyss.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Pseudo Abyss',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'pages/games/',
          activeBasePath: 'games',
          label: 'Games',
          position: 'left',
        },
        {
          to: 'pages/music/',
          activeBasePath: 'music',
          label: 'Music',
          position: 'left',
        },
        {to: 'news', label: 'News', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Games',
          items: [
            {
              label: 'Station 0D',
              to: 'docs/station0d/',
            },
          ],
        },
        {
          title: ' ',
          items: [
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/pseudoabyss',
            },
            {
              label: 'News',
              to: 'news',
            },
          ],
        },
      ],
      copyright: `Pseudo Abyss - ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'pages',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          routeBasePath: 'news',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
