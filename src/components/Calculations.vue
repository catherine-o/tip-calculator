<template>
    <div class='calculations'>
        <Tip :tip='tip'/>
        <Total :total='total'/>
    </div>
</template>

<script>
import Tip from './Tip'
import Total from './Total'
export default {
    components: {
        Tip,
        Total
    },
    props: {
        tip: Number,
        total: Number
    }
}
</script>

<style lang="scss">
.calculations {
    margin: 0 0 30px 35px;
    font-size: 20px;
}
</style>