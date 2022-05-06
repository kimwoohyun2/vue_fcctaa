const path = require("path");

// 빌드한 결과물을 ../nodeserver/public 디렉토리에 저장하는 것으로 설정한다.
module.exports = {
  outputDir: path.resolve(__dirname, "../nodeserver/public"),
};
