import "./main.scss";
import Vue from "vue";
import machines from "./data/machines.json";

var box = new Vue({
  el: "#container",
  data: {
    title: "Title from Vue data!!"
  }
});

Object.keys(machines).forEach(key => {
  console.log(machines[key]);
});
