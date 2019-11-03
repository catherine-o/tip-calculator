<template>
    <div class='container'>
        <CalculatorForm />
        <Calculations />
    </div>
</template>

<script>
import CalculatorForm from './CalculatorForm'
import Calculations from './Calculations'
export default {
    components: {
        CalculatorForm,
        Calculations
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