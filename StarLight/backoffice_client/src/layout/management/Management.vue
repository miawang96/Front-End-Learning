<template>
  <div class="layout">
    <Layout>
      <Header />
      <Layout :style="{ padding: '0 20px', margin: '80px 0 0 0' }">
        <Content
          :style="{
            padding: '24px 0',
            minHeight: '280px',
            background: '#fff',
          }"
        >
          <Layout>
            <Sider hide-trigger :style="{ background: '#fff' }">
              <Menu />
            </Sider>
            <Content
              :style="{
                padding: '0 24px',
                minHeight: '280px',
                background: '#fff',
              }"
            >
              <router-view />
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  </div>
</template>

<script>
import { Header, Footer, Menu } from '@/components';
export default {
  components: {
    Header,
    Footer,
    Menu,
  },
};
</script>
