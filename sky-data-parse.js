import fs from 'node:fs/promises';

const basedir = process.cwd();

const readInData = async () => {

    try {
        const jsonData = await fs.readFile(`${basedir}/data/sky-objects.json`);
    
        const skyData = JSON.parse(jsonData.toString());

        return skyData;

    } catch(e) {
        console.error('ERROR', e);
    }
    return;
};

readInData().then(data => {

    //console.log(data);
    
    const results = data.filter(item => {
        return (item.image && item.lights);
    }).map(({image, lights}) => {
         const filteredLights = lights.replace(/ out of [0-9]*/g, '')
                .replace(/ seconds/g, '').replace(/\@/g, '*');
         const totalsSeconds = eval(filteredLights);
         const totalsMinutes = +Number(totalsSeconds / 60).toFixed(2);
         return {
             image,
             lights: filteredLights,
             totalsSeconds,
             totalsMinutes
         };
    });

    console.log(results);
    
}).catch(e => {
    console.error('ERROR', e);
});