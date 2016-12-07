<template>
  <div id="app" class="columns is-mobile">
  <div class="column is-half is-offset-one-quarter">

    <label class="label">Your Palindrome</label>
    <p class="control has-icon has-icon-right">
      <input class="input" v-bind:class="hasResults" type="text" placeholder="type it here" v-model="palindrome">
      <i v-if="hasResults" class="fa" v-bind:class="resultIcon"></i>
      <span v-if="hasResults" class="help" v-bind:class="resultMessageClass">{{ resultMessage }}</span>
    </p>

    <p class="control">
      <button class="button is-primary" v-on:click="checkPalindrome()">Check</button>
    </p>

  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      palindrome: '',
      hasResults: {
        'is-success': false,
        'is-danger': false
      },
      resultIcon: '',
      resultMessage: '',
      resultMessageClass: ''
    }
  },
  methods: {
    checkPalindrome() {
      this.$http.get(`http://localhost:3000/${this.palindrome}`).then((response) => {
              // success callback
              this.hasResults['is-success'] = true;
              this.hasResults['is-danger'] = false;
              this.resultIcon = 'fa-check';
              this.resultMessage = 'This is a Palindrome';
              this.resultMessageClass = 'is-success';

              // console.log(JSON.stringify(response));
              //   console.log(JSON.stringify(this.hasResults));
              // commit('RESET_INVENTORY', response.body)
            }, (response) => {
              this.hasResults['is-success'] = false;
              this.hasResults['is-danger'] = true;
              this.resultIcon = 'fa-warning';
              this.resultMessage = 'This is NOT a Palindrome';
              this.resultMessageClass = 'is-danger';

              // error callback
                // console.log(JSON.stringify(response));
                // console.log(JSON.stringify(this.hasResults));
            });
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
