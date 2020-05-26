<template>
  <div class="con">
    <el-container>
      <el-header>
        <div>Richo Timesheet</div>
        <el-button @click="logout">退出</el-button>
      </el-header>
      <el-main>
        <el-calendar>
          <template slot="dateCell" slot-scope="{date, data}">
            <p
              :class="data.isSelected ? 'is-selected' : ''"
            >{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}</p>
          </template>
        </el-calendar>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      value: new Date()
    };
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.con,
.el-container {
  height: 100%;
}
.el-header {
  background-color: #d5d5d5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-main {
  background-color: #f7f7f7;
}
.el-main {
  padding: 400px;
  padding-top: 100px;
}
.is-selected {
  color: #1989fa;
}
</style>