const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  }, // 이 옵션 안에 확장자를 넣어주면 알아서 웹팩이 확장자에 대해 check 한다. 그러므로 entry에 확장자를 넣어줄 필요가 없다.

  entry: {
    app: ["./client"], // 다른 곳에서 불러오는 파일은 제외시킨다.
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"], // browserlists
                },
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel",
          ],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"), // 현재폴더 __dirname, 현재폴더 안에 dist 폴더를 의미함.
    filename: "app.js",
    publicPath: "/dist/",
  }, // 출력
};
