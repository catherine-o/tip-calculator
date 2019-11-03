<template>
    <div id='tip'>
        <span>Tip:</span>
        <span id='tip-amount'>${{ this.tip }}</span>
    </div>
</template>

<script>
export default {
    props: {
        tip: Number
    }
}
</script>

<style lang="scss">
#tip {
    margin-top: 10px;
    #tip-amount {
        float: right;
        margin-right: 35px;
    }
}
</style>