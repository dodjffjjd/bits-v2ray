export const defaultProviders: Array<string> = [
  "https://raw.githubusercontent.com/sashalsk/V2Ray/main/V2Config_64base",
  "https://raw.githubusercontent.com/Leon406/SubCrawler/master/sub/share/vless",
  "https://raw.githubusercontent.com/mfuu/v2ray/master/clash.yaml",
  "https://raw.githubusercontent.com/mfuu/v2ray/master/v2ray",
  "https://raw.githubusercontent.com/peasoft/NoMoreWalls/master/list.yml",
  "https://raw.githubusercontent.com/a2470982985/getNode/main/clash.yaml",
  "https://raw.githubusercontent.com/mlabalabala/v2ray-node/main/nodefree4clash.txt",
  "https://raw.githubusercontent.com/mahdibland/V2RayAggregator/master/sub/sub_merge.txt",
]

export const defaultProtocols: Array<string> = [
  "vmess",
  "vless",
  "trojan",
]

export const defaultALPNList: Array<string> = [
  "h2,http/1.1",
  "h2",
  "http/1.1",
  "h2,http/1.1",
]

export const defaultPFList: Array<string> = [
  "chrome",
  "firefox",
  "safari",
  "edge",
  "ios",
  "android",
  "randomized",
]

export const cfPorts: Array<number> = [
	443,
	// 2053,
	// 2083,
	// 2087,
	// 2096,
	// 8443,
]

export const supportedCiphers: Array<string> = [
	"none",
	"auto",
	"plain",
	"aes-128-cfb",
	"aes-192-cfb",
	"aes-256-cfb",
	"rc4-md5",
	"chacha20-ietf",
	"xchacha20",
	"chacha20-ietf-poly1305",
]

export const defaultClashConfig = {
  "port": 7890,
  "socks-port": 7891,
  "redir-port": 7892,
  "mixed-port": 7893,
  "mode": "rule",
  "log-level": "silent",
  "allow-lan": true,
  "external-controller": "0.0.0.0:9090",
  "secret": "123456",
  "bind-address": "*",
  "external-ui": "/usr/share/openclash/ui",
  "experimental": {
    "ignore-resolve-fail": true
	},
  tun: {
    "enable": true,
    "stack": "system",
    "device": "utun",
    "auto-route": false,
    "auto-detect-interface": false,
    "dns-hijack": [
      "tcp://any:53"
    ],
	},
  "tproxy-port": 7895,
  "ipv6": true,
  "geodata-mode": true,
  "geodata-loader": "memconservative",
  "tcp-concurrent": true,
  dns: {
    "enable": true,
    "ipv6": true,
    "enhanced-mode": "fake-ip",
    "listen": "0.0.0.0:7874",
    "fake-ip-range": "198.18.0.1/16",
		"fake-ip-filter": [
      "*.lan",
      "*.localdomain",
      "*.example",
      "*.invalid",
      "*.localhost",
      "*.test",
      "*.local",
      "*.home.arpa",
      "time.*.com",
      "time.*.gov",
      "time.*.edu.cn",
      "time.*.apple.com",
      "time1.*.com",
      "time2.*.com",
      "time3.*.com",
      "time4.*.com",
      "time5.*.com",
      "time6.*.com",
      "time7.*.com",
      "ntp.*.com",
      "ntp1.*.com",
      "ntp2.*.com",
      "ntp3.*.com",
      "ntp4.*.com",
      "ntp5.*.com",
      "ntp6.*.com",
      "ntp7.*.com",
      "*.time.edu.cn",
      "*.ntp.org.cn",
      "+.pool.ntp.org",
      "time1.cloud.tencent.com",
      "music.163.com",
      "*.music.163.com",
      "*.126.net",
      "musicapi.taihe.com",
      "music.taihe.com",
      "songsearch.kugou.com",
      "trackercdn.kugou.com",
      "*.kuwo.cn",
      "api-jooxtt.sanook.com",
      "api.joox.com",
      "joox.com",
      "y.qq.com",
      "*.y.qq.com",
      "streamoc.music.tc.qq.com",
      "mobileoc.music.tc.qq.com",
      "isure.stream.qqmusic.qq.com",
      "dl.stream.qqmusic.qq.com",
      "aqqmusic.tc.qq.com",
      "amobile.music.tc.qq.com",
      "*.xiami.com",
      "*.music.migu.cn",
      "music.migu.cn",
      "+.msftconnecttest.com",
      "+.msftncsi.com",
      "msftconnecttest.com",
      "msftncsi.com",
      "localhost.ptlogin2.qq.com",
      "localhost.sec.qq.com",
      "+.srv.nintendo.net",
      "*.n.n.srv.nintendo.net",
      "+.stun.playstation.net",
      "xbox.*.*.microsoft.com",
      "*.*.xboxlive.com",
      "xbox.*.microsoft.com",
      "xnotify.xboxlive.com",
      "+.battlenet.com.cn",
      "+.wotgame.cn",
      "+.wggames.cn",
      "+.wowsgame.cn",
      "+.wargaming.net",
      "proxy.golang.org",
      "stun.*.*",
      "stun.*.*.*",
      "+.stun.*.*",
      "+.stun.*.*.*",
      "+.stun.*.*.*.*",
      "+.stun.*.*.*.*.*",
      "heartbeat.belkin.com",
      "*.linksys.com",
      "*.linksyssmartwifi.com",
      "*.router.asus.com",
      "mesu.apple.com",
      "swscan.apple.com",
      "swquery.apple.com",
      "swdownload.apple.com",
      "swcdn.apple.com",
      "swdist.apple.com",
      "lens.l.google.com",
      "stun.l.google.com",
      "+.nflxvideo.net",
      "*.square-enix.com",
      "*.finalfantasyxiv.com",
      "*.ffxiv.com",
      "*.ff14.sdo.com",
      "ff.dorado.sdo.com",
      "*.mcdn.bilivideo.cn",
      "+.media.dssott.com",
      "time-ios.apple.com",
      "shark007.net"
		],
    "fallback-filter": {
      "geoip": true,
      "geoip-code": "ID",
      ipcidr: [
        "0.0.0.0/8",
        "10.0.0.0/8",
        "100.64.0.0/10",
        "127.0.0.0/8",
        "169.254.0.0/16",
        "172.16.0.0/12",
        "192.0.0.0/24",
        "192.0.2.0/24",
        "192.88.99.0/24",
        "192.168.0.0/16",
        "198.18.0.0/15",
        "198.51.100.0/24",
        "203.0.113.0/24",
        "224.0.0.0/4",
        "240.0.0.0/4",
        "255.255.255.255/32"
      ],
      domain: [
        "+.google.com",
        "+.facebook.com",
        "+.youtube.com",
        "+.githubusercontent.com",
        "+.googlevideo.com",
        "+.msftconnecttest.com",
        "+.msftncsi.com",
        "msftconnecttest.com",
        "msftncsi.com",
        "+.*"
      ]
    },
		"default-nameserver": [
				"1.1.1.1",
				"8.8.8.8"
		],
		"nameserver": [
				"tls://1dot1dot1dot1.cloudflare-dns.com"
		],
		"fallback": [
				"https://1dot1dot1dot1.cloudflare-dns.com",
				"1.1.1.1",
				"8.8.8.8"
		]
	},
  profile: {
    "store-selected": true,
    "store-fakeip": true,
    "store-fake-ip": true
	},
  proxies: <object>[],
  "proxy-groups": <object>[],

  rules: [
    "IP-CIDR,127.0.0.0/8,DIRECT",
    "IP-CIDR,192.168.0.0/16,DIRECT",
    "IP-CIDR,172.16.0.0/12,DIRECT",
    "IP-CIDR,10.0.0.0/8,DIRECT",
    "IP-CIDR,198.18.0.1/16,REJECT,no-resolve",
    "GEOIP,private,DIRECT,no-resolve",
    "GEOIP,netflix,Indonesia",
    "GEOIP,facebook,Social",
    "GEOIP,twitter,Social",
    "GEOIP,telegram,Social",
    "GEOSITE,rule-gaming,Game",
    "GEOSITE,rule-sosmed,Social",
    "GEOSITE,rule-indo,Indonesia",
    "GEOSITE,rule-streaming,Streaming",
    "GEOSITE,videoconference,Streaming",
    "GEOSITE,rule-malicious,REJECT",
    "GEOSITE,oisd-full,Ads",
    "GEOSITE,rule-ads,Ads",
    "GEOSITE,oisd-nsfw,Adults",
    "GEOSITE,category-porn,Adults",
    "DST-PORT,21,General",
    "DST-PORT,22,General",
    "DST-PORT,23,General",
    "DST-PORT,53,General",
    "DST-PORT,80,General",
    "DST-PORT,123,General",
    "DST-PORT,143,General",
    "DST-PORT,182,General",
    "DST-PORT,183,General",
    "DST-PORT,194,General",
    "DST-PORT,443,General",
    "DST-PORT,465,General",
    "DST-PORT,587,General",
    "DST-PORT,853,General",
    "DST-PORT,993,General",
    "DST-PORT,995,General",
    "DST-PORT,998,General",
    "DST-PORT,2052,General",
    "DST-PORT,2053,General",
    "DST-PORT,2082,General",
    "DST-PORT,2083,General",
    "DST-PORT,2086,General",
    "DST-PORT,2095,General",
    "DST-PORT,2096,General",
    "DST-PORT,5222,General",
    "DST-PORT,5228,General",
    "DST-PORT,5229,General",
    "DST-PORT,5230,General",
    "DST-PORT,8080,General",
    "DST-PORT,8443,General",
    "DST-PORT,8880,General",
    "DST-PORT,8883,General",
    "DST-PORT,8888,General",
    "DST-PORT,8889,General",
    "DST-PORT,7892,REJECT",
    "DST-PORT,7895,REJECT",
    "DST-PORT,3478-3497/8801-8810/16384-16387/1853/8200/5004/9000/5090-5091/5349/10000/19302-19309/5938/5060-5061/500/4500,Streaming",
    "DST-PORT,5000-5221/5224-5227/5229-5241/5243-5287/5289-5352/5354-5509/5517/5520-5529/5551-5559/5601-5700/8443/9000-9010/9443/10003/30000-30300,Game,tcp",
    "DST-PORT,5517-5529/5551-5559/5601-5700/8001/8130/8443/9000-9010/9120/9992/10003/30000-30300,Game,udp",
    "DST-PORT,6006/6008/6674/7006-7008/7889/8001-8012/9006/9137/10000-10012/11000-11019/12006/12008/13006/15006/20561/39003/39006/39698/39779/39800,Game,tcp",
    "DST-PORT,6006/6008/6674/7006-7008/7889/8008/8001-8012/8130/8443/9008/9120/10000-10015/10100/11000-11019/12008/13008,Game,udp",
    "DST-PORT,7889/10012/13004/14000/17000/17500/18081/20000-20002/20371,Game,tcp",
    "DST-PORT,8011/9030/10491/10612/12235/13004/13748/17000/17500/20000-20002/7086-7995/10039/10096/11455/12070-12460/13894/13972/41182-41192,Game,udp",
    "DST-PORT,3013/10000-10019/18082/50000/65010/65050,Game,tcp",
    "DST-PORT,7085-7995/8700/9030/10010-10019/17000-20100,Game,udp",
    "DST-PORT,10001-10094,Game,tcp",
    "DST-PORT,10101-10201/10080-10110/17000-18000,Game,udp",
    "DST-PORT,5055-5058,Game,udp",
    "DST-PORT,42472,Game,tcp",
    "DST-PORT,42472/22101-22102,Game,udp",
    "DST-PORT,9330-9340,Game,tcp",
    "DST-PORT,9330-9340,Game,udp",
    "DST-PORT,2080-2099,Game,tcp",
    "DST-PORT,5100,Game,udp",
    "DST-PORT,9100-9200/8230-8250/8110-8120/27000-28998,Game,tcp",
    "DST-PORT,27000-28998/39000,Game,udp",
    "DST-PORT,7770-7790,Game,tcp",
    "DST-PORT,16300-16350,Game,udp",
    "DST-PORT,44590-44610,Game,tcp",
    "DST-PORT,40000-40010,Game,udp",
    "DST-PORT,10500-10515,Game,tcp",
    "DST-PORT,60970-60980,Game,udp",
    "DST-PORT,27015-27030/27036-27037,Game,tcp",
    "DST-PORT,4380/27000-27031/27036,Game,udp",
    "DST-PORT,14422,Game",
    "DST-PORT,16999,Game",
    "DST-PORT,8013/8888,Game",
    "DST-PORT,39190-39200/49001-49190,Game,tcp",
    "DST-PORT,40000-40010,Game,udp",
    "DST-PORT,14009/40005,Game"
  ],
}
