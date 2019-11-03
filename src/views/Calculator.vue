<template>
    <div class='container'>
        <h1>Tip Calculator</h1>
        <form id='calculator'>
            <input type='text' placeholder='Total Bill'>
            <input type='text' placeholder='% of tip dropdown'>
            <input type='text' placeholder='Party Size'>
            <button>Calculate</button>
        </form>
    </div>
</template>

<style lang="scss">
.container {
    margin: 15% auto;
    width: 50%;
    h1 {
        text-align: center;
    }
    #calculator {
        border: 1px solid gray;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        margin: 25px;
        input {
            font-size: 22px;
            padding: 5px;
            margin: 20px 20px 0 20px;
        }
        button {
            font-size: 22px;
            padding: 5px;
            margin: 20px 20px;
            background: none;
            width: 40%;
        }
    }
}
</style>