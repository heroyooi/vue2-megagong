module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", // 백엔드 API 서버 주소
        changeOrigin: true,
      },
    },
  },
};
