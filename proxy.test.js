const axios = require('axios');
const { SocksProxyAgent } = require('socks-proxy-agent');

async function testProxy() {
  const agent = new SocksProxyAgent('socks5h://yourUsername:yourPassword@YOUR_VPS_IP:1080');

  try {
    const response = await axios.get('https://ifconfig.me', {
      httpAgent: agent,
      httpsAgent: agent,
      timeout: 10000
    });

    console.log('Outgoing IP:', response.data);
  } catch (err) {
    console.error('Proxy test failed:', err.message);
  }
}

testProxy();