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
              label: 'Spotify',
              href: 'spotify:artist:23sotjRXcNLzDMLwFtyyXA',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pseudoabyss',
            },
          ],
        },
        {
          title: 'Contact',
          items: [

            {
              label: 'pseudoabyss@gmail.com',
              href: 'mailto:pseudoabyss@gmail.com',
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
        },
        blog: {
          routeBasePath: 'news',
          showReadingTime: true,
            /**
           * Blog page title for better SEO
           */
          blogTitle: 'News',
          /**
           * Blog page meta description for better SEO
           */
          blogDescription: 'News',
          /**
           * Number of blog post elements to show in the blog sidebar
           * 'ALL' to show all blog posts
           * 0 to disable
           */
          blogSidebarCount: 5,
          /**
           * Title of the blog sidebar
           */
          blogSidebarTitle: 'News',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
