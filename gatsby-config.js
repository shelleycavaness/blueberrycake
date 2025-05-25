module.exports = {
    siteMetadata: {
        title: `blueberrycake`,
        siteUrl: `https://www.reactrepo.com`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                minify: false, // Breaks styles if not set to false
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets`,
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pagedata`,
                path: `./src/pagedata/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: { path: `./static/` }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: { path: `./src/assets/` }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Gypsum Personal Portfolio`,
                short_name: `Gypsum`,
                start_url: `/`,
                background_color: `#eb3925`,
                theme_color: `#eb3925`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
                icons: [{
                    src: `/images/gypsum-icon.png`,
                    sizes: `512x512`,
                    type: `image/png`,
                }], // Add or remove icon sizes as desired
            },
        },
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingIds: ['G-XXXXXXX'], // Replace with your Google Analytics tracking ID
            },
        },
    ],
};