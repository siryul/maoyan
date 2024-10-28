<template>
  <a-layout style="height: 100%">
    <a-layout-sider>
      <a-menu theme="dark" mode="inline">
        <a-menu-item key="1">
          <home-two-tone />
          <span>
            <router-link :to="{ name: 'home' }">主页</router-link>
          </span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <PlaySquareTwoTone />
              <span
                ><router-link :to="{ name: 'movie' }">电影</router-link></span
              >
            </span>
          </template>
          <a-menu-item key="2">添加</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>
<script setup lang="ts">
import { HomeTwoTone, PlaySquareTwoTone } from '@ant-design/icons-vue';
</script>

<style scoped></style>
