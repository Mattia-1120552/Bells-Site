<script setup lang="ts">
import GridItemsSideBar from './GridItemsSideBar.vue'
import MenuNavigationSideBar from './MenuNavigationSideBar.vue'
import SettingsSideBar from './SettingsSideBar.vue'
</script>

<template>
  <div class="card">
    <Tabs value="0">
      <TabList>
        <Tab value="0">Navigation</Tab>
        <Tab value="1">Header II</Tab>
        <Tab value="2">Header III</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <MenuNavigationSideBar />
        </TabPanel>
        <TabPanel value="1">
          <GridItemsSideBar />
        </TabPanel>
      </TabPanels>
    </Tabs>
    <hr />
    <SettingsSideBar />
  </div>
</template>

<style scoped>
hr {
  color: pink;
}
</style>
