---
title: Dropdown
---
<script setup lang="ts">
import '../../src/styles/theme.css'
import { ref } from 'vue'
import Button from '../../src/components/Button.vue'
import Dropdown from '../../src/components/Dropdown/Dropdown.vue'
import DropdownOption from '../../src/components/Dropdown/DropdownOption.vue'
import DropdownOptionCheckbox from '../../src/components/Dropdown/DropdownOptionCheckbox.vue'
import DropdownOptionRadio from '../../src/components/Dropdown/DropdownOptionRadio.vue'

const dropdownOptions = ref([
    'English',
    'French',
    'German',
    'Russian',
    'Spanish',
    'Italian',
    'Portuguese',
])

const selectedDropdownOption = ref('German')

const selectedDropdownOptions = ref([
    'English',
    'German',
])

const handleSelectMulti = (option: string) => {
    selectedDropdownOptions.value = selectedDropdownOptions.value.includes(option)
        ? selectedDropdownOptions.value.filter((selectedOption) => selectedOption !== option)
        : [...selectedDropdownOptions.value, option]
}

</script>

## Dropdown

<div style="display: flex; align-items: center; gap: 8px;">
    <Dropdown dropdown-width="150px" dropdown-height="auto">
        <template #trigger="{ toggle }">
            <Button color="primary" @click="toggle">
                Open Dropdown
            </Button>
        </template>
        <template #options>
            <DropdownOption
                v-for="option in dropdownOptions"
                :key="option"
                :selected="option === selectedDropdownOption"
                @click="selectedDropdownOption = option"
            >
                {{ option }}
            </DropdownOption>
        </template>
    </Dropdown>
</div>

## Multi Select Dropdown

<div style="display: flex; flex-direction: column; align-items: start; gap: 8px;">
    <Dropdown 
        dropdown-width="150px" 
        dropdown-height="auto"
        :close-on-select="false"
    >
        <template #trigger="{ toggle }">
            <Button color="primary" @click="toggle">
                Open Dropdown
            </Button>
        </template>
        <template #options>
            <DropdownOption
                v-for="option in dropdownOptions"
                :key="option"
                :selected="selectedDropdownOptions.includes(option)"
                @click="handleSelectMulti(option)"
            >
                {{ option }}
            </DropdownOption>
        </template>
    </Dropdown>
</div>

## Multi Select Dropdown with checkboxes

<div style="display: flex; flex-direction: column; align-items: start; gap: 8px;">
    <Dropdown 
        dropdown-width="150px" 
        dropdown-height="auto"
        :close-on-select="false"
    >
        <template #trigger="{ toggle }">
            <Button color="primary" @click="toggle">
                Open Dropdown
            </Button>
        </template>
        <template #options>
            <DropdownOption
                v-for="option in dropdownOptions"
                :key="option"
                :selected="selectedDropdownOptions.includes(option)"
                @click="handleSelectMulti(option)"
            >
                <template #start="{ selected }">
                    <DropdownOptionCheckbox :selected="selected" />
                </template>
                <template #default>
                    {{ option }}
                </template>
            </DropdownOption>
        </template>
    </Dropdown>
</div>

## Single Select Dropdown with radios

<div style="display: flex; flex-direction: column; align-items: start; gap: 8px;">
    <Dropdown 
        dropdown-width="150px" 
        dropdown-height="auto"
        :close-on-select="true"
    >
        <template #trigger="{ toggle }">
            <Button color="primary" @click="toggle">
                Open Dropdown
            </Button>
        </template>
        <template #options>
            <DropdownOption
                v-for="option in dropdownOptions"
                :key="option"
                :selected="option === selectedDropdownOption"
                @click="selectedDropdownOption = option"
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