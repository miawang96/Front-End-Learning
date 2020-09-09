<template>
  <Menu
    theme="light"
    width="auto"
    :active-name="this.$route.name"
    :open-names="['Survey_List_Page']"
  >
    <template v-for="(menu, index) in menus">
      <Submenu :name="menu.name" v-if="menu.items" :key="index">
        <template slot="title">
          <Icon :type="menu.icon"></Icon>
          {{ menu.display }}
        </template>
        <template v-if="menu.items">
          <MenuItem
            :name="item.name"
            v-for="(item, index) in menu.items"
            :key="index"
            :to="{ name: menu.name }"
            >{{ item.display }}</MenuItem
          >
        </template>
      </Submenu>
      <MenuItem :name="menu.name" v-else :key="index" :to="{ name: menu.name }">
        <Icon :type="menu.icon"></Icon>{{ menu.display }}</MenuItem
      >
    </template>
  </Menu>
</template>

<script>
import { menus } from '@/constants';

export default {
  data() {
    return {
      menus,
      openNames: [],
    };
  },
  mounted() {
    // 根据当前页面路径选中菜单
    console.log(this.$route.name);
  },
  methods: {},
};
</script>
