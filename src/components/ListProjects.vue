<script lang="ts" setup>
defineProps<{
  list: {
    text: string
    description?: string
    icon?: string
    href: string
  }[]
}>()
</script>

<template>
  <ul grid="~ cols-1 sm:cols-2 gap-4">
    <template v-if="!list || list.length === 0">
      <div py10 opacity-50 text-lg>
        nothing here yet.
      </div>
    </template>
    <li v-for="project in list" :key="project.text" class="group flex items-center rd-2 p-4 mb-2 hover:bg-white/5 transition-colors">
      <a flex items-center target="_blank" :href="project.href" :aria-label="project.text" class="w-full">
        <div ml-2 mr-4 pt-2>
          <i text-4xl inline-block :class="project.icon || 'i-carbon-unknown'" />
        </div>
        <div font-normal lh-tight>
          <div class="text-lg text-white font-semibold group-hover:text-main transition-colors">
            {{ project.text }}
          </div>
          <div style="color: white !important; opacity: 1 !important;" class="text-sm mt-1">
            {{ project.description }}
          </div>
        </div>
      </a>
    </li>
  </ul>
</template>
