<template>
  <Menu theme="light" width="auto">
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
    };
  },
  methods: {},
};
</script>
