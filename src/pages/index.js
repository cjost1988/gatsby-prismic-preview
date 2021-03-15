import React from 'react'
import {graphql} from "gatsby";
import {withPreview} from "gatsby-source-prismic/src/withPreview";
import {RichText} from 'prismic-reactjs';

const Homepage = ({data, previewData, path}) => {
	console.log('Homepage', data, previewData, path)
	return (
		<div>
			<h1>{data.prismicHomepage.data.title.text}</h1>
			{RichText.render(data.prismicHomepage.data.text.raw)}
		</div>
	)
}

export const query = graphql`
query homepageQuery {
  prismicHomepage {
    url
    id
    prismicId
    data {
      text {
        raw
        text
      }
      title {
        raw
        text
      }
    }
  }
}
`;

export default withPreview(Homepage)
