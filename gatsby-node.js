const path = require(`path`);
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const timestamp = Date.now();
  const config = getConfig();

  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }

  switch (stage) {
    case 'build-javascript':
      actions.setWebpackConfig({
        output: {
          filename: `[name]-${timestamp}-[chunkhash].js`,
          chunkFilename: `[name]-${timestamp}-[chunkhash].js`,
        },
        module: {
          rules: [
            new WasmPackPlugin({
              crateDirectory: path.resolve(__dirname, 'crate'),

              // Check https://rustwasm.github.io/wasm-pack/book/commands/build.html for
              // the available set of arguments.
              //
              // Optional space delimited arguments to appear before the wasm-pack
              // command. Default arguments are `--verbose`.
              args: '--log-level warn',
              // Default arguments are `--typescript --target browser --mode normal`.
              extraArgs: '--no-typescript',

              // Optional array of absolute paths to directories, changes to which
              // will trigger the build.
              // watchDirectories: [
              //   path.resolve(__dirname, "another-crate/src")
              // ],

              // The same as the `--out-dir` option for `wasm-pack`
              // outDir: "pkg",

              // The same as the `--out-name` option for `wasm-pack`
              // outName: "index",

              // If defined, `forceWatch` will force activate/deactivate watch mode for
              // `.rs` files.
              //
              // The default (not set) aligns watch mode for `.rs` files to Webpack's
              // watch mode.
              // forceWatch: true,

              // If defined, `forceMode` will force the compilation mode for `wasm-pack`
              //
              // Possible values are `development` and `production`.
              //
              // the mode `development` makes `wasm-pack` build in `debug` mode.
              // the mode `production` makes `wasm-pack` build in `release` mode.
              // forceMode: "development",

              // Controls plugin output verbosity, either 'info' or 'error'.
              // Defaults to 'info'.
              // pluginLogLevel: 'info'
            }),
          ],
        },
      });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`);
  return graphql(
    `
      query {
        blog: allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { draft: { ne: true } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
              body
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const { data } = result;
    const posts = data.blog.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
