export const createSEOMeta = data => [
  {
    hid: 'description',
    name: 'decription',
    content: data.description
  },
  {
    hid: 'og:description',
    name: 'og:decription',
    content: data.description
  },
  {
    hid: 'title',
    name: 'title',
    content: data.title
  },
  {
    hid: 'og:title',
    name: 'og:title',
    content: data.title
  }
]
