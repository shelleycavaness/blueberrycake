
<h1 align="center">
  Blueberry Cake Gatsby  Starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Tutorials](https://www.gatsbyjs.com/docs/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Guides](https://www.gatsbyjs.com/docs/how-to/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Netlify)

Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

[<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-minimal)

Gatsby will perform an optimized production build for your site, generating static HTML
and per-route JavaScript code bundles.
To check the production build locally then use,
gatsby serve
The production build will run locally at localhost:9000. Please remember to build your
site before executing this command.
Netlify Deployment
To make it ready for deployment, run the following command
gatsby build
Now drag and drop the /public folder on Netlify site tab.
Vercel Deployment
Vercel is a cloud platform for websites and serverless APIs, that you can use to deploy
your Gatsby projects to your personal domain
To install their command-line interface with npm, run the following command:
npm install -g vercel
You can deploy your application by running the following command in the root of the
project directory:
vercel
2

README.md
Technology Stack
❖ ReactJS
❖ GatsbyJS
❖ Styled Components
❖ React Bootstrap
Other Important Packages
❖ React Slick
❖ React Tabs
❖ Gatsby Image
❖ React Icons
Folder Structure
A quick look at the top-level files and directories you'll see in a Gatsby project.
.
├── node_modules
├── public
├── src
├── static
├── .gitignore
├── gatsby-config.js
├── package-lock.json
├── package.json
└── README.md
1. 2. node_modules: This directory contains all of the modules of code that your
project depends on (npm packages) are automatically installed.
public: Automatically generated. The output of the build process will be exposed
inside this folder.
3

README.md
3. 4. 5. 6. 7. 8. /src: This directory will contain all of the code related to what you will see on the
front-end of your site (what you see in the browser) such as your site header or a
page template. src is a convention for “source code”.
static: contains folder wise static images. Contents inside static will not be
processed by Webpack. Instead, it will be copied to the public folder untouched.
.gitignore: This file tells git which files it should not track / not maintain a version
history for.
gatsby-config.js: This is the main configuration file for a Gatsby site. This is
where you can specify information about your site (metadata) like the site title
and description, which Gatsby plugins you’d like to include, etc. (Check out the
config docs for more detail).
package-lock.json (See package.json below, first). This is an automatically
generated file based on the exact versions of your npm dependencies that were
installed for your project. (You won’t change this file directly).
package.json: A manifest file for Node.js projects, which includes things like
metadata (the project’s name, author, etc). This manifest is how npm knows
which packages to install for your project.
/src
/assets (images)
/globalComponents (common components)
/containers (Pages components)
/images
/pagedata (JSON data of all the pages)
/pages (Gatsby pages)
src/assets - Contains folder wise images of all the pages. For example
assets/app-images folder contains all the images of App Page.
src/globalComponents - Contains common components used by all the pages.
Example: seo.js, header.js, etc.
src/containers - Contains folder wise components of all the pages. For example /app,
/corporate, /interior, etc. Each of these folders contains components of the page
src/pagedata - Contains folder wise JSON data.
src/page - Components under src/pages become pages automatically with paths based
on their filename.
4
README.md
The folder structure /container folder is as shown below
/containers
/about
/blogDetails
/blogPage
/contactPage
/homePage
/portfolioPage
/showCase
Each of these folders contains reusable components like bannerSection, reviewSection,
serviceSection, etc. Let’s take a look at the /homePage folder.
/app
/bannerSection
/reviewSection
/serviceSection
/workSection
Here component styles are separated with styled-components. This makes editing the
component easier. If you want to change the styles of the bannerSection component
then go to /homePage/bannerSection/banner.style.js file and edit the CSS.