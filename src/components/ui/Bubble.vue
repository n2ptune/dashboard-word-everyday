<script>
export default {
  props: ['x', 'y', 'scale', 'index'],
  data() {
    return {
      noiseSeedX: null,
      noiseSeedY: null,
      xWithNoise: null,
      yWithNoise: null
    }
  }
}
</script>
