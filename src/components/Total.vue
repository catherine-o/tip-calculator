<template>
    <div id='total'>
        <span>Total:</span>
        <span id='total-amount'>${{ this.total }}</span>
    </div>
</template>

<script>
export default {
    props: {
        total: Number
    }
}
</script>

<style lang="scss">
#total {
    margin-top: 10px;
    #total-amount {
        float: right;
        margin: 0 35px 15px 0;
    }
}
</style>