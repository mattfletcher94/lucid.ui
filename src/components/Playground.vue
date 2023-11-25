<script setup lang="ts">
import '../styles/theme.css'
import { useAlert } from '../composables/useAlert'
import Button from './Button.vue'
import AlertProvider from './Alert/AlertProvider.vue'

const alertt = useAlert({
    title: 'Oops, something went wrong!',
    message: 'Please try again later or contact support.',
    buttonLabel: 'Okay',
})

/*
const alertComponent = ref()

const alert = useAlert(alertComponent)

*/

const onButtonClick = () => {
    alertt.show().then(() => {
        console.log('Alert closed')
    })
}
</script>

<template>
  <AlertProvider teleport="body">
    <Button
      color="primary"
      @click="onButtonClick"
    >
      Primary Button
    </Button>

    <!--
    <Dialog 
        ref="alertComponent"
        :open="isOpen"
        @okay="isOpen = false"
        @cancel="isOpen = false"
    >
        <template #title>
            <h1>Alert Title</h1>
        </template>
        <template #message>
            <p>Alert Message</p>
        </template>
    </Dialog>


    -->
  </AlertProvider>
</template>
