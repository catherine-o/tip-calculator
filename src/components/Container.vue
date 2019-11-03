<template>
    <div class='container'>
        <CalculatorForm />
    </div>
</template>

<script>
import CalculatorForm from './CalculatorForm'
export default {
    components: {
        CalculatorForm
    }
}
</script>

<style lang="scss">
.container {
    background-color: rgb(239, 242, 243);
    border: 1px solid gray;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 25px;
}
</style>