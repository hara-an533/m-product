<template>
  <div class="login_con">
    <div class="login">
      <el-form :model="loginForm" class="login_form" :rules="rules" ref="loginForm">
        <el-form-item class="login_item" prop="id">
          <el-input v-model="loginForm.id" prefix-icon="iconfont icon-yonghu" placeholder="请输入员工号"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            type="password"
            v-model="loginForm.pwd"
            prefix-icon="iconfont icon-suo"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="login">登录</el-button>
          <el-button size="mini" @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComp",
  data: function() {
    return {
      loginForm: {
        id: "",
        pwd: ""
      },
      rules: {
        id: [
          {
            required: true,
            min: 8,
            max: 8,
            message: "员工号为8个字符",
            trigger: "blur"
          }
        ],
        pwd: [
          {
            required: true,
            min: 4,
            max: 8,
            message: "密码为4到8位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    resetForm(loginForm) {
      this.$refs[loginForm].resetFields();
    },
    login() {
      this.$refs.loginForm.validate(async valid => {
        if (!valid) return;
        console.log(this.loginForm);
        const {data:res} = await this.$http.post("api/login", this.loginForm);
        if(res.status==200){
          this.$message.success('登录成功');
          console.log(res.tk);
          window.sessionStorage.setItem('token',res.tk);
          this.$router.push('/detail')
        }else {
          this.$message.error('登录失败');
        }
      });
      // this.axios
      //   .post("api/login", this.loginForm)
      //   .then(res => {
      //     if (res.data.status == 200) {
      //       // //跳转到我的页面
      //       // this.$router.replace({ path: "/main/profile" });
      //       alert('success')
      //     }
      //   });
    }
  }
};
</script>

<style lang="less" scoped>
.login_con {
  height: 100%;
  background-color: bisque;
}
.login {
  height: 250px;
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .login_form {
    padding: 15px;
  }
}
</style>