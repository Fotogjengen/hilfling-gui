const path = require("path");

module.exports = ({ config }) => {
  config.module.rules = config.module.rules.filter(
    rule => rule.test.toString() !== "/\\.css$/",
  );
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
        },
      ],
    },
    {
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    },
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader", options: { modules: true } },
      ],
      include: path.resolve(__dirname, "../"),
    },
    {
      test: /\.(gif|png|jpe?)$/i,
      use: ["file-loader"],
    },
  );
  config.resolve.extensions.push(".ts", ".tsx", ".scss", ".css");
  return config;
};
