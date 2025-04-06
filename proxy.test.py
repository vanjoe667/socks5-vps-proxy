import requests

proxies = {
    'http': 'socks5h://yourUsername:yourPassword@YOUR_VPS_IP:1080',
    'https': 'socks5h://yourUsername:yourPassword@YOUR_VPS_IP:1080'
}

ip = requests.get('https://ifconfig.me', proxies=proxies, timeout=10).text
print('Your outgoing IP:', ip)