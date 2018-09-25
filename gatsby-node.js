exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const timestamp = Date.now()
  switch (stage) {
    case 'build-javascript':
      actions.setWebpackConfig({
        output: {
          filename: `[name]-${timestamp}-[chunkhash].js`,
          chunkFilename: `[name]-${timestamp}-[chunkhash].js`
        }
      })
  }
}
