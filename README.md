# 🔐 SOCKS5 VPS Proxy — Static IP Exit Node (No VPN Required)

Set up a **SOCKS5 proxy server** using your VPS’s **public static IP** — no VPN credentials needed!

This solution is perfect for developers or businesses looking for a stable and cost-effective way to route traffic through a fixed IP address.

---

## ✅ Why Use This?

- 🚫 **No VPN creds** or complex tunneling required
- 🌍 Your **VPS static IP** becomes the exit node
- ⚡️ Quick to deploy via Docker
- 🔄 Auto-check & restart logic using `cron`

---

## 🛠️ Requirements

- A VPS (e.g., AWS Lightsail, DigitalOcean)
- A **static public IP** attached to the VPS
- Docker & Docker Compose installed
- (Optional) Basic Linux terminal skills

---

## 🚀 Setup Instructions

### 1. Clone this repo on your VPS

```bash
git clone https://github.com/vanjoe667/socks5-vps-proxy.git
cd socks5-vps-proxy
```

### 2. Start the docker

```
docker-compose up -d
```

### 3. Save 'check_proxy.sh' as: ~/scripts/check_proxy.sh
- Make it executable:
- chmod +x ~/scripts/check_proxy.sh
- sudo bash ~/scripts/check_proxy.sh
- cat ~/proxy_watch.log

### 4. Set it to run via crontab to restart your vps instance incase of failure (Optional)
- crontab -e
- */10 * * * * /home/ubuntu/your-dir-name/check_proxy.sh (adjust accordingly)


Feel free to use the snippetts in JS or Python in you application to test the Static returned