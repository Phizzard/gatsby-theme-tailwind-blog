import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql} from 'gatsby'

const Seo = () => {
  const {site} = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteUrl: url
        }
      }
    }
  `)

  return(
    <Helmet title={site.siteMetadata.defaultTitle}>
      <meta name="description" content={site.siteMetadata.defaultDescription} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:description" content={site.siteMetadata.defaultDescription} />
    </Helmet>
  )
}

export default Seo