const path = require("path");

module.exports = {
  // 빌드한 결과물을 ../nodeserver/public 디렉토리에 저장하는 것으로 설정한다.
  outputDir: path.resolve(__dirname, "../nodeserver/public"),
  // 아래와 같이 /api 요청이 있을 때 해당 요청을 backend 쪽의 /api로 돌려주는
  // proxy 설정을 추가해준다.
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:5050/api",
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": "",
  //       },
  //     },
  //   },
  // },
};
