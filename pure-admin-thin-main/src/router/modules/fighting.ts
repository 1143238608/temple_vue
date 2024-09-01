export default {
  path: "/fighting",
  meta: {
    icon: "ri:information-line",
    title: "励志"
  },
  children: [
    {
      path: "/fighting/index",
      name: "Fighting",
      component: () => import("@/views/fighting/index.vue"),
      meta: {
        title: "加油",
        // 通过设置showParent为true，显示父级
        showParent: true
      }
    },
    {
      path: "/fighting/index1",
      name: "Fighting1",
      component: () => import("@/views/fighting/index1.vue"),
      meta: {
        title: "大学",
        // 通过设置showParent为true，显示父级
        showParent: true
      }
    }
  ]
};
