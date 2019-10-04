const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader")
        },
        {
          loader: require.resolve("react-docgen-typescript-loader")
        }
      ]
    },
    {
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    }
  );
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
