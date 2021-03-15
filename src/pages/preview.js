import * as React from 'react'
import {usePrismicPreview, withPreviewResolver} from 'gatsby-source-prismic'
import {resolveUrlByDoc} from "../library/linkResolver";

const PreviewPage = ({ isPreview, previewData, path, isLoading }) => {
	console.log('PreviewPage', isPreview, isLoading);
	const previewText = isPreview ? 'Loading' : 'Not a preview!'
	return (
		<div>
			<p>{previewText}</p>
		</div>
	)
}

export default withPreviewResolver(PreviewPage, {
	repositoryName: 'gatsby-prismic-preview',
	linkResolver: () => resolveUrlByDoc
})
