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
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Games',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
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
              label: 'Blog',
              to: 'blog',
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
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
