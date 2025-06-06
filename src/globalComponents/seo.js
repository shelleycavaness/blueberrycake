/**
 * SEO component that queries for data with
 * 
 */
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, author }) {
    const metaDescription = description

    const queryData = useStaticQuery(graphql`
            query jsonQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
    `)
    return (
        <Helmet
        htmlAttributes={{
            lang,
        }}
        title={title ? title : queryData.site.siteMetadata.title}
        titleTemplate={`%s`}
        meta={[
            {
            name: `description`,
            content: metaDescription,
            },
            {
            property: `og:title`,
            content: title,
            },
            {
            property: `og:description`,
            content: metaDescription,
            },
            {
            property: `og:type`,
            content: `website`,
            },
            {
            name: `twitter:card`,
            content: `summary`,
            },
            {
            name: `twitter:creator`,
            content: author,
            },
            {
            name: `twitter:title`,
            content: title,
            },
            {
            name: `twitter:description`,
            content: metaDescription,
            },
        ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
