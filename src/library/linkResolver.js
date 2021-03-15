/*const urlParts = {
	agency: {
		'de-de': 'agentur',
		'en-de': 'agency'
	},
	career: {
		'de-de': 'karriere',
		'en-de': 'career'
	},
	case: {
		'de-de': 'case',
		'en-de': 'case'
	},
	cases: {
		'de-de': 'cases',
		'en-de': 'cases'
	},
	services: {
		'de-de': 'services',
		'en-de': 'services'
	},
	job: {
		'de-de': 'job',
		'en-de': 'job'
	}
};*/

// http://localhost:8000/preview?token=https%3A%2F%2Fwbm-website.prismic.io%2Fpreviews%2FYE8r4RIAABC2U6t9%3AYEo2oRIAACUAPd2o%3FwebsitePreviewId%3DXuY1qRAAACIAbeVZ&documentId=XuSG9BAAAB0AZ1od

export const resolveUrlByDoc = (doc) => {
	switch (doc.type) {
		case 'homepage':
			return `/`
	}
}

export const linkResolver = (link) => {
	console.log('linkResolver', link);
	if (!link) {
		return '/';
	}

	const
		path = link.uid
		//locale: string = link.lang
	;

	switch (link.type) {
		case 'homepage':
			return '/';
		case 'service_overview':
			return `/services/`;
		case 'service_page':
			return `/services/${path}/`;
		case 'job_page':
			return `/karriere/${path}/`;
		case 'agency_overview':
			return `/agentur/`;
		case 'agency_page':
			return `/agentur/${path}/`;
		case 'blog_overview':
			return `/blog/`;
		case 'blog_article':
			return `/blog/${path}/`;
		case 'career_overview':
			return `/karriere/`;
		case 'career_page':
			return `/karriere/${path}/`;
		case 'case_overview':
			return `/cases/`;
		case 'case':
			return `/cases/${path}/`;
		case 'contact_page':
			return `/kontakt/`;
		case 'imprint_page':
			return `/impressum/`;
		case 'privacy_page':
			return `/datenschutz/`;
		default:
			return '/';
	}
};
