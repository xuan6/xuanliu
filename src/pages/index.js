import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { node } from "prop-types"
import PostCard from "../components/postCard"

const Home = ({data}) => {
  // console.log(--error message goes here--)
  return(
    <Layout>
    <Seo title="Projects" />
    <div className='container'>
      <div className='posts'>
      {data.allMdx.nodes.map((node) => (
          <PostCard content={node}/>
        ))
      }
      </div>
    </div>
    
  </Layout>
  )
  
  }

export default Home;

export const query = graphql`
query {
  allMdx (sort: { fields: [frontmatter___order], order: ASC }) {
    nodes {
      frontmatter {
        tag
        description
        external_link
        order
        title
        thumb {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1)
          }
        }
      }
      id
      slug
    }
  }
}
`