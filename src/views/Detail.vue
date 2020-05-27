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
              :class="data.isSelected ? 'is-show' : ''"
              click="tab"
              ref="calendar"
            >{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}</p>
          </template>
        </el-calendar>
      </el-main>
      <div class="cover" :class="[isshow? 'block':'none']">
        <div class="form">
          <h1>{{time}}</h1>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      value: new Date(),
      isshow: false,
      time:''
    };
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    tab() {
      alert("123");
    }
  },
  mounted() {
    let dt = document.querySelectorAll(".el-calendar-day");
    for (let i = 0; i < dt.length; i++) {
      dt[i].onclick = function() {
        // event.preventDefault();
        this.isshow = true;
        console.log(this.isshow);
        this.time=dt[i].innerText;
        console.log(this.time);
      };
      this.isshow=false;
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
  background-color: #e0e0c9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-main {
  padding: 400px;
  padding-top: 100px;
  background-color: #f7f7f7;
}
.is-selected {
  color: #1989fa;
}
.block {
  display: block;
}
.none{
  display: none;
}
.cover {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 2, 1, 0.1);
}
.form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 400px;
  background-color: #fff;
  z-index: 100;
}
</style>