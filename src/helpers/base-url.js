export default {
  url:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4501/admin'
      : 'https://api.unending.xyz/admin'
}
