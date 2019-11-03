<template>
    <div class='tip-calculator'>
        <h1>Tip Calculator</h1>
        <Container />
    </div>
</template>

<script>
import Container from '@/components/Container'
export default {
    components: {
        Container
    }
}
</script>

<style lang="scss">
.tip-calculator {
    margin: 5% auto;
    width: 350px;
    h1 {
        text-align: center;
    }
}
</style>