---
title: Button
---
<script setup lang="ts">
import '../../src/styles/theme.css'
import Button from '../../src/components/Button.vue'

</script>
# My Vue Component Library

Here are some examples of using the `Button` component:

## Solid buttons

<div style="display: flex; align-items: center; gap: 8px;">
    <Button color="primary">
        Primary
    </Button>
    <Button color="secondary">
        Secondary
    </Button>
    <Button color="danger">
        Danger
    </Button>
</div>

## Tonal buttons

<div style="display: flex; align-items: center; gap: 8px;">
    <Button color="primary" variant="tonal">
        Primary
    </Button>
    <Button color="secondary" variant="tonal">
        Secondary
    </Button>
    <Button color="danger" variant="tonal">
        Danger
    </Button>
</div>

## Ghost buttons

<div style="display: flex; align-items: center; gap: 8px;">
    <Button color="primary" variant="ghost">
        Primary
    </Button>
    <Button color="secondary" variant="ghost">
        Secondary
    </Button>
    <Button color="danger" variant="ghost">
        Danger
    </Button>
</div>

## Outline buttons

<div style="display: flex; align-items: center; gap: 8px;">
    <Button color="primary" variant="outline">
        Primary
    </Button>
    <Button color="secondary" variant="outline">
        Secondary
    </Button>
    <Button color="danger" variant="outline">
        Danger
    </Button>
</div>

## Link buttons

<div style="display: flex; align-items: center; gap: 8px;">
    <Button color="primary" variant="link">
        Primary
    </Button>
    <Button color="secondary" variant="link">
        Secondary
    </Button>
    <Button color="danger" variant="link">
        Danger
    </Button>
</div>

## Size

<div style="display: flex; align-items: center; gap: 8px;">
    <Button color="primary" size="sm">
        Small
    </Button>
    <Button color="primary" size="md">
        Medium
    </Button>
    <Button color="primary" size="lg">
        Large
    </Button>
</div>

## Circle buttons

<div style="display: flex; align-items: center; gap: 8px;">
    <Button color="primary" size="sm" shape="circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    </Button>
    <Button color="primary" shape="circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    </Button>
    <Button color="primary" size="lg" shape="circle">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    </Button>
</div>

## CSS custom properties

```css   
--lucid-button-position: relative;
--lucid-button-display: inline-flex;
--lucid-button-align-items: center;
--lucid-button-justify-content: center;
--lucid-button-gap: var(--lucid-spacing-2);
--lucid-button-font-size: var(--lucid-font-size-sm);
--lucid-button-padding-x: var(--lucid-spacing-4);
--lucid-button-padding-y: var(--lucid-spacing-2);
--lucid-button-height: auto;
--lucid-button-width: auto;
--lucid-button-border-radius: var(--lucid-rounded-md);
--lucid-button-text-decoration: none;
--lucid-button-font-weight: var(--lucid-font-weight-medium);
--lucid-button-letter-spacing: var(--lucid-letter-spacing-wide);
--lucid-button-color: var(--lucid-color-white);
--lucid-button-font-family: var(--lucid-font-sans);
--lucid-button-background-color: var(--lucid-color-primary-500);
--lucid-button-border: none;
--lucid-button-white-space: nowrap;
--lucid-button-cursor: pointer;
--lucid-button-user-select: none;
--lucid-button-box-shadow: none;
--lucid-button-box-sizing: border-box;
--lucid-button-outline-offset: 2px;
--lucid-button-outline-width: 2px;
--lucid-button-outline-color: transparent;
--lucid-button-transition: all 200ms ease-in-out;
--lucid-button-overflow: hidden;
--lucid-button-opacity: 1;

--lucid-button-color-hovered: var(--lucid-color-white);
--lucid-button-color-active: var(--lucid-color-white);
--lucid-button-color-focused: var(--lucid-color-white);

--lucid-button-background-color-hovered: var(--lucid-color-primary-600);
--lucid-button-background-color-active: var(--lucid-color-primary-700);
--lucid-button-background-color-focused: var(--lucid-color-primary-600);

--lucid-button-outline-color-hovered: transparent;
--lucid-button-outline-color-active: transparent;
--lucid-button-outline-color-focused: transparent;

--lucid-button-disabled-opacity: 0.7;
--lucid-button-disabled-cursor: not-allowed;
```