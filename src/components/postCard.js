import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const PostCard = ({ content }) => {
    const image = getImage(content.frontmatter.thumb)
    const postLink = content.slug
    const externalLink = content.frontmatter.external_link
    return (
    <div key={content.id}
    className='post-section' >
    <Link
    to={`${externalLink ==='na' ? postLink : externalLink}`}
    >
        <div className={`${content.frontmatter.order%2 == 0 ? 'reversed-columns':'' } post-card columns is-desktop is-vcentered`}>
            <div className='post-thumbnail column is-half'>
            <GatsbyImage image={image} alt='alt' />
            </div>
            <div className='post-description column is-half'>
                <h1>
                {content.frontmatter.title}
                </h1>
                <h4>{content.frontmatter.tag}</h4>
                <p>{content.frontmatter.description}</p>
            </div>
        </div>
        <hr className='post-divider' />
    </Link>
    </div>
    

    )
    
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }



export default PostCard
