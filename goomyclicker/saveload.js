// Local storage in saving

function save_game(){
	
	// store all saved data.

	localStorage["goomyclicker.goomy.level"] = goomy.level;
	localStorage["goomyclicker.goomy.exp"] = goomy.exp;
	localStorage["goomyclicker.goomies"] = goomies;
	localStorage["goomyclicker.total_goomies"] = total_goomies;

	for(item in items){
		localStorage["goomyclicker.items." + item + ".count"] = items[item].count;
	}
	
	for(var a = 0; a < upgrades.length; ++a){
		localStorage["goomyclicker.upgrades." + a + ".bought"] = upgrades[a].bought;
	}
	
	$("#save_dialog").show();
	setTimeout(function(){$("#save_dialog").hide();}, 3000);

}


function load_game(){
	
	if(localStorage.getItem("goomyclicker.goomy.level") !== null)
		goomy.level = parseFloat(localStorage["goomyclicker.goomy.level"]);
	if(localStorage.getItem("goomyclicker.goomy.exp") !== null)
		goomy.exp = parseFloat(localStorage["goomyclicker.goomy.exp"]);
	if(localStorage.getItem("goomyclicker.goomies") !== null)
		goomies = parseFloat(localStorage["goomyclicker.goomies"]);
	if(localStorage.getItem("goomyclicker.total_goomies") !== null)
		total_goomies = parseFloat(localStorage["goomyclicker.total_goomies"]);

	for(item in items){
		if(localStorage.getItem("goomyclicker.items." + item + ".count") !== null){
			items[item].count = parseInt(localStorage["goomyclicker.items." + item + ".count"]);
			if(items[item].count > 0) $("#" + item + "_count").html(" - " + items[item].count);
		}
	}
	
	for(var a = 0; a < upgrades.length; ++a){
		if(localStorage.getItem("goomyclicker.upgrades." + a + ".bought") === "true"){
			upgrades[a].bought = true;
		}
	}

}


// Text import/export

savetextstring = "0123456789.-,|e`";
savetextmap = {
	"0": "0000",
	"1": "0001",
	"2": "0010",
	"3": "0011",
	"4": "0100",
	"5": "0101",
	"6": "0110",
	"7": "0111",
	"8": "1000",
	"9": "1001",
	".": "1010", // decimal
	"-": "1011", // negative
	",": "1100", // level 2 separator
	"|": "1101", // level 1 separator
	"e": "1110", // exponent
	"`": "1111"  // symbol escape
};

base64string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/=";
// base64string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
// because fuck the regular encoding, this encoding type is extensible from base16!





/////////
// Save export starts here.
/////////

function sstr_to_bin(sstr){
	var bin = "";
	for(var a = 0; a < sstr.length; ++a){
		if(sstr[a] == "+") continue; // ignore plus signs completely
		if(savetextstring.indexOf(sstr[a]) == -1){
			return "Export error";
		}
		bin += savetextmap[sstr[a]];
	}
	return bin;
}

function bin_to_b64(bin){
	
	if(bin == "Export error") return bin;
	if(bin.length % 2 != 0){
		return "Export error";
	}
	
	var b64 = "";
	var padding = "";
	
	while(bin.length % 6 != 0){
		bin += "00";
		padding += base64string[64];
	}
	
	var strlength = 0;
	for(; strlength < bin.length; strlength += 6){
		b64 += base64string[parseInt(bin.substr(strlength, 6), 2)];
	}

	return b64 + padding;
}

function sstr_to_b64(sstr){
	return bin_to_b64(sstr_to_bin(sstr));
}

function export_save(){
	
	var d01_level = goomy.level;
	var d02_exp = Math.floor(goomy.exp);
	var d03_goomies = Math.floor(goomies);
	
	var d04_items = "";
	for(item in items){
		d04_items += items[item].count + ",";
	}
	d04_items = d04_items.slice(0, -1); // remove trailing ,
	
	var d05_totalgoomies = Math.floor(total_goomies);
	
	var d06_upgrades = "";
	for(var a = 0; a < upgrades.length; ++a){
		if(upgrades[a].bought){
			d06_upgrades += a + ",";
		}
	}
	d06_upgrades = d06_upgrades.slice(0, -1); // remove trailing ,

	var save_string = sprintf("%s|%s|%s|%s|%s|%s", d01_level, d02_exp, d03_goomies, d04_items, d05_totalgoomies, d06_upgrades);
	
	return sstr_to_b64(save_string);
}

function close_export(){
	$("#export_dialog").hide();
}


/////////
// Save import starts here.
/////////

function show_import(){
	$("#import_dialog").toggle();
	$("#export_dialog").hide();
}

function b64_to_bin(b64){
	var bin = "";
	for(var a = 0; a < b64.length; ++a){
		if(b64[a] == "="){
			bin = bin.slice(0, -2);
			continue;
		}
		for(var b = 0; b < 64; ++b){
			if(b64[a] == base64string[b]){
				bin += sprintf("%06b", b);
				break;
			}
		}
	}
	return bin;
}

function bin_to_sstr(bin){
	var sstr = "";
	for(var a = 0; a < bin.length; a += 4){
		sstr += savetextstring[parseInt(bin.substr(a, 4), 2)];
	}
	return sstr;
}

function b64_to_sstr(b64){
	return bin_to_sstr(b64_to_bin(b64));
}

function import_save(){
	
	var save_b64 = $("#import_string").val();
	var save_string = b64_to_sstr(save_b64);

	var data = save_string.split("|");
	
	var d01_level = parseInt(data[0]);
	if(isNaN(d01_level)) d01_level = 0;
		goomy.level = d01_level;

	var d02_exp = parseInt(data[1]);
	if(isNaN(d02_exp)) d02_exp = 0;
		goomy.exp = d02_exp;
		
	var d03_goomies = parseFloat(data[2]);
	if(isNaN(d03_goomies)) d03_goomies = 0;
		goomies = d03_goomies;

	var d04_items = data[3].split(",");
	var seeker = 0;
	for(item in items){
		if(typeof(d04_items[seeker]) != "undefined"){
			items[item].count = parseInt(d04_items[seeker]);
			seeker += 1;
		}else{
			items[item].count = 0;
		}
	}

	var d05_totalgoomies = parseFloat(data[4]);
	if(isNaN(d05_totalgoomies)) d05_totalgoomies = 0;
		total_goomies = d05_totalgoomies;

	if(data[5] != null){	
		var d06_upgrades = data[5].split(",");
		for(var a = 0; a < d06_upgrades.length; ++a){
			var upgrade = parseInt(d06_upgrades[a]);
			if(!isNaN(upgrade)){
				upgrades[upgrade] = true;
			}
		}
	}

	recalc();
	
	$("#import_dialog").hide();

}
