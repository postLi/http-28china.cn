const middleware = {}

middleware['ipinfo'] = require('@/middleware/ipinfo.js');
middleware['ipinfo'] = middleware['ipinfo'].default || middleware['ipinfo']

export default middleware
