module.exports = {
  reactStrictMode: true,
  async rewrites() {
      return [
          {
            source: '/ext/api/:slug*',
            destination: `https://uon-notes-api.herokuapp.com/api/:slug*`,
          },
        ]
 },
}
