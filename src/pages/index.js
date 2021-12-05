import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tile from "../components/tile"
import { node } from "prop-types"
import Hero from "../components/hero"
import PostCard from "../components/postCard"

const Home = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <div className='container'>
      <div className='posts'>
      {data.allMdx.nodes.map((node) => (
          <PostCard content={node}/>
        ))
      }

      {data.allMdx.nodes.map((node) => (
        <div className='column'>Hi</div>
      ))
    }
      </div>
    </div>
    
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