import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const PostCard = ({ content }) => (
    <Link to={`/${content.slug}`}>
    <div key={content.id} className='post-section'>
        <div className='post-card columns is-desktop is-vcentered'>
            <div className='post-thumbnail column'>
                <img src='https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80' alt='post-thumbnail'/>
            </div>
            <div className='column'>
                <div className='post-description'>
                    <h1>
                    {content.frontmatter.title}
                    </h1>
                    <p>{content.frontmatter.description}</p>
                    <p>{content.excerpt}</p>
                </div>
            </div>
        </div>
        <hr className='post-divider' />
    </div>
    </Link>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default PostCard
