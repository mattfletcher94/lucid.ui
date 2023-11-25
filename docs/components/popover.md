---
title: Dropdown
---
<script setup lang="ts">
import '../../src/styles/theme.css'
import { ref } from 'vue'
import Button from '../../src/components/Button.vue'
import Popover from '../../src/components/Popover/Popover.vue'
import Dropdown from '../../src/components/Dropdown/Dropdown.vue'
import DropdownOption from '../../src/components/Dropdown/DropdownOption.vue'
import DropdownOptionRadio from '../../src/components/Dropdown/DropdownOptionRadio.vue'

const placement = ref('bottom-start')

const placements = ref([
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-start',
    'bottom',
    'bottom-end',
    'left-start',
    'left',
    'left-end',
])

</script>

## Popover

<div style="display: flex; flex-direction: column; align-items: start; gap: 8px;">
    <Popover 
        :popover-placement="placement"
        popover-width="300px" 
        popover-height="auto"
    >
        <template #trigger="{ toggle }">
            <Button color="primary" @click="toggle">
                Open Popover
            </Button>
        </template>
        <template #content="{ close }">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 24px;">
                <h1>Popover</h1>
                <Button 
                    color="secondary"
                    variant="ghost"
                    shape="circle"
                    @click="close"
                >
                    <svg style="width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </Button>
            </div>
        </template>
    </Popover>
    <p>Choose placement:</p>
    <Dropdown dropdown-width="cover" dropdown-height="auto">
        <template #trigger="{ toggle }">
            <Button color="secondary" style="width: 160px; justify-content: start" @click="toggle">
                {{ placement }}
                <svg style="width: 14px; height: 14px; margin-left: auto;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
            </Button>
        </template>
        <template #options>
            <DropdownOption
                v-for="option in placements"
                :key="option"
                :selected="option === placement"
                @click="placement = option"
            >
                <template #start="{ selected }">
                    <DropdownOptionRadio :selected="selected" />
                </template>
                <template #default>
                    {{ option }}
                </template>
            </DropdownOption>
        </template>
    </Dropdown>
</div>