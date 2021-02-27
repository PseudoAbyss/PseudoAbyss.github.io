module.exports = {
  title: 'Pseudo Abyss',
  tagline: 'Electromagnetic Digital Goodness',
  url: 'https://pseudoabyss.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  organizationName: 'pseudoabyss', // Usually your GitHub org/user name.
  projectName: 'pseudoabyss.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Pseudo Abyss',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'pages/games/station0d',
          activeBasePath: 'games',
          label: 'Games',
          position: 'left',
        },
        {
          to: 'pages/music/thepurebox',
          activeBasePath: 'music',
          label: 'Music',
          position: 'left',
        },
        {to: 'news', label: 'News', position: 'left'},
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
              to: 'pages/games/station0d/',
            },
          ],
        },
        {
          title: 'Music',
          items: [
            {
              label: 'The Pure Box',
              to: 'pages/music/thepurebox/',
            },
            {
              label: '0D',
              to: 'pages/music/0d/',
            },
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
      // copyright: `Pseudo Abyss - ${new Date().getFullYear()}`,
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
