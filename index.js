const basePath = process.cwd();
const fs = require("fs");

const baseUri = "http://ipfs.io/ipfs/QmNWdYFbFpgt3EMK2c51P8SgtMMPfMSANiTDFnoPT6krZF";

(async () => {

    // read json data
    for (let i = 1; i <= 100; i++) {
        let path = "metadata/" + `${i}` + ".json";
        let rawdata = fs.readFileSync(path);
        let data = await JSON.parse(rawdata);
        data.image = `${baseUri}/${i}.png`;
        fs.writeFileSync(
            path,
            JSON.stringify(data, null, 2)
        );

    }


})();