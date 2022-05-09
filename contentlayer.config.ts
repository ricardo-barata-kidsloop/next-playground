import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the doc',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the doc',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/docs/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'docs',
  documentTypes: [Doc],
})
