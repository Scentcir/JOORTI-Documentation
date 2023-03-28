const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'JOORTI',
  tagline: 'Product Documentation',
  url: 'https://joorti.holazxy.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JOORTI', // Usually your GitHub org/user name.
  projectName: 'JOORTI DOCS', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Scentcir/joorti-docs/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Scentcir/joorti-docs/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      navbar: {
        title: 'JOORTI DOCS',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            position: 'right'
          },
          {
            href: 'https://joorti.com',
            label: 'Store',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'JOORTI Store',
                href: 'https://joorti.com',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/joortioptical',
              },
              {
                label: 'Twitter',
                href: 'https://mobile.twitter.com/glassesnine',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/joortioptical/',
              },
              {
                label: 'Pinterest',
                href: 'https://www.pinterest.com/nineglasses/_created/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Scentcir',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JOO'RTI.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
