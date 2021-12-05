import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tile from "../components/tile"
import { node } from "prop-types"
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Post = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return(
  <Layout>
    <Seo title="Home" />
    <Link to='/'>Home</Link>
    <GatsbyImage image={image} alt={data.hero_image_alt} />
    <div className='container'>
      <h1>{data.mdx.frontmatter.title}</h1>
      <span>{data.mdx.frontmatter.date}</span>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
    
  </Layout>)

  }

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      date
      title
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.7)
        }
      }
    }
    body
  }
}
`

export default Post;