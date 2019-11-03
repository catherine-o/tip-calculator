<template>
    <div class='calculations'>
        <Tip />
        <Total />
    </div>
</template>

<script>
import Tip from './Tip'
import Total from './Total'
export default {
    components: {
        Tip,
        Total
    }
}
</script>

<style lang="scss">
.calculations {
    margin: 0 0 30px 35px;
    font-size: 20px;
}
</style>