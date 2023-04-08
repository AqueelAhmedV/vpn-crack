import ProxyController from "./proxy-control.js"
import ProxyConfigFactory from "./proxy-config-factory.js"

let hosts = [
	"shoutouttomyex.icu",
	"terapiadeparej.site",
	"scoesc.xyz",
	"ipltrainingcen.fun",
	"smartpaydayonl.live",
	"myk104.live",
	"taihojutsu-iw.online",
	"binkleyhurst.fun",
	"shortram.icu",
	"heavenlytreats.online",
	"thehippiedippi.site",
	"funfunfunfest.icu",
	"nhlgamer.online",
	"annaphillipsco.fun",
	"mrsikhnet.website",
	"amparonavarros.space",
	"solar-savingsa.live",
	"masterclasstou.icu",
	"evidenceinvest.xyz",
	"ratehub.site",
	"360psg.space",
	"tandoori-night.space",
	"quirtfamilyden.website",
	"factorie.website",
	"wealthycollege.xyz",
	"jan-pro.xyz",
	"comma-store.website",
	"fulgan.site"
]

export default class Discovry {
	constructor() {

		this.getHosts = function (count, callback) {
			let result = [];
			let seen = {};
			for (let i = 0; i < count; i++) {
				let idx = Math.floor(Math.random() * 100000) % hosts.length;
				//console.log("getHosts", count, idx);
				if (seen[idx] === true) {
					continue
				}
				seen[idx] = true;
				result.push(hosts[idx])
			}
			callback(result);
		};


		this.getProxyController = function (callback) {
			this.getHosts(10, function (servers) {
				//console.log("Hosts fetched successfully");
				let rule;
				rule = new ProxyController();
				let proxyConfigFactory = new ProxyConfigFactory()
				rule.config = proxyConfigFactory.getConfigForHosts(servers);
				callback(rule);
			});
		};
	}
}

