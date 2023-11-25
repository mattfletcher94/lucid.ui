---
title: Button Group
---
<script setup lang="ts">
import '../../src/styles/theme.css'
import Button from '../../src/components/Button.vue'
import ButtonGroup from '../../src/components/ButtonGroup.vue'
import Dropdown from '../../src/components/Dropdown/Dropdown.vue'
import DropdownOption from '../../src/components/Dropdown/DropdownOption.vue'

</script>
# My Vue Component Library

Here are some examples of using the `Button Group` component:

## Button Group

<ButtonGroup label="My button group">
    <Button color="primary">
        Primary
    </Button>
    <Button color="primary">
        Secondary
    </Button>
    <Button color="primary">
        Danger
    </Button>
</ButtonGroup>

## Button Group

<ButtonGroup label="My button group">
    <Button color="secondary">
        Primary
    </Button>
    <Button color="secondary">
        Secondary
    </Button>
    <Button color="secondary">
        Danger
    </Button>
</ButtonGroup>

## Button Group

<ButtonGroup label="My button group">
    <Button color="danger">
        Split button
    </Button>
    <Dropdown 
        dropdown-width="auto" 
        dropdown-height="auto"
        dropdown-placement="bottom-end"
    >
        <template #trigger="{ toggle }">
            <Button color="danger" style="--lucid-button-padding-x: 10px;" @click="toggle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 14px; height: 14px;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </Button>
        </template>
        <template #options>
            <DropdownOption>
                Share
            </DropdownOption>
            <DropdownOption>
                Edit
            </DropdownOption>
            <DropdownOption>
                Delete
            </DropdownOption>
        </template>
    </Dropdown>

   
</ButtonGroup>