module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  }, // 到这是只将客户端eslint关闭
  lintOnSave: false // 直接全部关闭eslint检查
}
