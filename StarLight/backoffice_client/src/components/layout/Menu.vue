<template>
  <Menu
    theme="light"
    width="auto"
    :active-name="
      this.$route.meta.module ? this.$route.meta.module : this.$route.name
    "
    :open-names="this.openNames"
    ref="menu"
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
            :to="{ name: item.name }"
            >{{ item.display }}</MenuItem
          >
        </template>
      </Submenu>
      <MenuItem :name="menu.name" v-else :key="index" :to="{ name: menu.name }">
        <Icon :type="menu.icon"></Icon>
        {{ menu.display }}
      </MenuItem>
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
    this.setOpenNames();
  },
  methods: {
    setOpenNames() {
      const currentRoute = this.$route.meta.module
        ? this.$route.meta.module
        : this.$route.name;

      const shouldOpenedMenu = this.menus.find(menu => {
        const findInRoot = menu.name === currentRoute;
        const { items } = menu;
        const findInChilds =
          items && items.find(item => item.name === currentRoute);

        return findInRoot || findInChilds;
      });

      this.openNames = [shouldOpenedMenu.name];
      this.$nextTick(() => {
        this.$refs.menu.updateOpened();
      });
    },
  },
};
</script>
