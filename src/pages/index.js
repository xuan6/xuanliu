import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tile from "../components/tile"
import { node } from "prop-types"

const Home = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <h1>List of items</h1>
    <h4>{data.allMdx.totalCount}</h4>
    {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
          <p>{node.excerpt}</p>
        </article>
      ))
    }
  </Layout>
)

export default Home;

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        excerpt
        id
        slug
      }
      totalCount
    }
  }
`