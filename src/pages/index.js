import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tile from "../components/tile"
import { node } from "prop-types"
import PostCard from "../components/postCard"

const Home = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <div className='hero'>
      <h1>Xuan Liu</h1>
      <h2>System Designer & Engineer at Amazon</h2>
    </div>
    {data.allMdx.nodes.map((node) => (
        <PostCard content={node}/>
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
          description
        }
        excerpt
        id
        slug
      }
      totalCount
    }
  }
`