<script>
export default {
  validate({ context }) {
    // Must be a number
    context.redirect(301, '/')
    // return false
  }
}
</script>
