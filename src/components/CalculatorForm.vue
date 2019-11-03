<template>
    <form id='calculator-form'>
        <input type='text' placeholder='Total Bill'>
        <select name='tip' id='tip'>
            <option value='0' selected>Tip</option>
            <option value='10'>10%</option>
            <option value='15'>15%</option>
            <option value='18'>18%</option>
            <option value='20'>20%</option>
        </select>
        <input type='text' placeholder='Party Size'>
        <button>Calculate</button>
    </form>
</template>

<style lang="scss">
#calculator-form {
    input {
        font-size: 22px;
        padding: 5px;
        margin: 20px 0px 0 30px;
        width: 77%;
    }
    #tip {
        width: 81%;
        height: 35px;
        margin: 20px 0px 0 30px;
        font-size: 20px;
    }
    button {
        font-size: 22px;
        padding: 5px;
        float: right;
        margin: 20px 30px;
        background-color: rgb(250, 251, 252);
        width: 110px;
    }
}
</style>