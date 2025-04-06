#!/bin/bash

IP=$(curl --socks5-hostname yourUsername:yourPassword@127.0.0.1:1080 https://ifconfig.me --max-time 10 2>/dev/null)

if [ -z "$IP" ]; then
  echo "$(date): Proxy appears down, restarting..." >> ~/proxy_watch.log
  sudo reboot
else
  echo "$(date): Proxy working fine. IP: $IP" >> ~/proxy_watch.log
fi


