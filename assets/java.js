new Vue({
  el: '#app',
  data: {
    hoursFirstDigit: '0',
    hoursSecondDigit: '0',
    minutesFirstDigit: '0',
    minutesSecondDigit: '0',
    secondsFirstDigit: '0',
    secondsSecondDigit: '0',
    currentDate: ''
  },
  methods: {
    updateTime() {
      const now = moment();
      const hours = now.format('HH');
      const minutes = now.format('mm');
      const seconds = now.format('ss');

      this.hoursFirstDigit = hours[0];
      this.hoursSecondDigit = hours[1];
      this.minutesFirstDigit = minutes[0];
      this.minutesSecondDigit = minutes[1];
      this.secondsFirstDigit = seconds[0];
      this.secondsSecondDigit = seconds[1];

      this.currentDate = now.format('dddd, MMMM D, YYYY');
    }
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  }
});