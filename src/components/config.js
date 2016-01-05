/*eslint no-process-env:0*/
export default {
  port: process.env.port || 3002
  ,env: process.env.NODE_ENV || 'development'
};