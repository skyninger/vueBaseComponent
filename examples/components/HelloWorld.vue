<template>
  <div>
    <el-alert @click.native="dialogVisible=true"
      title="成功提示的文案"
      type="success">
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info">
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning">
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error">
    </el-alert>
    <el-alert
      title="不可关闭的 alert"
      type="success"
      :closable="false">
    </el-alert>
    <el-alert
      title="自定义 close-text"
      type="info"
      close-text="知道了">
    </el-alert>
    <el-alert
      title="设置了回调的 alert"
      type="warning"
      @close="hello">
    </el-alert>
    <el-alert
      title="成功提示的文案"
      type="success"
      show-icon>
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info"
      show-icon>
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning"
      show-icon>
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error"
      show-icon>
    </el-alert>
      <el-alert
      title="成功提示的文案"
      type="success"
      center
      show-icon>
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info"
      center
      show-icon>
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning"
      center
      show-icon>
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error"
      center
      show-icon>
    </el-alert>
    <el-alert
      title="带辅助性文字介绍"
      type="success"
      description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
    </el-alert>
    <el-alert
      title="成功提示的文案"
      type="success"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon>
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon>
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon>
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon>
    </el-alert>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      @before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    hello () {
      alert('Hello World!')
    },
    handleClose (done) {
      if (confirm('确认关闭？')) {
        this.dialogVisible = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
